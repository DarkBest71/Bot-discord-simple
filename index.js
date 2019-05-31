'use strict';
const Discord = require("discord.js");//on appele le fichier discord.js pour que le bot fonctionne
const client = new Discord.Client();
const token = "Votre clé Token ici";//token de votre bot
var prefix = "!";//votre prefix choisir se que vous voulez cela appelra vos commandes
var mention = "votre id ici";// votre ID d'utilisateur exemple <@3485477477265>
var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot

//initialisation du bot pour voir les log
client.on("ready", () => {
//permet de savoir les nom des serveur se trouve le bot
var servers = client.guilds.array().map(g => g.name).join(',');
var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot
console.log("--------------------------------------");
console.log('[!]Connexion en cours.......... \n[!]Veuillez Patienté !!! \n[!]Tous les évenement sont après !!!   \n[!]Les préfix actuelle:  ' + prefix + '\n[!]Mentions de votre ID actuel = ' + mention + '\n[!]Nombre de membres: ' + memberCount + "\n[!]Nombre de serveurs: " + servercount + "\n[!]Nombre de canaux: " + channel);
});
    
client.on('message', message => {
const msgc = message.content;	
if (msgc === "!star" &&message.guild) { //effectuer son prefix de la commande
message.delete(0);     
var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot
let m = " ";
m += 'je suis en compagnie de '+ memberCount +' membres \n';
m += 'je suis présent dans '+ servercount+' serveurs \n';
m += 'je suis sur '+ channel+' canaux \n';
message.author.send(m).catch(console.log)
message.reply("La commande star vous a été envoyé en privé :100: ")
});

//le bot annonce qui c'est connecté dans le salon général
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find('name', 'general');
if(!channel) {
return;
}
channel.send(`? **${member.user.username}** Bienvenue sur le serveur **${member.guild.name}**`);
});

//le bot annonce qui c'est inscrit dans le salon discution
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find('name', 'discution');
if(!channel) {
return;
}
channel.send(`? **${member.user.username}** Bienvenue sur le serveur **${member.guild.name}**`);
});

client.on('message', message =>{
//Moi qui appélle mon bot comme ce si :Bonjour    
if(message.content.startsWith(prefix + 'Bonjour')){
//le bot répond   
message.reply('Bonjour');
}
//Moi
else if (message.content == "sa vas" ){
//le bot répond   
message.channel.send('oui et vous ?');
}
});

client.on('message', message =>{
//Moi    
if(message.content == "oui"){
//le bot répond   
message.reply('tant mieux !!!');
}
//Moi
else if (message.content == "tu fait quoi ?" ){
//le bot répond  
message.channel.send('je surveille le serveur');
}
});

client.on('message', message =>{
//Moi    
if(message.content == "cool"){
//le bot répond   
message.reply('XD');
}
//Moi
else if (message.content == "MDR" ){
//le bot répond   
message.channel.send('LOL');
} 
});
