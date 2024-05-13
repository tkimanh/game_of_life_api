# Game of life API

## Comprendre le jeu de la vie
### Règles
Le Jeu de la Vie est un modèle mathématique imaginé en 1970 par John
Conway.
Il s’agit d’un automate cellulaire où des cellules évoluent sur une grille
bidimensionnelle
à chaque tour selon des règles bien précises.
Un cellule peut être dans 2 états : morte ou vivante.

A partir de cet état initial, notre automate peut commencer à prendre vie à
travers un enchaînement de générations où nos cellules respectent 3 règles :
Naissance : si une ⬛ cellule morte est entourée d’exactement 3 🟪
cellules vivantes, elle prend vie.
Mort : si une 🟪 cellule vivante est entourée de moins de 2 ou plus de 3 🟪
cellules vivantes, elle meurt (on parle de sous-population et de
surpopulation).

Survie : si une 🟪 cellule vivante est entourée de 2 ou 3 🟪 cellules
vivantes, elle survit.

💡 Chaque cellule à 8 cellules voisines hormis celles aux extrémités de la
grille si celle ci est finie).
En enchaînant les générations, ce modèle mathématique permet de créer une
simulation de la vie, avec des pixels. On parle aussi de Vie Artificielle.

### 4 grandes catégories de configuration
A mesure que la communauté de passionnés du jeu de la vie étudie et teste des
placements de pixels et leurs évolutions, des schémas de vie se distinguent ;
on parle de configurations ou « patterns ». Parmi les grandes configurations,
on détaillera les 4 principales :
- Les natures mortes : Les natures mortes sont des configurations statiques. Elles ne changent
pas au fil des tours.
- Les oscillateurs : Les oscillateurs sont des configurations qui suivent un cycle. Elles
reviennent ainsi à leur état initial après un certain nombre de génération (on
parle de période).
- Les vaisseaux : Les vaisseaux sont des configurations qui peuvent se déplacer. Ils
agissent comme des oscillateurs qui retrouvent leur état initial à une
position différente sur la grille.
- Les guns : Les guns sont des configurations qui produisent, de manière répétitive, un
autre type de configuration (généralement des vaisseaux). On les
apparente à des usines de construction de vaisseaux.

### Problématique
En tant que passionné du Jeu de la Vie, vous souhaitez le faire découvrir
auprès du grand public.

Vous avez pu constater que la communauté a l’habitude de se tourner vers le
site officiel conwaylife.com pour découvrir les mécaniques et configurations du
jeu. Bien que cette ressource soit une mine d’or en termes de contenu, elle est
peu digeste et ne confère pas une bonne UI/UX. Cet aspect « brut », ne facilite
pas sa découverte et son accessibilité au grand public.
Vous décidez de vous entourer d’autres amis dev qui partagent cet intérêt afin
de développer le POC (Proof Of Concept) d’une plateforme type
wiki/simulateur dédiée au Jeu de la Vie.

### Cette plateforme permettra :
- De découvrir les règles / mécaniques principales du Jeu de la Vie
- D’expérimenter le Jeu de la Vie de manière interactive via un simulateur
- De publier dans un wiki des fiches détaillant des configurations de pixels
(pour les administrateurs uniquement)

### Wiki
Le wiki regroupera un ensemble de configuration triées. Une configuration est
définie par :
- Nom
- Type de configuration
