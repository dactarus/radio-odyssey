#!/usr/bin/env python3
"""
Audit du contenu dupliqué entre Radio Odyssey et Radio Odyssey Relax
(point 3.5 du brief « faire exister Relax dans le référencement », §109).

Compare le TEXTE VISIBLE des pages construites des deux sites :
  1. blocs identiques (>= 30 caractères, après normalisation) ;
  2. phrases identiques (>= 7 mots) ;
  3. recouvrement par séquences de 5 mots : tout bloc de Relax (>= 12 mots) dont
     au moins SEUIL % des séquences existent déjà chez Odyssey — c'est ce qui
     attrape le « copié puis légèrement retouché » ;
  4. titres et descriptions identiques.
Les pages légales (mentions, politique de confidentialité) sont exclues : leur
similitude est normale. Le texte d'interface commun à toutes les pages
(avertissement navigateur, bandeau cookies) est signalé à part.

Usage (les deux sites doivent être construits : `npm run build` dans chacun) :

    python3 -I scripts/audit-doublons.py
    python3 -I scripts/audit-doublons.py --seuil 0.30 --odyssey ../radio-odyssey/dist --relax ../radio-odyssey-relax/dist

Lectures seules : ne modifie rien. Sortie : la liste des blocs de Relax à revoir.
"""
import argparse, collections, html, pathlib, re
from html.parser import HTMLParser

FEUILLES = {'p','li','h1','h2','h3','h4','h5','h6','td','th','figcaption','summary','dt','dd','blockquote'}
SKIP = {'script','style','svg','noscript','template','head','title'}
LEGAL = {'mentions-legales.html', 'politique-de-confidentialite.html'}
INTERFACE = ('pour une meilleure écoute', "aucun cookie n'est déposé sans votre accord")
# Texte VOLONTAIREMENT commun (décision du projet) : avertissement santé repris mot pour mot,
# ligne d'attribution, références citées à l'identique. À garder tel quel.
VOLONTAIRE = ('ce contenu est fourni à titre informatif', 'relu par elisabeth', 'inserm canal détox',
              'goessl curtiss', 'goessl, curtiss')

class Collecteur(HTMLParser):
    def __init__(self):
        super().__init__(); self.skip = 0; self.cur = None; self.blocs = []
    def handle_starttag(self, tag, attrs):
        if tag in SKIP: self.skip += 1
        if self.skip: return
        if tag in FEUILLES: self.cur = []
        if tag == 'br' and self.cur is not None: self.cur.append(' ')
    def handle_endtag(self, tag):
        if tag in SKIP and self.skip: self.skip -= 1; return
        if self.skip: return
        if tag in FEUILLES and self.cur is not None:
            t = ' '.join(''.join(self.cur).split())
            if t: self.blocs.append(t)
            self.cur = None
    def handle_data(self, d):
        if not self.skip and self.cur is not None: self.cur.append(d)

def norm(s):
    s = html.unescape(s).lower().replace(' ', ' ').replace('’', "'")
    s = re.sub(r"[^a-z0-9àâäçéèêëîïôöùûüœ' ]+", ' ', s)
    return ' '.join(s.split())

def lire(dist):
    pages = {}
    for f in pathlib.Path(dist).rglob('*.html'):
        rel = str(f.relative_to(dist))
        if rel.startswith('pagefind'): continue
        c = Collecteur(); c.feed(f.read_text(encoding='utf-8', errors='ignore')); pages[rel] = c.blocs
    return pages

def shingles(n, k=5):
    w = n.split(); return {' '.join(w[i:i+k]) for i in range(max(0, len(w) - k + 1))}

def tete(dist):
    d = {}
    for f in pathlib.Path(dist).rglob('*.html'):
        h = f.read_text(encoding='utf-8', errors='ignore')
        t = re.search(r'<title>(.*?)</title>', h, re.S); m = re.search(r'<meta name="description" content="(.*?)"', h, re.S)
        d[str(f.relative_to(dist))] = ((t.group(1).strip() if t else ''), (m.group(1).strip() if m else ''))
    return d

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--odyssey', default='dist'); ap.add_argument('--relax', default='../radio-odyssey-relax/dist')
    ap.add_argument('--seuil', type=float, default=0.30)
    a = ap.parse_args()
    od, rx = lire(a.odyssey), lire(a.relax)
    corpus = collections.defaultdict(set)
    for p, bl in od.items():
        for b in bl:
            for s in shingles(norm(b)): corpus[s].add(p)
    res = []
    for p, bl in rx.items():
        if p in LEGAL: continue
        for b in bl:
            n = norm(b)
            if len(n.split()) < 12: continue
            sh = shingles(n)
            if not sh: continue
            trouves = [s for s in sh if s in corpus]
            taux = len(trouves) / len(sh)
            if taux >= a.seuil:
                pages = collections.Counter(pg for s in trouves for pg in corpus[s]).most_common(3)
                res.append((taux, p, b, pages))
    res.sort(reverse=True)
    interface = [r for r in res if any(k in norm(r[2]) for k in INTERFACE)]
    volontaire = [r for r in res if r not in interface and any(k in norm(r[2]) for k in VOLONTAIRE)]
    a_revoir = [r for r in res if r not in interface and r not in volontaire]
    print(f"Pages : Odyssey {len(od)}, Relax {len(rx)} (pages légales de Relax exclues)")
    print(f"\n== À REVOIR : {len(a_revoir)} bloc(s) de Relax recouvrant Odyssey à {a.seuil:.0%} ou plus ==")
    for taux, p, b, pg in a_revoir:
        print(f"\n[{taux:.0%}] Relax {p}  <-  Odyssey {', '.join(x for x, _ in pg)}\n    « {b[:240]} »")
    print(f"\n== Texte volontairement commun, À GARDER (avertissement santé, attribution, sources) : {len(volontaire)} occurrence(s) ==")
    print(f"== Texte d'interface commun, sans enjeu (alerte navigateur, bandeau cookies) : {len(interface)} occurrence(s) ==")
    to, tr = tete(a.odyssey), tete(a.relax)
    tit = {v[0] for v in to.values()}; des = {v[1] for v in to.values()}
    print("\n== Titres de Relax identiques à un titre d'Odyssey :", [p for p, v in tr.items() if v[0] in tit] or "aucun")
    print("== Descriptions de Relax identiques à une description d'Odyssey :", [p for p, v in tr.items() if v[1] in des] or "aucune")

if __name__ == '__main__':
    main()
