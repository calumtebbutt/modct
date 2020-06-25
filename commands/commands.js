const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "commands" or "help"
    aliases: []
}

module.exports.run = async (client, message, args) => {
  message.author.send("\n\n**Commands**\n\n**!commmands** or **help** - to view commands\n**!serverinfo** - to view server information\n\n**!kick @user** - to kick a specified member\n\n**!ban @user** - to ban a specified member")
}
