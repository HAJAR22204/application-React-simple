# TP 1 : Creation d'une application React simple

## Description

Ce TP a pour objectif de mettre en pratique les bases du developpement avec React, notamment la creation de composants fonctionnels, l'utilisation des props et la validation des donnees avec PropTypes.

---

## Technologies utilisees

- React (via Create React App)
- JavaScript (ES6)
- JSX
- PropTypes

---

## Structure du projet

```
src/
├── App.js
├── MessageAccueil.js
├── Salutation.js
├── CarteUtilisateur.js
├── FicheVehicule.js
├── ListeArticles.js
└── index.js
```

---

## Composants realises

### MessageAccueil
Composant simple sans props qui affiche un message de bienvenue sur la page principale de l'application.

### Salutation
Composant qui recoit une prop `nom` et affiche un message de salutation personnalise. Il est utilise plusieurs fois avec des noms differents pour illustrer la reutilisabilite des composants.

### CarteUtilisateur
Composant plus elabore qui recoit un objet `personne` contenant un prenom, une photo et une ville, ainsi qu'une prop `largeur` pour definir la taille de l'image. La validation des props est assuree par PropTypes, avec une valeur par defaut pour la largeur.

### FicheVehicule
Composant qui affiche les informations d'un vehicule (marque, modele, couleur). Il est utilise trois fois dans App.js avec des donnees differentes pour montrer la flexibilite des props.

### ListeArticles
Composant qui recoit un tableau de chaines de caracteres et les affiche sous forme de liste HTML. Il est utilise avec deux listes distinctes pour illustrer le rendu dynamique avec la methode `map()`.

---

## Methodes utilisees

**Composants fonctionnels :** Chaque composant est une fonction JavaScript simple qui retourne du JSX. Cette approche est legere et facile a maintenir.

**Props :** Les donnees sont transmises des composants parents vers les composants enfants via les props. Cela permet de reutiliser un meme composant avec des contenus differents.

**PropTypes :** La bibliotheque PropTypes est utilisee pour valider le type des props recues par chaque composant. Cela permet de detecter rapidement les erreurs de transmission de donnees lors du developpement.

**Valeurs par defaut :** La propriete `defaultProps` est utilisee pour definir des valeurs par defaut lorsque certaines props ne sont pas transmises par le composant parent.

**Rendu de liste avec map() :** La methode JavaScript `map()` est utilisee dans le composant `ListeArticles` pour generer dynamiquement des elements de liste a partir d'un tableau.

---

## Resultats obtenus

L'application affiche correctement sur la page :

<img width="635" height="1080" alt="image" src="https://github.com/user-attachments/assets/b12f21dd-8f5f-4791-a5be-b3645f3f4de4" />


L'application fonctionne sans erreur dans le navigateur et la console ne signale aucun avertissement lie aux props grace a la validation PropTypes.

---
