  
const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "os",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if (message.author.id === "267388385159675904") {

       if(!args[0]) return message.reply(" please specify the time (seconds) you wish to set slowmode too.")
        if(isNaN(args[0])) return message.reply(" please enter a number.")

        message.channel.setRateLimitPerUser(args[0])

        if(args[0] === '0') {
            message.channel.send("Slowmode for this channel has been turned off.");
        } else {
            message.channel.send(`Set slowmode of this channel to ${args[0]} seconds.`);
        }


    let slowchan = message.channel.name

   const slowembed = new MessageEmbed()
  .setTitle("**Slowmode**")
  .setColor("#ff9900")
  .addField("User:", `${message.author.tag}`)
  .addField("Time:", `${args[0]}`)
  .addField("Channel:", `${slowchan}`)
  .setTimestamp()
  .setFooter("CTModeration");

  let slowlog = message.guild.channels.cache.find(c => c.name === "chat-logs")
  if (!slowlog) return;

  slowlog.send(slowembed);
       
       
    }
}
