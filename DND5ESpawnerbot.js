const commando = require('discord.js-commando');
const Config = require('./config/Config.json');
const client = new commando.Client({
	owner: '169868696427167744'
});

client.on('ready', () => {

    console.log('I am ready master!'); //how you know it is on
});


client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
 
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  
});

client.registry.registerGroup('character', 'Spawn');

client.registry.registerDefaults();

client.registry.registerCommandsIn(__dirname + "/commands");


client.login(Config.token);