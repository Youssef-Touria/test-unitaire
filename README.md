 Jour 1 - Job 01 - Test Unitaire avec Jest

1. Initialiser le projet Node.js
Commande pour créer le fichier `package.json` automatiquement :

npm init -y

![npm init](screenshots/01-npm-init.jpg)

 2. Installer Jest
Commande pour installer Jest en dépendance de développement :

npm install --save-dev jest

![install jest](screenshots/02-install%20jest.jpg)

 3. Configurer Jest dans package.json
Commande pour définir Jest comme outil de test :

npm pkg set scripts.test="jest"

![config package.json](screenshots/03-config-packagejson.jpg)

 4. Créer la fonction addition dans math.js
Fonction qui additionne deux nombres et retourne le résultat :
![math.js](screenshots/04-math-js.jpg)

 5. Créer les tests dans math.test.js
Tests unitaires écrits avec la syntaxe Jest :
![math.test.js](screenshots/05-math-test-js.jpg)

 6. Lancer les tests - résultat vert

npm test

![tests verts](screenshots/06-tests-verts.jpg)

 7. Introduction d'une erreur volontaire
Modification du `+` en `*` dans math.js pour simuler un bug :
![erreur volontaire](screenshots/07-erreur-volontaire.jpg)

 8. Résultat des tests en échec
Les tests détectent immédiatement le bug :
![tests rouges](screenshots/08-tests-rouges.jpg)

 9. Correction du bug
Remise du `+` dans math.js :
![correction](screenshots/09-correction.jpg)

 10. Tests finaux - résultat vert

npm test

![tests verts final](screenshots/10-tests-verts-final.jpg)