const botSettings = require(__dirname + "/botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const http = require('http');
const prefix = 'r!';
var express = require('express');
var app = express();
const bot = new Discord.Client({disableEveryone: true});
const db = require("quick.db");
const act = "act_ruby"
const moment = require ("moment")
const palavroes = ["cu", "cú","foder", "puta", "caralho", "caraio", "fodido", "fodida", "puto", "pqp", "tnc", "vtnc", "vsf", "cabral", ];
const Canvas = require("canvas")
const snekfetch = require('snekfetch')
var usar = "r!usar "
const itens = ["vip1", "vip3", "vip7", "cor","tag1", "tag2", "tag3", "tag4", "tag5", "descricao"]
const preco = {vip1:0, vip3:0, vip7:0, cor:0, tag1:0, tag2:0, tag3:0, tag4:0, tag5:0, descricao:0}

var wget = require('node-wget')


function generateXp() {
let min = 10;
let max = 40;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
     
//db.fetch() -> busca itens na database
//db.set() -> coloca itens na database
bot.on("message", async message => {
  var msg = message.content.toLowerCase()
  const bot1 = "235148962103951360";
    const bot2 = "432610292342587392";
    const bot3 = "488711695640821760";
    const bot4 = "235088799074484224";
    const bot5 = "514906164287373313"; //
    const bot6 = "184405311681986560";
  
  db.delete(`xp_${bot1}`)
  db.delete(`xp_${bot2}`)
  db.delete(`xp_${bot3}`)
  db.delete(`xp_${bot4}`)
  db.delete(`xp_${bot5}`)
  db.delete(`xp_${bot6}`)
  if (msg.startsWith("r!")) return;
  if (msg.startsWith("$")) return;
  if(message.author.bot) return;
await   db.add(`xp_${message.author.id}`, Math.floor(Math.random() * (15 - 5 + 1)) + 10)

})

bot.on("message", async message => {
  var xp = generateXp
  
  var user = message.author
  
  var msg = message.content.toLowerCase()
  
  if(msg.startsWith("r!settheme ")){
   var tema = await db.fetch(`theme_${message.author.id}`)
   var args = msg.substr("r!setthemea".length)
   var args1
   if (args === "vermelho") args1 = "1"
    else if (args === "roxo") args1 = "2"
    else if (args === "reforged") args1 = "3"
    else if (args === "premium") args1 = "4"
   if (args1 === "1" || args1 === "2" || args1 === "3" || args1 === "4") {
   await db.set(`theme_${message.author.id}`, parseInt(args1))
     message.channel.send ("Tema alterado!")
   } else message.channel.send("Tema inválido!")
   
    
  }
  
  
  if(msg === "r!log2" || msg === "r!leaderboards" || msg === "r!rank" || msg === "r!top") {
   let rank = await db.startsWith(`xp_`, { sort: '.data'});
    let content = "";
let teste = "";
    for (let i = 0; i < rank.length; i++) {
      teste = await rank[i].ID.split('_')[1]
        let user1 =message.guild.member(teste).displayName

      content += `${i+1}. ${user1} ~ ${rank[i].data}\n`
       content = content.replace('$','');
    }
    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Rank!`, message.guild.iconURL)
    .setDescription(content)
    .setColor(0x51267)

    message.channel.send(embed)
  }
  
  if(message.content === "r!log") {
    var ids = []
    var xpconfig = []
    var mems = bot.guilds.get("499646570523000881").members
    
    
    for (let [snowflake, guildMember] of mems) {
      
      var member = guildMember.user.username
      var nvl =await db.fetch(`nivel_${guildMember.user.id}`)
      var xp = await db.fetch(`xp_${guildMember.user.id}`)
      if(xp === null) xp = 0
      if(nvl === null) nvl = 1
      message.channel.send(member + '-> nivel:' + nvl + ", xp:" + xp)
      xpconfig.push(member + '-> nivel:' + nvl + ", xp:" + xp)
      
      
}
  }
  //USAR
  // item #1
  if(msg === "r!usar " + itens[0]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[0]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[0]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[0])
     }
  
  //item #2
  if(msg === "r!usar " + itens[1]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[1]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[1]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[1])
     }
  //item #3
  if(msg === "r!usar " + itens[2]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[2]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[2]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[2])
     }
  
  //item #4
  if(msg === "r!usar " + itens[3]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[3]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[3]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[3])
     }
  //item #5
  if(msg === "r!usar " + itens[4]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[4]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[4]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[4])
     }
  //item #6
  if(msg === "r!usar " + itens[5]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[5]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[5]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[5])
     }
  //item #7
  if(msg === "r!usar " + itens[6]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[6]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[6]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[6])
     }
  //item #8
  if(msg === "r!usar " + itens[7]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[7]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[7]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[7])
     }
  //item #9
  if(msg === "r!usar " + itens[8]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[8]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[8]}_${user.id}`, 0)
    inventory = 0 
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
      message.channel.send("Função não implementada... porém você possui " + inventory + ' itens ' + itens[8])
     }
  // item #10
  if(msg === "r!usar " + itens[9]) {
  let user = message.author
  const userid = message.author.id
  const user2 = bot.users.find('id', userid)
  let inventory = await db.fetch(`inventory_${itens[9]}_${user.id}`)
  if (inventory === null) {
    db.set(`inventory_${itens[9]}_${user.id}`, 0)
    inventory = 0 
    message.channel.send("Você não possui este item!")
    return  
  }
    if(inventory < 1) return message.channel.send("Você não possui este item!") 
  
     
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    }
    
    
   message.channel.send (message.author + 'Você deseja usar o item **Descrição** ?')
      .then(function (message) {
      message.react('👍').then(() => message.react('👎'));
     
     
     message.awaitReactions(filter, { max: 1, time: 59900, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();
     
        if (reaction.emoji.name === '👍') {
          if(inventory < 1) return message.channel.send("Você não possui este item!")
        user2.send("olá " + user2.username + "-san! pode me dizer o que vai querer colocar na sua descrição?" )

          
       .then((newmsg) => {
          setTimeout(function() {
          //Now newmsg is the message you sent
    newmsg.channel.awaitMessages(response => response.content, {
      max: 1,
      time: 50000,
      errors: ['time'],
    }).then((collected) => {
      
      var cf = collected.first().content
      
      db.set(`inventory_desc_${user.id}`, cf)
      db.subtract(`inventory_${itens[9]}_${user.id}`, 1)
      newmsg.channel.send(`Ótimo! ja coloquei a descrição no seu perfil!`)
        })
          }, 2000)}
             
               )}  
     })})
    
    
     }
  //USAR
  
  //ADD
  if(msg === "r!add " + itens[0]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[0]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[0]}_${user.id}`, 0)
    inventory = 0 
  }
  db.add(`inventory_${itens[0]}_${user.id}`, 1)
  
      message.channel.send('Foi adicionado 1 **' + itens[0] + '** ao seu inventario!')  
    }
  if(msg === "r!add " + itens[9]) {
  let user = message.author
  let inventory = await db.fetch(`inventory_${itens[9]}_${user.id}`)
  if (inventory === null) {
    await db.set(`inventory_${itens[9]}_${user.id}`, 0)
    inventory = 0 
  }
  db.add(`inventory_${itens[9]}_${user.id}`, 1)
  
      message.channel.send('Foi adicionado 1 **' + itens[9] + '** ao seu inventario!')  
    }
  //ADD
 
      const themeurl = {vermelho:'https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2Fqqd.png?1552844245433',roxo:'https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2Fperfil2.png?1553258411887', reforged:'https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2Fperfil3.png?1553278191202', premiumv1:'https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2FPerfil_Premium.png?1553293777579'}

  if(msg === "r!perfil" || msg === "r!info"){
    const rep = {zero:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F1.JPG?1552836438619", um:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F2.JPG?1552836437982", dois:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F3.JPG?1552836435894", tres:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F4.JPG?1552836438296", quatro:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F5.JPG?1552836438198"}
    var images = ['https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F190310kisekae.png', 'https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2Fteste%20oppai.png', 'https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F190310kisekae.png']
    const canvas = Canvas.createCanvas(943, 459);
	const ctx = canvas.getContext('2d');

    
    Canvas.registerFont( "/app/assets/fonts/LemonMilkbold.ttf", {family: 'LemonMilkbold'});
    Canvas.registerFont( "/app/assets/fonts/LemonMilk.ttf", {family: 'LemonMilk'});
    Canvas.registerFont( "/app/assets/fonts/LemonMilklight.ttf", {family: 'LemonMilklight'});
    Canvas.registerFont( "/app/assets/fonts/bebas.ttf", {family: 'bebas'});

// Get the icon in the form of a buffer
	const { body: buffer } = await snekfetch(message.author.displayAvatarURL);
	// Wait for Canvas to load the image
	const avatar = await Canvas.loadImage(buffer);
	// Draw a shape onto the main canvas
	ctx.drawImage(avatar, 138, 5, 150,150);
    
    
    //rep
    
    
   var reputacao = await db.fetch(`rep_${message.author.id}`)
    if (reputacao === null){
     reputacao = 0
      db.set(`rep_${message.author.id}`, 0)
    }
    if(reputacao == 0) var reputation = rep.zero
    else if(reputacao == 1) var reputation = rep.um
    else if(reputacao == 2) var reputation = rep.dois
    else if(reputacao == 3) var reputation = rep.tres
    else if(reputacao == 4) var reputation = rep.quatro
    var { body: repicon } = await snekfetch(reputation);
     
    
	const repstatus = await Canvas.loadImage(repicon);  
	ctx.drawImage(repstatus, 813, 293, 110, 110);
    //rep
    
    //TEMAS
  var tema = await db.fetch(`theme_${message.author.id}`)
  if (tema === null) await db.set(`theme_${message.author.id}`, 1)
    if (message.author.id == "514906164287373313") tema = 2
  if(tema === 1) {
  const { body: fundo } = await snekfetch(themeurl.vermelho);
  const background = await Canvas.loadImage(fundo);  
	ctx.drawImage(background, 0, 0, 943, 459);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
  } else if(tema === 2) {
  const { body: fundo } = await snekfetch(themeurl.roxo);
  const background = await Canvas.loadImage(fundo);  
	ctx.drawImage(background, 0, 0, 943, 459);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  } else if(tema === 3) {
  const { body: fundo } = await snekfetch(themeurl.reforged);
  const background = await Canvas.loadImage(fundo);  
	ctx.drawImage(background, 0, 0, 943, 459);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  } else if(tema === 4) {
  const { body: fundo } = await snekfetch(themeurl.premiumv1);
  const background = await Canvas.loadImage(fundo);  
	ctx.drawImage(background, 0, 0, 943, 459);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }
  //TEMAS
    //nick  
    const name = message.author.username.substring(0, 17)
    if(message.author.username.length > 17) var nickname = name + "..."
    else var nickname = name
    ctx.font         = '52px LemonMilk';
  ctx.fillStyle = '#FF0066';
  ctx.textBaseline = 'top';
  ctx.fillText  (nickname, 320, 30);
    //nick
    //rep text
    
    ctx.font         = '28px LemonMilk';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'top';
  ctx.fillText  ("rep.", 842, 257);
    
    //rep text
    //tag
    const tag = message.author.tag.substr(message.author.username.length)
    ctx.font         = '33px LemonMilk';
  ctx.fillStyle = '#808080';
  ctx.textBaseline = 'top';
  ctx.fillText  (tag, 321, 85);
    //tag
    
    //money
    var userid = message.author.id
    var money = await db.fetch(`coin_${userid}`)
    if(money === null) {money = 0 
    await db.set(`coin_${userid}`, 0)}
    ctx.font         = '88px bebas';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'top';
  ctx.fillText  (money, 290, 322);
    ctx.font         = '75px bebas';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'top';  
  ctx.fillText  ("x", 255, 335);
    //money

    //info
    function formatarData(data) {
    var d = new Date(data),
        mes = '' + (d.getMonth() + 1),
        dia = '' + d.getDate(),
        ano = d.getFullYear();

    if (mes.length < 2) mes = '0' + mes;
    if (dia.length < 2) dia = '0' + dia;

    return [dia, mes, ano].join('/');
}
    const member = message.guild.member(user)
    var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
   const info = member.joinedAt
   var info1 = formatarData(info)
   if(message.author.id == "252889971428556801") info1 = "a criação do mundo"
   ctx.font         = '24px LemonMilk';
 ctx.fillStyle = '#000000';
 ctx.textBaseline = 'top';
 ctx.fillText  ("membro desde:", 175, 180);
    ctx.fillStyle = '#F93986';
    ctx.fillText  (info1, 373, 180); //#F93986
    
    const descricao = await db.fetch(`inventory_desc_${user.id}`)
    if (descricao === null) descricao = "esta pessoa é uma pessoa muito misteriosa"
    const desc1 = descricao.substring(0, 31)
    const desc2 = descricao.substring(31, 62)
    const desc3 = descricao.substring(62, 90)
    
    ctx.fillStyle = '#000000';
     ctx.fillText  ("sobre:", 175, 215);
    ctx.fillStyle = '#F93986';
    if(descricao.length < 30) ctx.fillText  (desc1, 262, 215); //#F93986
    else if(descricao.length > 30 && descricao.length < 60) {
      ctx.fillText  (desc1, 262, 215); //#F93986
      ctx.fillText  (desc2, 262, 240); //#F93986
    }else if(descricao.length > 60) {
      ctx.fillText  (desc1, 262, 215); //#F93986
      ctx.fillText  (desc2, 262, 240); //#F93986
      ctx.fillText  (desc3, 262, 265); //#F93986
    }
    
  var nivel = await db.fetch(`nivel_${user.id}`)
  if (nivel === null) nivel = 1
    
  
    ctx.font         = '38px LemonMilk';
    ctx.fillStyle = '#000000';
     ctx.fillText  ("nível", 810, 45);
      
    ctx.font = '85px LemonMilk';
    ctx.fillStyle = '#FF0066';
    var length = Math.log(nivel) * Math.LOG10E + 1 | 0
    if(nivel == 1) ctx.fillText  (nivel, 852, 72);
    else if(nivel == 99) ctx.fillText  (nivel, 815, 72);
    else if (length == 1) ctx.fillText  (nivel, 842, 72);
    else if (length == 2) ctx.fillText  (nivel, 827, 72);
    
    
    //info
//ctx.drawImage(avatar, direita >, baixo, 128,128);
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
    message.channel.send("", attachment);
     }
  
  
  if(msg.startsWith("r!perfil " || msg.startsWith("r!info "))){
    const target = message.mentions.members.first()
    const rep = {zero:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F1.JPG?1552836438619", um:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F2.JPG?1552836437982", dois:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F3.JPG?1552836435894", tres:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F4.JPG?1552836438296", quatro:"https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F5.JPG?1552836438198"}
    var images = ['https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F190310kisekae.png', 'https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2Fteste%20oppai.png', 'https://cdn.glitch.com/300b6764-4647-43a3-a899-e8ed19f8f920%2F190310kisekae.png']
    const canvas = Canvas.createCanvas(943, 459);
	const ctx = canvas.getContext('2d');

    
    Canvas.registerFont( "/app/assets/fonts/LemonMilkbold.ttf", {family: 'LemonMilkbold'});
    Canvas.registerFont( "/app/assets/fonts/LemonMilk.ttf", {family: 'LemonMilk'});
    Canvas.registerFont( "/app/assets/fonts/LemonMilklight.ttf", {family: 'LemonMilklight'});
    Canvas.registerFont( "/app/assets/fonts/bebas.ttf", {family: 'bebas'});

// Get the icon in the form of a buffer
	const { body: buffer } = await snekfetch(message.mentions.users.first().displayAvatarURL);
	// Wait for Canvas to load the image
	const avatar = await Canvas.loadImage(buffer);
	// Draw a shape onto the main canvas
	ctx.drawImage(avatar, 140, 10, 150,150);
    
    
    //rep
    
    
   var reputacao = await db.fetch(`rep_${message.mentions.users.first().id}`)
    if (reputacao === null){
     reputacao = 0
      db.set(`rep_${message.mentions.users.first().id}`, 0)
    }
    if(reputacao == 0) var reputation = rep.zero
    else if(reputacao == 1) var reputation = rep.um
    else if(reputacao == 2) var reputation = rep.dois
    else if(reputacao == 3) var reputation = rep.tres
    else if(reputacao == 4) var reputation = rep.quatro
    var { body: repicon } = await snekfetch(reputation);
     
    
	const repstatus = await Canvas.loadImage(repicon);  
	ctx.drawImage(repstatus, 813, 293, 110, 110);
    //rep
    
    
    //temas
    
    var tema = await db.fetch(`theme_${message.mentions.users.first().id}`)
  if (tema === null) {
    await db.set(`theme_${message.mentions.users.first().id}`, 1)
   tema = 1 
  }
    if (message.mentions.users.first().id == "514906164287373313") tema = 2
  if(tema === 1) {
  const { body: fundo } = await snekfetch(themeurl.vermelho);
  const background = await Canvas.loadImage(fundo);  
	ctx.drawImage(background, 0, 0, 943, 459);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
  } else if(tema === 2) {
  const { body: fundo } = await snekfetch(themeurl.roxo);
  const background = await Canvas.loadImage(fundo);  
	ctx.drawImage(background, 0, 0, 943, 459);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
  }else if(tema === 3) {
  const { body: fundo } = await snekfetch(themeurl.reforged);
  const background = await Canvas.loadImage(fundo);  
	ctx.drawImage(background, 0, 0, 943, 459);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }
    else if(tema === 4) {
  const { body: fundo } = await snekfetch(themeurl.premiumv1);
  const background = await Canvas.loadImage(fundo);  
	ctx.drawImage(background, 0, 0, 943, 459);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }
  //TEMAS
    
    
    //nick  
    const name = message.mentions.users.first().username.substring(0, 17)
    if(message.mentions.users.first().length > 17) var nickname = name + "..."
    else var nickname = name
    ctx.font         = '52px LemonMilk';
  ctx.fillStyle = '#FF0066';
  ctx.textBaseline = 'top';
  ctx.fillText  (nickname, 320, 30);
    //nick
    
    //tag
    const tag = message.mentions.users.first().tag.substr(message.mentions.users.first().username.length)
    ctx.font         = '33px LemonMilk';
  ctx.fillStyle = '#808080';
  ctx.textBaseline = 'top';
  ctx.fillText  (tag, 321, 85);
    //tag
    
    //money
    var userid = message.mentions.users.first().id
    var money = await db.fetch(`coin_${userid}`)
    if(money === null) {money = 0 
    await db.set(`coin_${userid}`, 0)}
    if(userid == "514906164287373313") money = "999999"
    ctx.font         = '88px bebas';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'top';
  ctx.fillText  (money, 290, 322);
    ctx.font         = '75px bebas';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'top';  
  ctx.fillText  ("x", 255, 335);
    //money

    //info
    function formatarData(data) {
    var d = new Date(data),
        mes = '' + (d.getMonth() + 1),
        dia = '' + d.getDate(),
        ano = d.getFullYear();

    if (mes.length < 2) mes = '0' + mes;
    if (dia.length < 2) dia = '0' + dia;

    return [dia, mes, ano].join('/');
}
    const member = message.guild.member(target)
    var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
   const info = target.joinedAt
   var info1 = formatarData(info)
   if(message.mentions.users.first().id == "252889971428556801") info1 = "a criação do mundo"
   ctx.font         = '24px LemonMilk';
 ctx.fillStyle = '#000000';
 ctx.textBaseline = 'top';
 ctx.fillText  ("membro desde:", 175, 180);
    ctx.fillStyle = '#F93986';
    ctx.fillText  (info1, 373, 180); //#F93986
    
    var descricao = await db.fetch(`inventory_desc_${target.id}`)
    if (descricao === null) descricao = "esta pessoa é uma pessoa muito misteriosa"
    const desc1 = descricao.substring(0, 31)
    const desc2 = descricao.substring(31, 62)
    const desc3 = descricao.substring(62, 90)
    
    ctx.fillStyle = '#000000';
     ctx.fillText  ("sobre:", 175, 215);
    ctx.fillStyle = '#F93986';
    if(descricao.length < 30) ctx.fillText  (desc1, 262, 215); //#F93986
    else if(descricao.length > 30 && descricao.length < 60) {
      ctx.fillText  (desc1, 262, 215); //#F93986
      ctx.fillText  (desc2, 262, 240); //#F93986
    }else if(descricao.length > 60) {
      ctx.fillText  (desc1, 262, 215); //#F93986
      ctx.fillText  (desc2, 262, 240); //#F93986
      ctx.fillText  (desc3, 262, 265); //#F93986
    }
    
  var nivel = await db.fetch(`nivel_${target.id}`)
  if (nivel === null) {nivel = 1
     await db.set(`nivel_${target.id}`, 1)
                      }
    if(target.id == "514906164287373313") nivel = 99
  
    ctx.font         = '38px LemonMilk';
    ctx.fillStyle = '#000000';
     ctx.fillText  ("nível", 810, 45);  
      
    ctx.font = '85px LemonMilk';
    ctx.fillStyle = '#FF0066';
    var length = Math.log(nivel) * Math.LOG10E + 1 | 0
    if(nivel == 1) ctx.fillText  (nivel, 852, 72);
    else if(nivel == 99) ctx.fillText  (nivel, 815, 72);
    else if (length == 1) ctx.fillText  (nivel, 842, 72);
    else if (length == 2) ctx.fillText  (nivel, 827, 72);
    
    
    //info
//ctx.drawImage(avatar, direita >, baixo, 128,128);
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
    message.channel.send("", attachment);
     }
  
  
  
  //sistema de xp
  
  var xp = await db.fetch(`xp_${message.author.id}`)
  if(xp === null) db.set(`xp_${message.author.id}`, 0)
  var nivel = await db.fetch(`nivel_${user.id}`)
  if (nivel === null) db.set(`nivel_${message.author.id}`, 1)
  // nivel 2
  if(xp > 200 && xp < 419 && nivel == 1) {
    db.set(`nivel_${message.author.id}`, 2)
  }
  //nivel 3
  if(xp > 420 && xp < 660 && nivel == 2) {
    db.set(`nivel_${message.author.id}`, 3)
  }
  //nivel 4
  if(xp > 660 && xp < 920 && nivel == 3) {
    db.set(`nivel_${message.author.id}`, 4)
  }
  //nivel 5
  if(xp > 920 && xp < 1200 && nivel == 4) {
    message.channel.send("você avançou para o nivel 5!")
    db.set(`nivel_${message.author.id}`, 5)
  }
  //nivel 6
  if(xp > 1200 && xp < 1500 && nivel == 5) {
    db.set(`nivel_${message.author.id}`, 6)
  }
  //nivel 7
  if(xp > 1500 && xp < 1820 && nivel == 6) {
    db.set(`nivel_${message.author.id}`, 7)
  }
  //nivel 8
  if(xp > 1820 && xp < 2160 && nivel == 7) {
    db.set(`nivel_${message.author.id}`, 8)
  }
  //nivel 9
  if(xp > 2160 && xp < 2520 && nivel == 8) {
    db.set(`nivel_${message.author.id}`, 9)
  }
  //nivel 10
  if(xp > 2520 && xp < 2900 && nivel == 9) {
    message.channel.send("você avançou para o nivel 10!")
    db.set(`nivel_${message.author.id}`, 10)
  }
  //nivel 11
  if(xp > 2900 && xp < 3300 && nivel == 10) {
    db.set(`nivel_${message.author.id}`, 11)
  }
  //nivel 12
  if(xp > 3300 && xp < 3720 && nivel == 11) {
    db.set(`nivel_${message.author.id}`, 12)
  }
  //nivel 13
  if(xp > 3720 && xp < 4160 && nivel == 12) {
    db.set(`nivel_${message.author.id}`, 13)
  }
  //nivel 14
  if(xp > 4160 && xp < 4620 && nivel == 13) {
    db.set(`nivel_${message.author.id}`, 14)
  }
  //nivel 15
  if(xp > 4620 && xp < 5100 && nivel == 14) {
    db.set(`nivel_${message.author.id}`, 15)
  }
  //nivel 16
  if(xp > 5100 && xp < 5620 && nivel == 15) {
    db.set(`nivel_${message.author.id}`, 16)
  }
  //nivel 17
  if(xp > 5620 && xp < 6160 && nivel == 16) {
    db.set(`nivel_${message.author.id}`, 17)
  }
  //nivel 18
  if(xp > 6160 && xp < 6720 && nivel == 17) {
    db.set(`nivel_${message.author.id}`, 18)
  }
  //nivel 19
  if(xp > 6720 && xp < 7300 && nivel == 18) {
    db.set(`nivel_${message.author.id}`, 19)
  }
  //nivel 20
  if(xp > 7300 && xp < 7900 && nivel == 19) {
    message.channel.send("você avançou para o nivel 20!")
    db.set(`nivel_${message.author.id}`, 20)
  }
  //nivel 21
  if(xp > 7900 && xp < 8520 && nivel == 20) {
    db.set(`nivel_${message.author.id}`, 21)
  }
  //nivel 22
  if(xp > 8520 && xp < 9160 && nivel == 21) {
    db.set(`nivel_${message.author.id}`, 22)
  }
  //nivel 23
  if(xp > 9160 && xp < 9820 && nivel == 22) {
    db.set(`nivel_${message.author.id}`, 23)
  }
  //nivel 24
  if(xp > 9820 && xp < 10500 && nivel == 23) {
    db.set(`nivel_${message.author.id}`, 24)
  }
  //nivel 25
  if(xp > 10500 && xp < 11200 && nivel == 24) {
    message.channel.send("você avançou para o nivel 25!")
    db.set(`nivel_${message.author.id}`, 25)
  }
  //nivel 26
  if(xp > 11200 && xp < 11920 && nivel == 25) {
    db.set(`nivel_${message.author.id}`, 26)
  }
  //nivel 27
  if(xp > 11920 && xp < 12660 && nivel == 26) {
    db.set(`nivel_${message.author.id}`, 27)
  }
  //nivel 28
  if(xp > 12660 && xp < 13420 && nivel == 27) {
    db.set(`nivel_${message.author.id}`, 28)
  }
  //nivel 29
  if(xp > 13420 && xp < 14200 && nivel == 28) {
    db.set(`nivel_${message.author.id}`, 29)
  }
  //nivel 30
  if(xp > 14200 && xp < 15000 && nivel == 29) {
    message.channel.send("você avançou para o nivel 30!")
    db.set(`nivel_${message.author.id}`, 30)
  }
  //nivel 31
  if(xp > 15000 && xp < 15820 && nivel == 30) {
    db.set(`nivel_${message.author.id}`, 31)
  }
  //nivel 32
  if(xp > 15820 && xp < 16660 && nivel == 31) {
    db.set(`nivel_${message.author.id}`, 32)
  }
  //nivel 33
  if(xp > 16660 && xp < 17520 && nivel == 32) {
    db.set(`nivel_${message.author.id}`, 33)
  }
  //nivel 34
  if(xp > 17520 && xp < 18400 && nivel == 33) {
    db.set(`nivel_${message.author.id}`, 34)
  }
  //nivel 35
  if(xp > 18400 && xp < 19300 && nivel == 34) {
    message.channel.send("você avançou para o nivel 35!")
    db.set(`nivel_${message.author.id}`, 35)
  }
  //nivel 36
  if(xp > 19300 && xp < 20220 && nivel == 35) {
    db.set(`nivel_${message.author.id}`, 36)
  }
  //nivel 37
  if(xp > 20220 && xp < 21160 && nivel == 36) {
    db.set(`nivel_${message.author.id}`, 37)
  }
  //nivel 38
  if(xp > 21160 && xp < 22120 && nivel == 37) {
    db.set(`nivel_${message.author.id}`, 38)
  }
  //nivel 39
  if(xp > 22120 && xp < 23100 && nivel == 38) {
    db.set(`nivel_${message.author.id}`, 39)
  }
  //nivel 40
  if(xp > 23100 && xp < 24100 && nivel == 39) {
    message.channel.send("você avançou para o nivel 40!")
    db.set(`nivel_${message.author.id}`, 40)
  }
  //nivel 41
  if(xp > 23100 && xp < 24100 && nivel == 40) {
    db.set(`nivel_${message.author.id}`, 41)
  }
  //nivel 42
  if(xp > 24100 && xp < 25120 && nivel == 41) {
    db.set(`nivel_${message.author.id}`, 42)
  }
 //nivel 43
  if(xp > 25120 && xp < 26160 && nivel == 42) {
    db.set(`nivel_${message.author.id}`, 43)
  }
  //nivel 44
  if(xp > 26160 && xp < 27220 && nivel == 43) {
    db.set(`nivel_${message.author.id}`, 44)
  }
  //nivel 45
  if(xp > 27220 && xp < 28300 && nivel == 44) {
    message.channel.send("você avançou para o nivel 45!")
    db.set(`nivel_${message.author.id}`, 45)
  }
  //nivel 46
  if(xp > 28300 && xp < 29400 && nivel == 45) {
    db.set(`nivel_${message.author.id}`, 46)
  }
  //nivel 47
  if(xp > 29400 && xp < 30520 && nivel == 46) {
    db.set(`nivel_${message.author.id}`, 47)
  }
  //nivel 48
  if(xp > 30520 && xp < 31660 && nivel == 47) {
    db.set(`nivel_${message.author.id}`, 48)
  }
  //nivel 49
  if(xp > 31660 && xp < 32820 && nivel == 48) {
    db.set(`nivel_${message.author.id}`, 49)
  }
  //nivel 50
  if(xp > 32820 && xp < 34000 && nivel == 49) {
    message.channel.send("você avançou para o nivel 50!")
    db.set(`nivel_${message.author.id}`, 50)
  }
  
 if(msg === "r!resetarxp") {
 await db.set(`nivel_${message.author.id}`, 1)
   await db.set(`xp_${message.author.id}`, 0)
   message.channel.send("seu nivel e seu xp foram  apagados!")
 }
  if(msg.startsWith("r!resetarxp ")) {
 await db.set(`nivel_${message.mentions.users.first().id}`, 1)
   await db.set(`xp_${message.mentions.users.first().id}`, 0)
   message.channel.send("seu nivel e seu xp foram  apagados!")
 }
  
  //sistema de xp
  if(msg === "r!xp") {
  var coco = await db.fetch(`xp_${message.author.id}`)
    message.channel.send(coco)
  }
  
  
  if(msg === "r!limpardescricao" || msg === "r!limpardesc" || msg === "r!limpardescrição" || msg === "r!resetardescricao" || msg === "r!resetardescrição") {
  await db.set(`inventory_descricao_${message.author.id}`, 0)
    message.channel.send("limpo!")
  }
  if(msg === "r!resetarrep" || msg === "r!resetrep" || msg === "r!clearrep" || msg === "r!resetwarn" || msg === "r!clearwarn" || msg === "r!warnclear") {
  await db.set(`rep_${message.author.id}`, 0)
    message.channel.send("limpo!")
  }
  
  if (msg === "r!daily"){
    let moment1 = moment().format('L')
  let user = message.author
  let lastdaily = await db.fetch(`daily_${user.id}`)
    if (lastdaily != moment1) {
      if (lastdaily === null) lastdaily = moment1
  let coin = await db.fetch(`coin_${user.id}`)
  if (coin === null) coin = 0 
  var addcoin = Math.floor(Math.random() * 20) + 10;
  db.add(`coin_${user.id}`, addcoin);
      var dia = moment1.substring(0, 2)
      db.set(`daily_${user.id}`, moment1)
      message.channel.send("Ótimo! hoje irei te dar **" + addcoin + "** moedas.")
    } else {
      message.channel.send("Você ja pegou sua recompensa de hoje!")
    }
}
  if (msg === "r!resetcoins" || msg === "r!clearcoins" || msg === "resetarmoedas") {
    let user = message.author
  db.set(`coin_${user.id}`, 0)
    message.channel.send("moedas resetadas!")
  }
  
  if (msg === "r!resetardiario") {
    let user = message.author
    db.set(`daily_${user.id}`, null)
    message.channel.send('Seu diario foi resetado!')
  }
  
  if (message.content === "r!moment") {
   let moment1 = moment().format('L') 
   let user = message.author
   let lastdaily = db.fetch(`daily_${user.id}`)
   message.channel.send("variável moment: " + moment1 + " data setada na database: " + lastdaily)
  }
  
  if (msg === "r!coins" ) {
    let user = message.author
    let coin = await db.fetch(`coin_${user.id}`)
  if (coin === null) coin = 0 
    message.channel.send("você tem **" + coin + "** moedas!")
  }
  if (msg === "r!moedas" ) {
    let user = message.author
    let coin = await db.fetch(`coin_${user.id}`)
  if (coin === null) coin = 0 
    message.channel.send("você tem **" + coin + "** moedas!")
  }
  
  
  
  if (msg.startsWith('r!watch ')){
     const msg1 = message.content.substr("r!watch ".length)
    db.set('watch_499646570523000881', msg1).then(i => {
    message.channel.send('Agora estou assistindo **' + msg1 + '!**')
    });
    db.set('lastaction', "watch")
    bot.user.setActivity(msg1, { type: 'WATCHING' })
  }
  
  if (msg.startsWith('r!game ')){
     const msg1 = message.content.substr("r!game ".length)
    db.set('watch_499646570523000881', msg1).then(i => {
    message.channel.send('Agora estou jogando **' + msg1 + '!**')
    });
    db.set('lastaction', "game")
    bot.user.setActivity(msg1)
  }
  
  
  if (message.content.startsWith('r!listen ')){
     const msg1 = message.content.substr("r!listen ".length)
    db.set('watch_499646570523000881', msg).then(i => {
    message.channel.send('Agora estou escutando **' + msg1 + '!**') //STREAMING
    });
    
    
    
    db.set('lastaction', "listen")
    bot.user.setActivity(msg1, { type: 'LISTENING' })
  }
  
  if (msg.startsWith('r!stream ')){
     const msg1 = message.content.substr("r!listen ".length)
    db.set('watch_499646570523000881', msg1).then(i => {
    message.channel.send('Agora estou transmitindo **' + msg1 + '!**') //STREAMING
      db.set('lastaction', "stream")
   bot.user.setPresence({ game: { name: msg1, type: "streaming", url: "https://www.twitch.tv/ToujyouRuby"}});
    });
    
  }
  
})



//respostas
const cumprimentos = ["Olá", "Oi", "Yooo"]  
//respostas

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json"); 

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0 ) {
        console.log("Nenhum comando para carregar!");
        return;
    } 

    console.log(`Loading ${jsfiles.length} commands!`);
  

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});



bot.on("ready", async () => {
    console.log(`${bot.user.username} está viva!`);
  let fetched = await db.fetch('watch_499646570523000881');
  let lastaction = await db.fetch('lastaction')
    if(fetched === null) var msg = 'ToujyouRuby'
    if(fetched === null) var msg = 'watch'
    else{msg = fetched};
  
  if(lastaction === "watch") bot.user.setActivity(msg, { type: 'WATCHING' })
  else if (lastaction === "game") bot.user.setActivity(msg)
  else if (lastaction === "listen") bot.user.setActivity(msg, { type: 'LISTENING' })
  else if (lastaction === "stream") bot.user.setPresence({ game: { name: msg, type: "streaming", url: "https://www.twitch.tv/ToujyouRuby"}});
  
  
});


bot.on('guildMemberAdd', (guildMember) => {
  
  db.set(`nivel_${guildMember.id}`, 1)
   guildMember.addRole(guildMember.guild.roles.find(role => role.id === "550396198113247233"));
  guildMember.addRole(guildMember.guild.roles.find(role => role.id === "550396117062385694"));
    guildMember.addRole(guildMember.guild.roles.find(role => role.id === "550418981782159361"));
  guildMember.addRole(guildMember.guild.roles.find(role => role.id === "550665256482111489"));
   bot.channels.get("550799061922349059").send("⠀⠀⠀⠀⠀⠀" + guildMember + " seja bem vindo(a) ao meu servidor! espero que se divirta bastante! \n  Mas antes, não se esqueça de se registrar (" + guildMember.guild.channels.get('550384236855689227').toString() + ") para poder ter acesso aos canais de texto! \n \n  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**FIQUE ATENTO ÀS REGRAS!**")
  });
bot.on('guildMemberRemove', (guildMember) => {
  db.delete(`xp_${guildMember.id}`)
  db.delete(`nivel_${guildMember.id}`)
bot.channels.get("550799061922349059").send(guildMember + " Saiu do servidor.")
  });
bot.on("messageDelete", async (messageDelete) => {
  
  if(messageDelete.channel.id === "551853627015430145") return
  const entry = await messageDelete.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    }).then(audit => audit.entries.first())
    let user;
   if (entry.extra.channel.id === messageDelete.channel.id && (entry.target.id === messageDelete.author.id) && (entry.createdTimestamp > (Date.now() - 5000))) {
        user = entry.executor
    } else {
        user = messageDelete.author
    }

  
  const deleteembed = new Discord.RichEmbed()
            .setAuthor(' Ação | Mensagem deletada', `https://cdn.discordapp.com/attachments/526104396917112862/551786102240051241/aaasssq.png`)
            .addField("executor", user)
            .addField('autor:', `<@${messageDelete.author.id}>`)
            .addField('Mensagem:', `${messageDelete.content}`)
            .setColor('#230A35')
      		  .setFooter("Logs-de-mensagens", "https://cdn.discordapp.com/emojis/551023291142373385.png")
  
 bot.channels.get("551779710242258954").send(deleteembed)
});

