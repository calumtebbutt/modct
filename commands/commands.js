const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "commands",
    aliases: []
}

module.exports.run = async (client, message, args) => {
  message.reply(" check DMs!")
  message.author.send("\n\n**Commands**\n\n**!commands** or **!help** - to view commands\n**!serverinfo** - to view server information\n**!kick @user** - to kick a specified member\n**!ban @user** - to ban a specified member")
}
