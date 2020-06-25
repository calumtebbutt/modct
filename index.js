const { Client, Collection, MessageEmbed } = require('discord.js');
const prefix = "!"
const client = new Client();
const fs = require('fs');

client.commands = new Collection()
client.aliases = new Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    return console.log("command files not found.");
  }

  jsfile.forEach((file, i) => {
    let pullcmd = require(`./commands/${file}`)
    client.commands.set(pullcmd.config.name, pullcmd)
    pullcmd.config.aliases.forEach(alias => {
      client.aliases.set(alias, pullcmd.config.name)
    })
  })
})



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


client.login(process.env.BOT_TOKEN);
