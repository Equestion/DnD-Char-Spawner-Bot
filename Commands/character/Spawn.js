const commando = require('discord.js-commando');

class spawn extends commando.Command {

constructor(client){
	super(client, {
		name: 'spawn',
		group: 'commands',
		memberName: 'spawn',
		description: 'Rolls 4d6'
	});
	
}
async run(message, args){
	var roll = Math.floor(Math.random() * 6) +1;
	var roll2 = Math.floor(Math.random() * 6) +1;
	var roll3 = Math.floor(Math.random() * 6) +1;
	
	var roll4 = Math.floor(Math.random() * 6) +1;
	var roll5 = Math.floor(Math.random() * 6) +1;
	var roll6 = Math.floor(Math.random() * 6) +1;
	var roll7 = Math.floor(Math.random() * 6) +1;
	
	var roll8 = Math.floor(Math.random() * 6) +1;
	
	var reroll = Math.floor(Math.random() * 6) +1;
	
	var added = roll + roll2 + roll3 + roll4;
	var added2 = roll5 + roll6 + roll7 + roll8;
	if (added <= 9){
		var roll = Math.floor(Math.random() * 6) +1;
	var roll2 = Math.floor(Math.random() * 6) +1;
	var roll3 = Math.floor(Math.random() * 6) +1;
	
	var roll4 = Math.floor(Math.random() * 6) +1;
	
	}
	else{
		if (added2 <= 9 ){
		var roll5 = Math.floor(Math.random() * 6) +1;
	var roll6 = Math.floor(Math.random() * 6) +1;
	var roll7 = Math.floor(Math.random() * 6) +1;
	
	var roll8 = Math.floor(Math.random() * 6) +1;
	
	}else{
    message.channel.send(added);
	message.channel.send(added2);
	}
	}
}
	
	

}
module.exports = spawn;