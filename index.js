const discord = require('discord.js'),
client = new discord.Client();
const token = "votre Token de votre bot";
const prefix = "!";
client.login(token);

//Active le bot dans la console CMD comme suite (node index)
client.on("ready", () => {
    var memberCount = client.users.size;
    var servercount = client.guilds.size;  
    var channel = client.channels.size;
    //sur quel nom de serveur se trouve le bot.
    var servers = client.guilds.array().map(g => g.name).join(',');
    //retournement d'information sur la console CMD
    console.log('---------------------------------------------');
    console.log('---------------------------------------------');
    console.log('[!]Connexion en cours.......... \n[!]Veuillez Patienté !!! \n[!]Tous les évenement sont après !!!   \n[!]Les préfix actuelle:  ' + prefix + '\n[!]Mentions de votre ID actuel = ' + mention + '\n[!]Nombre de membres: ' + memberCount + "\n[!]Nombre de serveurs: " + servercount + "\n[!]Nombre de canaux: " + channel);
    console.log('---------------------------------------------');
    console.log('---------------------------------------------');
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