bot.on('messageUpdate', (oldMessage, newMessage) => {
  if(oldMessage.author.bot) return
  try {
  const updateembed = new Discord.RichEmbed()
            .setAuthor(' Ação | Mensagem Editada', `https://cdn.discordapp.com/attachments/526104396917112862/551786102240051241/aaasssq.png`)
            .addField('Usuário:', `<@${newMessage.author.id}>`)
            .addField('Antiga:', `${oldMessage.content}`)
            .addField('Nova:', `${newMessage.content}`)
            .setColor('#230A35')
      		  .setFooter("Logs-de-mensagens", "https://cdn.discordapp.com/emojis/551023291142373385.png")
bot.channels.get("551779710242258954").send(updateembed)
  } catch(err){}
  
})

bot.on("message", async message => {
  if(message.content === "r!resetwarn") {
    var reputacao = await db.fetch(`rep_${message.author.id}`)
    var emoji = await bot.emojis.get("558599466613997578")
  await db.set(`rep_${message.author.id}`, 0)  
    message.channel.send("Sua reputação foi resetada! nova reputação: " + emoji)
  }
  if(message.content.startsWith("r!resetwarn ")) {
    var emoji = await bot.emojis.get("558599466613997578")
  await db.set(`rep_${message.mentions.users.first().id}`, 0)  
    message.channel.send("A reputação de **" + message.mentions.users.first().username + "** foi resetada! nova reputação: " + emoji)
  }
  //warn
  if(message.content.startsWith("r!warn ")) {
   var msg = message.content.split(message.mentions.users.first()).pop()
   var reputacao = await db.fetch(`rep_${message.mentions.users.first().id}`)
   if (reputacao === null) await db.set(`rep_${message.mentions.users.first().id}`, 0)   
    if (reputacao >= 4) {
      if(message.mentions.members.first().hasPermission("ADMINISTRATOR")) {
        db.set(`rep_${message.mentions.users.first().id}`, 4)
        return message.channel.send("você não será banido por ser um administrador, porém o comando está funcionando!")
      }
      message.mentions.members.first().ban()
                        message.channel.send("**" + message.mentions.members.first().username + "** foi banido por desobedecer demais as regras, espero que isso sirva de lição a todos!")
                        }
    
    message.channel.send("**" + message.mentions.users.first().username + "** foi alertado porque" + "**" + msg + "**");
    await db.add(`rep_${message.mentions.users.first().id}`, 1)
    message.mentions.users.first().send("Você foi alertado no servidor porque você**" + msg + "**, espero que isso não ocorra novamente, ou haverá consequências!")
  }
  
  
  if(message.content === "r!removebotmarks") {
    const bot1 = message.guild.members.find(m => m.id === "235148962103951360");
    const bot2 = message.guild.members.find(m => m.id === "432610292342587392");
    const bot3 = message.guild.members.find(m => m.id === "488711695640821760");
    const bot4 = message.guild.members.find(m => m.id === "235088799074484224");
    const bot5 = message.guild.members.find(m => m.id === "514906164287373313"); //
    const bot6 = message.guild.members.find(m => m.id === "184405311681986560");
    
    try{
    bot1.removeRole("550418981782159361")
      bot1.removeRole("550396198113247233")
      bot1.removeRole("550396117062385694")
      bot1.removeRole("550665256482111489")
      
      bot2.removeRole("550418981782159361")
      bot2.removeRole("550396198113247233")
      bot2.removeRole("550396117062385694")
      bot2.removeRole("550665256482111489")
      
      bot3.removeRole("550418981782159361")
      bot3.removeRole("550396198113247233")
      bot3.removeRole("550396117062385694")
      bot3.removeRole("550665256482111489")
      
      bot4.removeRole("550418981782159361")
      bot4.removeRole("550396198113247233")
      bot4.removeRole("550396117062385694")
      bot4.removeRole("550665256482111489")
      
      bot5.removeRole("550418981782159361")
      bot5.removeRole("550396198113247233")
      bot5.removeRole("550396117062385694")
      bot5.removeRole("550665256482111489")
      
      bot6.removeRole("550418981782159361")
      bot6.removeRole("550396198113247233")
      bot6.removeRole("550396117062385694")
      bot6.removeRole("550665256482111489")
      
      message.channel.send("Marcas de todos os bots removidas!")
    } catch(err) {}
  }
  
  if(message.content === "r!clearall") {
  let channel = message.channel
  
channel.fetchMessages({ limit: 1 }).then(messages => {
  
  messages.first().delete()
})
  }
  //mute
   
  var msg = message.content.toLowerCase()
  
  if (msg === prefix + "icon") {
    let msg2 = await message.channel.send(":arrows_counterclockwise: Gerando avatar...");
    message.channel.send({files: [
        {
            attachment: message.guild.iconURL,
            name: "icon.png"
        }  
    ]});

    msg2.delete();
}  
  if (msg.startsWith(prefix + "avatar ")) {
  let msg = await message.channel.send(":arrows_counterclockwise: Gerando avatar...");
    message.channel.send({files: [
        {
            attachment: message.mentions.users.first().displayAvatarURL,
            name: "avatar.png"
        }  
    ]});

    msg.delete();
}
  
  if (msg === prefix + "avatar") {
  let msg = await message.channel.send(":arrows_counterclockwise: Gerando avatar...");
    message.channel.send({files: [
        {
            attachment: message.author.displayAvatarURL,
            name: "avatar.png"
        }  
    ]});

    msg.delete();
}
  })

