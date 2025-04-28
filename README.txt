#####################################
# Guide d'utilisation - Site Mariage
# Fabien Uzan & Mathilde Zylberman
#####################################

1. Structure des fichiers
---------------------------
- invitation.html : Faire-part numérique (photo, texte défilant, bouton)
- index.html : Accueil (photo de couverture, compte à rebours, vidéo Save The Date)
- info.html : Informations mariage (photos + Google Maps)
- conseils.html : Bons plans voyage et tourisme en Israël
- reponse.html : Formulaire RSVP

- css/
    - style.css : Style général du site
    - style_invitation.css : Style spécifique du faire-part
- js/
    - countdown.js : Script du compte à rebours
    - invitation.js : Script du défilement du texte
    - form_handler.js : Gestion du formulaire RSVP
    - lang.js : Gestion des langues (à enrichir plus tard si besoin)
- images/
    - Mettre vos photos et vidéos ici

2. Modifier vos photos
---------------------------
- invitation.html utilise 'images/photo_invitation.jpg'
- index.html utilise 'images/photo_accueil.jpg'
- info.html utilise 'images/lieu_ceremonie.jpg' et 'images/lieu_fete.jpg'
- conseils.html utilise 'images/tel_aviv_plage.jpg' et 'images/jerusalem.jpg'

➡️ Remplacez les fichiers existants dans /images/ avec VOS images, en gardant les mêmes noms.

3. Modifier votre vidéo Save the Date
---------------------------
- Placez votre vidéo dans /images/
- Nommez-la 'save_the_date_video.mp4'

4. Modifier les cartes Google Maps
---------------------------
Dans info.html :
- Remplacez les liens dans les balises <iframe> avec vos liens Google Maps personnalisés.
- Utilisez https://www.google.com/maps ➔ chercher lieu ➔ "Partager" ➔ "Intégrer une carte" ➔ Copier le code <iframe>.

5. Connecter le formulaire RSVP
---------------------------
- Inscrivez-vous gratuitement sur https://formspree.io/
- Créez un formulaire ➔ récupérez votre lien Form ID
- Remplacez 'YOUR_FORM_ID' dans reponse.html par votre vrai ID.

Exemple :
<form action="https://formspree.io/f/abcxyz" method="POST">

6. Modifier les textes
---------------------------
Tous les textes sont dans les fichiers HTML.
Utilisez Visual Studio Code pour facilement trouver et remplacer ce que vous voulez modifier.

7. Déployer le site en ligne
---------------------------
- Utilisez GitHub Pages gratuitement :
  - Créer un compte GitHub
  - Créer un nouveau repository public
  - Uploader tous les fichiers
  - Aller dans Settings > Pages > Source > Branch: main / folder: root
  - Vous recevrez un lien direct type : https://votrecompte.github.io/votresite/

8. Exemple de Message WhatsApp
---------------------------
"Nous sommes heureux de vous inviter à notre mariage ❤️ Découvrez votre invitation ici : [Votre lien invitation.html]"

9. Personnaliser encore plus (optionnel)
---------------------------
- Modifier les polices : dans css/style.css, changer la font-family
- Ajouter de la musique sur invitation.html
- Animer les boutons au survol

#####################################
# Bravo ! Votre site est prêt 🎉
#####################################
