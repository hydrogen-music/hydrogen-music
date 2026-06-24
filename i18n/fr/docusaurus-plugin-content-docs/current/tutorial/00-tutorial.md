---
title: "Tutoriel de Hydrogen"
sidebar_label: "Tutoriel de Hydrogen"
---

Antonio Piraino
Vous venez de télécharger la dernière version du logiciel Hydrogen et l'installation s'est bien déroulée. Maintenant vous voulez l'essayer et recréer votre chanson favorite. Ceci pourrait en effet vous aider à apprendre à écrire les parties les plus difficiles, pour pouvoir les écouter plusieurs fois ou être sur que vous pouvez, d'un coup d'oeil rapide dans le fichier du morceau, vous le remémorer immédiatement. Hydrogen peut être utilisé comme une "boîte à rythme" avancée qui peut vous aider dans votre pratique musicale (dans la vitesse, la précision et autres bases), peut être avec un motif défini par vos soins. Cette petite introduction vous guidera dans la création d'une chanson complète. Nous travaillerons sur le morceau "Georgy Porgy" de Toto (désolé) qui a une structure assez directe, ce qui le rend approprié pour ce guide, mais cela ne veut pas dire que le morceau est _vraiment_ facile à écrire vu que le batteur, Jeff Porcaro, enrichit le groove avec son touché personnel et son feeling. Hydrogen ne jouera pas mieux que le batteur, la majeure partie de la tâche doit être accomplie par la sensibilité et l'expérience du programmeur.

Table des matières
1. En avant1. Introduction2. Premier Couplet3. Le pont et la suite4. Le Riff5. La deuxième moitié du morceau6. Le riff final
Table des matières
1. Introduction2. Premier Couplet3. Le pont et la suite4. Le Riff5. La deuxième moitié du morceau6. Le riff final
Avant de commencer assurez vous d'avoir ces différentes choses :

- Le morceau étudié : sur CD audio, ou, mieux, au format .wav, .ogg ou .mp3 pour une flexibilité optimale.
- Eventuellement la partition de batterie ou un schéma approximatif de la structure de la chanson : il peut être utile de compter les mesures et de viualiser les différentes parties du morceau.

La chanson que nous travaillons possède la structure suivante :

- **Intro :** 4 mesures
- **Couplet :** 8 mesures
- **Pont :** 8 mesures
- **Couplet :** 8 mesures
- **Pont :** 8 mesures
- **Refrain :** 8 mesures
- **Riff :** 4 mesures
- **Couplet (avec guitare) :** 8 mesures
- **Couplet (avec voix) :** 8 mesures
- **Pont :** 8 mesures
- **Refrain :** 8 mesures
- **Refrain :** 8 mesures
- **Refrain :** 8 mesures
- **Riff final :** 4 mesures

En regardant cet arrangement nous pouvons voir que quelques motifs se répétent, nous emploierons donc cette légende avec Hydrogen :

- Verse -> A
- Bridge -> B
- Chorus -> C

Et pour sauver les mots explicatifs, nou utiliserons les TLA communs (Trois Lettres Acronymes ^_^):

- LMB: left mouse button (boutons gauche de la souris)
- RMB: right mouse button (bouton droit de la souris)

Bien, maintenant débranchez votre téléphone et lancez Hydrogen : au travail !

