const commando = require('discord.js-commando');

const { Client, RichEmbed } = require('discord.js');
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
	function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
var raceArray =  ["Human", "Elf", "Dwarf", "Dragonborn", "Gnome", "Tiefling", "Halfling", "Half-Orc", "Half-Elf" ];
var nameArray = ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Oain", "Oarrak", "Oelg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal", "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carrie", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian" , "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis","Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby", "Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn", "Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook", "Deneh", "Feng", "Gell", "Henk", "Holg", "Imsh", "Kelh", "Krusk", "Mhurren", "Ront", "Shump", "Thokk", "Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "lados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai", "Amber", "Artin", "Audhild", "Bardryn", "Oagnal", "Oiesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "lide", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra", "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Orusilia", "Enna", "Felosial", "lelenia", "jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia", "Andry", "Bree", "Callie", "Cora", "Euphemia", "jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna", "Akra", "Biri", "Daar", "Farideh", "Harann", "HaviJar", "Jheri", "Kava", "Korinn", "Mishann", "NaJa", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit",  "Bimpnollin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "ElIa", "ElIyjobell", "ElIywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna", "Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shaulha", "Sulha", "Vola", "Volen", "Yevelda", "Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta" ];
var classArray = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock" , "Wizard"];
var race = function () {
var racechoice = raceArray[Math.floor(Math.random() * 9)];
return racechoice;
};
var name = function () {
var namechoice = nameArray[Math.floor(Math.random() * 278)];
return namechoice;
};
var clas = function () {
var classchoice = classArray[Math.floor(Math.random() * 12)];
return classchoice;
};
var n = name();
var r = race();
var c = clas();
var min = 10;
var max = 18;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; ; }
 var roll = getRandomIntInclusive(min, max);
 function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; ; }
  var roll2 = getRandomIntInclusive(min, max);
	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min; ; }
	 var roll3 = getRandomIntInclusive(min, max);
	 function getRandomIntInclusive(min, max) {
	   min = Math.ceil(min);
	   max = Math.floor(max);
	   return Math.floor(Math.random() * (max - min + 1)) + min; ; }
	  var roll4 = getRandomIntInclusive(min, max);
		function getRandomIntInclusive(min, max) {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min + 1)) + min; ; }
		 var roll5 = getRandomIntInclusive(min, max);
		 function getRandomIntInclusive(min, max) {
		   min = Math.ceil(min);
		   max = Math.floor(max);
		   return Math.floor(Math.random() * (max - min + 1)) + min; ; }
		  var roll6 = getRandomIntInclusive(min, max);
		message.channel.send({embed: {
      color: 3447003,
      title: "Your New Character is:",
      fields: [

				{ name: "Name", value: n, inline:true},
				{ name: "Race", value: r, inline:true},
				{name: "Class", value: c, inline:true},
        { name: "STR", value: roll, inline: false},
        { name: "CON", value: roll2, inline: false},
		{ name: "DEX", value: roll3, inline: false},
		{ name: "INT", value: roll4, inline: false},
		{ name: "WIS", value: roll5, inline: false},
		{ name: "CHA", value: roll6, inline: false}
      ]
    }
  });
}
		}


module.exports = spawn;
