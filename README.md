# Game of life API

English ⬇
## Understanding the Game of Life
### Rules
The Game of Life is a mathematical model conceived in 1970 by John Conway. It is a cellular automaton where cells evolve on a two-dimensional grid at each turn according to specific rules. A cell can be in one of two states: dead or alive.

From this initial state, our automaton can come to life through a series of generations where our cells follow 3 rules:
- Birth: if a ⬛ dead cell is surrounded by exactly 3 🟪 live cells, it comes to life.
- Death: if a 🟪 live cell is surrounded by fewer than 2 or more than 3 🟪 live cells, it dies (referred to as underpopulation and overpopulation).
- Survival: if a 🟪 live cell is surrounded by 2 or 3 🟪 live cells, it survives.

💡 Each cell has 8 neighboring cells except those at the edges of the grid if it is finite. By chaining the generations, this mathematical model allows for creating a simulation of life, with pixels. This is also known as Artificial Life.

### 4 major configuration categories
As the community of Game of Life enthusiasts studies and tests pixel placements and their evolutions, life patterns emerge; these are referred to as configurations or "patterns". Among the major configurations, we'll detail the 4 main ones:

- Still lifes: Still lifes are static configurations. They do not change over the turns.
- Oscillators: Oscillators are configurations that follow a cycle. They return to their initial state after a certain number of generations (referred to as period).
- Spaceships: Spaceships are configurations that can move. They act like oscillators that return to their initial state at a different position on the grid.
- Guns: Guns are configurations that repetitively produce another type of configuration (usually spaceships). They are akin to factories constructing spaceships.

### Problem Statement
As an enthusiast of the Game of Life, you want to introduce it to the general public.

You've noticed that the community often turns to the official website conwaylife.com to discover the mechanics and configurations of the game. Although this resource is a goldmine in terms of content, it is not very user-friendly and does not provide a good UI/UX. This "raw" aspect does not facilitate its discovery and accessibility to the general public.
You decide to team up with other developer friends who share this interest to develop the Proof Of Concept (POC) of a wiki/simulator platform dedicated to the Game of Life.

### This platform will allow:
Discovering the main rules/mechanics of the Game of Life
Experimenting with the Game of Life interactively via a simulator
Publishing detailed configuration sheets of pixel configurations (for administrators only)

### Wiki
The wiki will group a set of sorted configurations. A configuration is defined by:

Name
Configuration type

Français ⬇
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