Le motif de base (Fig. 1 and 2) se compose de 4 mesures (divisé en 2 mesures différentes, chacune répétée 2 fois, donc [2a*2]+[2b*2]) et dure la chanson entière, du début à la fin, riff inclus ; la plupart du temps (intro et riff exclus) ce motif de base est répété 2 fois pour arriver à une structure classique de 8 mesures pour chaque partie du morceau (A,B,C). Avant de commencer, plaçez la vitesse à 98bpm (Remarque : vous pouvez trouver la vitesse (en Bpm) du morceau par vous même en la jouant avec votre lecteur préféré, XMMS, et en tapant le rythme avec la touche antislash dans Hydrogen). À partir du menu "Résolution de la grille" choisissez '16'. Pour créer un nouveau motif, cliquez droit sur l'instrument "Closed HH" et choisissez "Fill Notes": les deux premières mesures seront remplies. Insérez alors manuellement les notes de la caisse claire Jazz ("Snare Jazz") et de la grosse caisse ("Kick") comme indiqué sur les 2 images ci-dessous. Nous avons le motif de base pour notre morceau. Notez comment les coups de charleston sont accentués de manières différentes : ceux qui tombent sur les temps (au début d'une mesure) ont une intensité de [0,78 ], les autres de [0.50] (vous pouvez vérifier cela sur la barre de statut inférieure d'Hydrogen), afin de donner du groove au morceau.

![Fig. 1Motif de base, première mesure. ](/img/docs/tutorial/PatternBase1.png)

![Fig. 2Motif de base, seconde mesure. ](/img/docs/tutorial/PatternBase2.png)

Avant que nous commencions à écrire les couplets, il y a 4 mesures d'intro, toutes identiques, excepté pour la dernière, à la fin de laquelle il y a un coup de charleston ouvert . Faites ce qui suit :

- Renommez le premier motif dans l'éditeur de morceau en cliquant avec le bouton droit de la souris sur« Empty Pattern ». Changez le, par exemple, en « intro_a ».
- Ajoutez 2 'X' près du premier (qui représente les deuxième et troisième mesures)
- Créez dans l'éditeur de motif le motif de base (Fig. 1)

Pour la quatrième mesure, nous allons remplacer par une ouverture de charleston (Fig. 3) :

- Cliquez droit dans l'éditeur de morceau sur le motif nouvellement créé, sélectionnez « copier », puis choisissez un nom (ex.« intro_b ») et un nouveau motif apparait en dessous automagiquement !
- Sélectionnez le motif que vous venez de créer (IMPORTANT !)
- Effacez les 2 dernières notes de « charleston fermé » et remplacer par des « charleston ouverts ».
- Sélectionnez '32' depuis  "Résolution de la grille" et ajoutez 2 nouvelles notes juste à coté des précédentes.
- Ajustez l'intensité de ces 4 notes de sorte que le premier soit à [0.78] et que les 3 autres soient à [0.20] pour simuler une ouverture plus longue.

![Fig. 3Détail de l'intro, quatrième mesure. ](/img/docs/tutorial/Intro4th.png)

Nous venons de créer le motif de base, maintenant, nous devrions donc connaître ... les bases ! Pour créer le premier couplet, il suffit de copier dans l'éditeur de motif le motif « intro_a » et de le renommer en « A-B-C_1 », car ceci est la première mesure du couplet qui par la suite s'adaptera au pont (B) et au refrain (C). **Prenez garde**, pourquoi ne pas simplement ajouter 2 autres croix à la suite de ce motif ? Parce que dans la première mesure il y a un coup de cymbale « crash » qui fini l'intro précédente, donc les deux mesures ne sont pas complètement équivalentes; vous devez donc copier le motif « A-B-C_1 » et le renommer en « A-B-C_2 » puis couper ce susdit coup de crash.

Faire la même chose pour les 2 mesures suivantes : copiez simplement dans l'éditeur de motif le motif de la fig. 2, renommez le comme les deux précédents et ajoutez 2 croix (les deux mesures étant les mêmes), vous devriez donc atteindre le nombre '8' comme indiqué sur la fig. 4.

Les 4 mesures restantes du couplet sont plus ou moins les mêmes que ce que vous venez d'écrire, alors pourquoi devriez vous tout refaire de zéro ? Les mesures 5,6,7 sont identiques aux précédentes ainsi vous avez juste à ajouter 2 croix au motif « A-B-C_2 » et une à « A-B-C_3+4 »en prenant soin de renommer les motifs logiquement (pour comprendre par la suite comment le morceau se déroule dans l'éditeur de morceau), car la huitième mesure se termine par un remplissage qui clôture le couplet. Vous devez copier/coller dans une nouvelle ligne un motif déjà créé (ex. « A-B-C_3+4 », le renommer en « A-B-C_8 » et le modifier comme sur la Fig. 4. Notez que dont les trois « caisses claires Jazz » de la quatrième mesure ont une intensité respective réglée à [ 0.10 ], [ 0.20 ] et [ 0.78 ]; vous ne pouvez pas le voir sur l'image mais les deux notes finales du tom médium « Tom Mid ») ont une intensité de [0.50], après tout ce n'est qu'un tout petit remplissage, autant ne pas exploser les peaux des toms :)

![Fig. 4Huitième mesure du premier couplet. ](/img/docs/tutorial/Verse8th.png)

Le résultat dans l'éditeur de chanson devrait ressembler à la Fig. 5.

![Fig. 5Introduction et premier couplet dans l'éditeur de morceau. ](/img/docs/tutorial/VerseAll.png)

**ATTENTION!** si vous atteignez ce point sans avoir sauvegardé votre travail, il est temps de le faire MIANTENANT. Un simple [CTRL+S] suivi du nom du morceau, et vous serez bien. Si vous voulez ajouter des infos, cliquez avec le bouton gauche sur le bouton 'S' de l'éditeur de morceau et modifiez les champs comme vous le voulez : ces infos seront affichées lors de l'ouverture du projet.

Maintenant que vous avez réalisé le premier couplet vous devriez avoir une idée du mode de fonctionnement global de ce morceau : le premier pont est fait des mêmes 8 mesures (4+4) avec un léger changement à la fin de la quatrième, ce qui nous oblige à créer une mesure spéciale alors que les autres seront tout simplement ajoutées à l'aide de notre géniale petite croix ('X').

Utilisons le dernier motif créé comme un échantillon (« A-B-C_8 »), puis copiez le et renommez le en « Bridge1_4 » (c'est à dire quatrième mesure du premier pont) et modifiez le comme sur la Fig. 6. Nous avons rapidement terminé le pont ! L'éditeur de morceau devrait ressembler à la fig. 7. En regardant attentivement l'illustration on pourrait se demander pourquoi la cinquième mesure du pont (la 17ème du morceau) n'est pas assignée au motif « A-B-C_1 »; la réponse est que le motif a également un coup de « crash » final qui n'est pas présent dans « A-B-C_2+5+6 ».

![Fig. 6Quatrième mesure du pont. ](/img/docs/tutorial/Bridge1_4th.png)

![Fig. 7L'éditeur de morceau avec le premier pont. ](/img/docs/tutorial/VerseBridge.png)

Maintenant vous pouvez créer rapidement les parties restantes du morceau : après le pont il y a un autre couplet, puis un pont et un refrain, qui sont la plupart du temps identiques, vous devrez simplement créer des motifs différents dans quelques cas (plus loin dans ce guide, vous trouverez le fichier du morceai avec la chanson entière). Naturellement, vous pouvez écrire autant de lignes dans l'éditeur de morceau que de mesures dans le morceau, mais un morceau complet risquerait d'être difficile à suivre, et il prendrait beaucoup de place.

Vers le milieu du morceau il y a deux riffs : ils sont tous deux composés de 2 mesures mais en fait le motif est toujours le même, et seul les autres instruments jouent quelque chose que nous verrons dans le dernier riff de ce morceau (où la batterie joue elle aussi le motif du riff).

Dans ce riff la batterie joue le même motif que nous connaissons déjà pendant une mesure (voir Fig. 1) puis une nouvelle mesure de deux notes seulement (fig. 8), puis le motif de base à nouveau, puis encore les deux mêmes notes avec un petit fill à la fin (Fig. 9) ; encore une ouverture charleston avec des notes d'intensité différente : [0.78] et [0.20].

![Fig. 8Deuxième mesure du riff. ](/img/docs/tutorial/Riff1b.png)

![Fig. 9Quatrième mesure du riff. ](/img/docs/tutorial/Riff1c.png)

Après le riff nous avons fait la moitié du travail. Nous n'avons plus qu'à créer deux couplets, un pont, un refrain qui sera répété 3 fois et un autre riff à la fin.

La seconde partie du morceau est lègèrement différente de la précédente car il y a quelques ouvertures de charleston pendant les couplets et, toutes les quatres mesures, un petit fill presque à chaque fois : c'est plus facile de démarrer à zéro un nouvel enchainement de motif (c'est à dire : « A-B-C-* » dans l'éditeur de morceau en leur ajoutant un suffixe du style '_hh' pour rappeler la présence de « l'ouverture de charleston ». Comme nous l'avons vu dans l'introduction de ce tutoriel, Jeff Porcaro met beaucoup de sa personalité dans son jeu, ce qui fait la reproduction froide et exacte d'une partition (ce que fait Hydrogen). Les parties suivantes du morceau seront donc plus ou moins fidèles au morceau original, mais une autre 'oreille' pourrait donner une autre écriture de la même partie. Après tout, on s'en fiche : ce tutoriel explique comment utiliser Hydrogen, pas comment joue Porcaro :)

La fig. 10 montre l'écran de l'éditeur de morceau placé sur les deux couplets et le pont qui suivent le premier riff ; comme vous pouvez le voir, les premières mesures (48-50 au niveau de la numérotation de l'éditeur de morceau) n'ont pas été modifiées alors que les autres (51-71) ont été ré-écrites. De plus, il y a plusieurs motifs 'ad hoc' identifiées comme« A-B-C-3a_hh » (Fig. 11 pour voir un exemple) et « A-B-C- 4a_hh » qui contiennent quelques changements que nous n'avons jamais écrits jusqu'à présent.

![Fig. 10Troisième et quatrième mesure dans l'éditeur de morceau. ](/img/docs/tutorial/VerseBridge_hh.png)

![Fig. 11Septième mesure du troisième pont. ](/img/docs/tutorial/Bridge3_3a_hh.png)

Après le troisième pont, il y a un refrain : la première fois, le « clap baguettes » est utilisé à la place de la « caisse Jazz » et la « grosse caisse » n'est pas jouée (même si on pourrait croire entendre le contraire parce que la basse joue, si on veut rendre cet effet, on peut mettre un coup de grosse caisse à [0.50]), tandis que la deuxième et troisième fois que le refrain joue, il y a quelques mesures diffèrentes, comme le montre l'appellation « C3 _ * ». Dans la Fig. 12, le motif « C3_6+7 & C4_3 » (légérement différent ...) qui représente les sixième et septième mesures du troisième refrain ET la troisième mesure du quatrième chorus : si vous pensez que c'est confu, cherchez votre propre méthode :-)

![Fig. 13Le riff final. ](/img/docs/tutorial/C3_6+7.png)

Et voila, c'est terminé. Le but de ce petit tutoriel était de vous donner une vue d'ensemble rapide des fonctions les plus courantes d'Hydrogen : ce morceau de logiciel peut également être utilisé dans d'autres optiques, comme un 'clic' avancé joué avec une batterie, ou pour boucler sur une partie d'un morcreau difficile à chopper; cependant, dans tous les cas, analyser le morceau lui-même aide à sa compréhension et ici aussi, Hydrogen peut être utile pour réduire le temps nécessaire pour écrire un rythme et le jouer.

Pour des commentaires, des suggestions, des corrections, vous pouvez utiliser sur les mailing lists d'Hydrogen (hydrogen.sf.net)
