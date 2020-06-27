const { Client, Collection, MessageEmbed } = require('discord.js');
const prefix = "!"
const client = new Client();
const fs = require('fs');

client.commands = new Collection()
client.aliases = new Collection();

//backcheck
client.on('message', message => {
  if(message.author.bot) return;
})



// GETS COMMANDS FROM MODERATION FOLDER

fs.readdir("./commands/moderation/", (err, files) => {
  if (err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    return console.log("Mod files not found.");
  }

  jsfile.forEach((file, i) => {
    let pullcmd = require(`./commands/moderation/${file}`)
    client.commands.set(pullcmd.config.name, pullcmd)
    pullcmd.config.aliases.forEach(alias => {
      client.aliases.set(alias, pullcmd.config.name)
    })
  })
});


// GETS COMMANDS FROM INFO FOLDER

fs.readdir("./commands/info/", (err, files) => {
  if (err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    return console.log("Mod files not found.");
  }

  jsfile.forEach((file, i) => {
    let pullcmd = require(`./commands/info/${file}`)
    client.commands.set(pullcmd.config.name, pullcmd)
    pullcmd.config.aliases.forEach(alias => {
      client.aliases.set(alias, pullcmd.config.name)
    })
  })
});



// GETS COMMANDS FROM CREATOR FOLDER

fs.readdir("./commands/creator/", (err, files) => {
  if (err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    return console.log("creator files not found.");
  }

  jsfile.forEach((file, i) => {
    let pullcmd = require(`./commands/creator/${file}`)
    client.commands.set(pullcmd.config.name, pullcmd)
    pullcmd.config.aliases.forEach(alias => {
      client.aliases.set(alias, pullcmd.config.name)
    })
  })
});



client.on('ready', () =>{
    console.log('This bot is online.');
});


client.on("message", async message => {

  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)

  if (!message.content.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
  if (commandfile) commandfile.run(client, message, args)
  
})




// EDITED MESSAGE LOGGING

client.on("messageUpdate", async(oldMessage, newMessage) =>{
  if(oldMessage.content === newMessage.content){
    return;
  }

  let logEmbed = new MessageEmbed()
  .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
  .setThumbnail(oldMessage.author.avatarURL)
  .setColor("#D9E519")
  .setDescription("Edited Message")
  .addField("Before", oldMessage.content, true)
  .addField("After", newMessage.content, true)
  .setTimestamp()
  .setFooter("CTModeration");

  let loggingChannel = newMessage.guild.channels.cache.find(ch => ch.name === "chat-logs")
  if(!loggingChannel) return;

  loggingChannel.send(logEmbed);

})


//LOG DELETED MESSAGES

client.on("messageDelete", async message =>{

  let deleteEmbed = new MessageEmbed()
  .setTitle("Deleted Message")
  .setColor("#FF0000")
  .setThumbnail(message.avatarURL)
  .addField("Deleted By:", message.author.tag)
  .addField("Deleted in:", message.channel.name)
  .setTimestamp()
  .setFooter("CTModeration");

  let deleteLog = message.guild.channels.cache.find(c => c.name === "chat-logs")
  if(!deleteLog) return;

  deleteLog.send(deleteEmbed);
})




client.login(process.env.BOT_TOKEN);