//INICIO DO BOT
bot.on("message", message => {   //estrutura basica para iniciar algum comando do bot, na qual "message" é a ação.
  var msg = message.content.toLowerCase()
  //COMANDOS PRIVADOS
  //if(message.channel.type === "dm") {
     if (msg === prefix + 'teste2') {          //condição para o acionamento do comando, no qual se o conteúdo da mensagem começar com "~>teste"
                                                       //executará o comando que esta dentro da chave
    message.channel.send('comando **funcionando**!')   //comando basico para mandar mensagem no chat
}
    
    //CONVERSAS NORMAIS
  
  /*
    if(message.content.toLowerCase().includes("eae ruby") || message.content.toLowerCase().includes("oi ruby") || message.content.toLowerCase().includes("olá ruby")) {
      var resposta = cumprimentos [Math.floor(Math.random()*cumprimentos .length)];
      message.channel.send(resposta + " **" + message.author.username + "-san**!")
    };
  */
  
    //CONVERSAS NORMAIS
    
    
    
  //}
  //COMANDOS PRIVADOS
  
  //COMANDOS SERVIDOR
  
  
  //COMANDOS SERVIDOR
  if (message.content.startsWith ('r!bemvindo')) {
  bot.channels.get("550799061922349059").send("⠀⠀⠀⠀⠀⠀" + message.author + " seja bem vindo(a) ao meu servidor! espero que se divirta bastante! \n  Mas antes, não se esqueça de se registrar (" + message.guild.channels.get('550384236855689227').toString() + ") para poder ter acesso aos canais de texto! \n \n  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**FIQUE ATENTO ÀS REGRAS!**")
  

  }
  
  if (message.content.startsWith ('r!regras')) {
    const ruby1 = bot.emojis.get("551023291142373385")
    bot.channels.get("550814148313874434").send({
    file: "https://cdn.discordapp.com/attachments/502104641165721600/551021802202333187/Sem_Titulo-2.png" // Or replace with FileOptions object
}); 
    setTimeout(function(){ 
    bot.channels.get("550814148313874434").send("  \n \n" + ruby1 + " **1º Regra:** Respeite todos os membros, não xingue \n ou ofenda ninguém, a menos que o alvo esteja de \n acordo. \n \n" + ruby1 + " **2ª Regra:** É estritamente proibído conteudo adulto \n neste servidor afinal, ainda não sou adulta! \n \n" + ruby1 + " **3ª Regra:** Eu não permi-, digo, não é permitido \n **SPAM** (ou qualquer coisa relacionada) neste servidor! \n \n" + ruby1 + " **4ª Regra:** Respeite os canais de voz e de texto, cada \n um tem  a sua função! se você for pego desobedecendo, \n sera avisado, e se continuar, será aplicada uma punição! \n \n" + "                ** Respeite todas as regras e se divirta!**")
     ; 
}, 1000);
      
  }
 
if (message.content.startsWith ('r!markon')) {
  
  try{
    message.channel.send(message.author + ', marcas adicionadas!')
    const list = bot.guilds.get(message.guild.id);
    list.members.forEach(member => member.addRole('550396198113247233'));
    list.members.forEach(member => member.addRole('550396117062385694'));
      list.members.forEach(member => member.addRole('550418981782159361'));
    list.members.forEach(member => member.addRole('550665256482111489'));
   
   // message.member.removeRole('462686635285413889')  //nivel 1   
  
    }catch(err){}
      
}
  if (message.content.startsWith ('r!markoff')) {
  
  try{
    message.channel.send(message.author + ', marcas removidas!')
    const list = bot.guilds.get(message.guild.id);
    list.members.forEach(member => member.removeRole('550396198113247233'));
    list.members.forEach(member => member.removeRole('550396117062385694'));
    list.members.forEach(member => member.removeRole('550418981782159361'));
    list.members.forEach(member => member.removeRole('550665256482111489'));
    
   // message.member.removeRole('462686635285413889')  //nivel 1   
  
    }catch(err){}
      
}

})



bot.on("message", async message => {                      //estrutura basica para qualquer comando (você pode adicionar varios comandos dentro dessa mesma estrudura)
  var msg = message.content.toLowerCase()
  var coisa = await db.fetch(`xp_${message.author.id}`)
  if(coisa === null) db.set(`xp_${message.author.id}`, 0)  
  
  
  //exemplo2
  if (message.content === prefix + 'teste') {
    message.author.send('Yooo, Ruby desu!')        
  }
  //exemplo2
//FUNÇÕES
  function respostaoi() {
    var rand = ['ola', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}
})
//FIM DO BOT

bot.login(botSettings.token);