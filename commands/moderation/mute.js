const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "mute",
    aliases: []
}


module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.reply(
          " you do not have permission to mute anyone"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.reply("I do not have permission to manage roles.");
      }

      const user = message.mentions.members.first();

    if (!user) {
      return message.reply(
        " please specify a user to mute."
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("I am unable to mute a bot.");
    }

    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.reply(" please give the reason to mute the member.")
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.reply(" this server does not have a role with name `Muted`. Please create this role and set permissions.")
    }

    if(user.roles.cache.has(muterole)) {
        return message.reply(" user is already muted.")
      }

      user.roles.add(muterole)
    
await message.reply(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    
    user.send(`You are muted in **${message.guild.name}** for reason: \`${reason}\``)
}