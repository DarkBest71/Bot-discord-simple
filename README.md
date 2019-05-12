# Bot-discord-simple
Création d'un bot discord en .js 

# création d'un dossier sur votre bureau pour votre bote: 

Créer votre dossier de votre bot sur votre bureau.
Créez un dossier du nom de votre choix pour votre bot, Il ne doit pas pas comporter d'espace ou caractére bizarre.
Rentrez dans ce dossier.
Faites un clic droit, puis "Nouveau" > "Document texte".
Nommez le "index".
Faites un clic droit, puis "Ouvrir avec" > "Bloc-notes". ou votre éditeur de votre choix.
En haut à gauche, cliquez sur "Fichier" > "Enregistrer sous...":

Pensez à selectionner "Tout type de fichier" dans la case Type pour pouvoir enregistrer votre fichier en tant que index.js
Cliquez sur "Enregistrer" en bas à droite.
Revenez sur l'explorateur de fichiers. 
Vous remarquerez qu'il existe désormais deux fichiers dans votre dossier:

Supprimez le fichier "index.txt/index" .
Appuyer sur les touches Windows + R. Une fenêtre s'ouvrira.

Dans la barre de saisie, tapez "cmd". Encore une fois, une fenêtre s'ouvrira.

Nous allons devoir atteindre le dossier de notre robot. Pour cela, vous devez connaître les deux commandes suivantes:

cd <Nom d'un dossier se trouvant à l'emplacement où vous êtes>


# Exemple:

cd
^^Cette commande vous permet de revenir au dossier précédent.^^

Une fois que vous êtes parvenus au dossier de votre bot qui et sur votre bureau passez a l'étape suivante.

# installation des paquet.
installer le paquet pour que le bot fonctionne. Ce paquet se nomme Discord.js, c'est une API lié à Discord et développé en javascript.
npm install discord.js --save 

Une fois fait, tapez la commande npm init -y.
La commande aura pour but de créer un fichier package.json

Normalement, après un temps de chargement, des lignes apparaîtront. N'y tenez pas compte, mais laissez le cmd ouvert, on va s'en servir bientôt.
Revenez au dossier de votre robot dans l'explorateur de fichiers. Vous remarquerez qu'un nouveau dossier est apparu:

Ignorez le fichier package-lock, il ne sert que pour le partage des fichiers lors d'un projet collaboratif (sur Github par exemple). Observez le fichier node_modules. Il regroupe ce qu'on appelle les packages de votre bot.

Vous pouvez fermer l'explorateur de fichiers.
Ouvrez votre éditeur de code.
En haut à gauche, cliquez sur Fichier/File > Ouvrir le dossier/Open File.
Avec la fenêtre qui est apparue, sélectionnez votre dossier en cliquant une fois dessus puis cliquez sur "Sélectionner un dossier" en bas à droite.
À droite de votre éditeur de code, sélectionnez "index.js"
Vous êtes fin prêts ! On commence à coder !

#Les Base:

const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "."; // Remplacez le "." par le préfixe de votre bot

client.on("ready", () => {
  console.log("Salut je suis connecté");  
  var TailleMembres = client.users.size;
  var TailleServeurs = client.guilds.size;
  client.user.setActivity("Connecté - " + TailleServeurs + " serveur(s) et " + TailleMembres + " membre(s)");
}

client.on('message', (msg) => { // Jusqu'au "}" affiché plus bas, il ne faut mettre que des codes destinés à des messages ici.
  
}          
client.login("VOTRE_TOKEN_SANS_ESPACE");

Bon, on va déchiffrer c'est lignese:
Ligne 1 : On déclare que ce code doit impérativement fonctionner avec la package Discord.js.
Ligne 2 : On demande à l'API Discord de créer une nouvelle "session" au token inséré un peu plus bas.
Ligne 3 : On donne la valeur . à la valeur prefix. Vous pouvez remplacer le"." par le préfixe de votre robot.
Ligne 5 : On informe que ce qui va suivre est destiné a être utilisé par un robot Discord.
Ligne 6 : On affiche le message entre parenthèses dans la console.
Ligne 7 : On donne la valeur client.users.size à la valeur prefix. Ce nom de variable (qui peut vous paraître étrange) définit le nombre d'utilisateurs total sur tout les serveur ou votre robot est présent.
Ligne 8 : On donne la valeur client.guilds.size à la valeur prefix. Ce nom de variable (qui peut vous paraître étrange) définit le nombre de serveur sur lequel le robot est présent.
Ligne 9 : On change le jeu du robot par la valeur Connecté - "+TailleServeurs+" serveur(s) et "+TailleMembres+" membre(s). Le jeu peut donc changer en fonction de la présence du robot sur les serveurs. Pour ma part, ça donne ça:


Suite de l'aprentissage de c'est base trés prochainement , cela sera mis a jour.
