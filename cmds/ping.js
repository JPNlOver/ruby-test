const Discord = require('discord.js');


const client = new Discord.Client();
const fs = require('fs')





client.on('message', message => {

  if (message.content === 'r!ping') {

   let start = Date.now(); message.channel.send(message.channel.id, 'Pong! ').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setTitle(`🔔 Pong!`)
        .setColor(0xff2f2f)
        .addField("📶 Latencia", `${diff}ms`, true)
        .addField("💻 Host", `${API}ms`, true)
        message.edit(embed);
      
    });

}
  
});


client.login(process.env.TOKEN);

module.exports.help = {
    name: "icon",
}