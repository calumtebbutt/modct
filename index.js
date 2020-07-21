const { Client, Collection, MessageEmbed } = require('discord.js');
const prefix = "!"
const client = new Client();
const fs = require('fs');

client.commands = new Collection()
client.aliases = new Collection();

//backcheck
client.on('message', message => {
  if(message.author.bot) return;



// EDITED MESSAGE LOGGING

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.content === newMessage.content) {
    return;
  }

  if(!message.author.id === '725000309759279105'){

    let logEmbed = new MessageEmbed()
      .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
      .setThumbnail(oldMessage.author.avatarURL)
      .setColor("#D9E519")
      .setDescription("Edited Message")
      .addField("Before", oldMessage.content)
      .addField("After", newMessage.content)
      .setTimestamp()
      .setFooter("CTModeration");

    let loggingChannel = newMessage.guild.channels.cache.find(ch => ch.name === "chat-logs")
    if (!loggingChannel) return;

    loggingChannel.send(logEmbed);
  } else return;
})


//LOG DELETED MESSAGES

client.on("messageDelete", async message => {


  if(!message.author.id === '725000309759279105'){


    let deleteEmbed = new MessageEmbed()
      .setAuthor(message.author.tag)
      .setColor("#FF0000")
      .setDescription("Deleted Message")
      .setThumbnail(message.avatarURL)
      .addField("Deleted in:", message.channel.name)
      .addField("Message:", message.content)
      .setTimestamp()
      .setFooter("CTModeration");

    let deleteLog = message.guild.channels.cache.find(c => c.name === "chat-logs")
    if (!deleteLog) return;

    deleteLog.send(deleteEmbed);
  } else return;
  
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



// GETS COMMANDS FROM helpful FOLDER

fs.readdir("./commands/helpful/", (err, files) => {
  if (err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    return console.log("helpful files not found.");
  }

  jsfile.forEach((file, i) => {
    let pullcmd = require(`./commands/helpful/${file}`)
    client.commands.set(pullcmd.config.name, pullcmd)
    pullcmd.config.aliases.forEach(alias => {
      client.aliases.set(alias, pullcmd.config.name)
    })
  })
});


// GETS COMMANDS FROM RATP FOLDER

fs.readdir("./commands/groups/ratp/", (err, files) => {
  if (err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    return console.log("helpful files not found.");
  }

  jsfile.forEach((file, i) => {
    let pullcmd = require(`./commands/groups/ratp/${file}`)
    client.commands.set(pullcmd.config.name, pullcmd)
    pullcmd.config.aliases.forEach(alias => {
      client.aliases.set(alias, pullcmd.config.name)
    })
  })
});





// GETS COMMANDS FROM REDBULL FOLDER

fs.readdir("./commands/groups/redbull/", (err, files) => {
  if (err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    return console.log("helpful files not found.");
  }

  jsfile.forEach((file, i) => {
    let pullcmd = require(`./commands/groups/redbull/${file}`)
    client.commands.set(pullcmd.config.name, pullcmd)
    pullcmd.config.aliases.forEach(alias => {
      client.aliases.set(alias, pullcmd.config.name)
    })
  })
});








}) // end of bot















client.on('ready', () =>{
    let activities = [ `${client.guilds.cache.size} servers!`, `${client.channels.cache.size} channels!`, `${client.users.cache.size} users!` ], i = 0;
    setInterval(() => client.user.setActivity(`!help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
})


client.on("message", async message => {

  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)

  if (!message.content.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
  if (commandfile) commandfile.run(client, message, args)
  
})








client.login(process.env.BOT_TOKEN);
