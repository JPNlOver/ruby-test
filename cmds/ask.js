const Discord = require('discord.js');


const client = new Discord.Client();
const fs = require('fs')
var config = JSON.parse(fs.readFileSync('./botsettings.json', 'utf-8'));


const token = 'NTE0OTA2MTY0Mjg3MzczMzEz.D29f-w.0vfi4B_0MywKoVPgzAYrYjGXrKc';


client.on('ready', () => {
  console.log('Comando ASK pronto!');
    });
	client.on('ready', () => {
  console.log('Comando AVATAR pronto!');
    });
	client.on('ready', () => {
  console.log('Comando DELETE pronto!');
    });
	client.on('ready', () => {
  console.log('Comando ICON pronto!');
    });
	client.on('ready', () => {
  console.log('Comando KICK pronto!');
    });


client.on('message', message => {

  if (message.content.startsWith("r!ask")) {

    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
	if(randomNumber == 1){
		message.reply("Sim!")
	}		
		if(randomNumber == 2){
		message.reply("Não!")
		}
		
		if(randomNumber == 3){
		message.reply("Talvez")
		}
		
		if(randomNumber == 4){
		message.reply("Absolutamente não.")
		}
		
		if(randomNumber == 5){
		message.reply("Com Certeza!")
		}
		
		if(randomNumber == 6){
		message.reply("pergunta pra sua mãe!")
  }
}});



client.login(config.token)

module.exports.help = {
    name: "icon",
}