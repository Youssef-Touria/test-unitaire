Jour 1 - Job 01 - Test Unitaire avec Jest

1. Initialiser le projet Node.js
Commande pour créer le fichier `package.json` :

npm init -y

![npm init](images/01-npm-init.jpg)

 2. Installer Jest
Commande pour installer Jest  :

npm install --save-dev jest

![install jest](images/02-install jest.jpg)

3. Configurer Jest dans package.json
Commande pour définir Jest comme outil de test :

npm pkg set scripts.test="jest"

![config package.json](images/03-config-packagejson.jpg)

 4. Créer la fonction addition (math.js)
Fonction qui additionne deux nombres :
![math.js](images/04-math-js.jpg)

 5. Créer les tests (math.test.js)
Tests unitaires avec Jest :
![math.test.js](images/05-math-test-js.jpg)

6. Lancer les tests - succès

npm test

![tests verts](images/06-tests-verts.jpg)

7. Erreur volontaire
Modification de `+` en `*` pour simuler un bug :
![erreur volontaire](images/07-erreur-volontaire.jpg)

8. Résultat des tests en échec
![tests rouges](images/08-tests-rouges.jpg)

 9. Correction du bug
Remise du `+` dans `math.js` :
![correction](images/09-correction.jpg)

10. Tests finaux - succès

npm test

![tests verts final](images/10-tests-verts-final.jpg)