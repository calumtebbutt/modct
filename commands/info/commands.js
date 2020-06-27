const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "commands",
    aliases: []
}

module.exports.run = async (client, message, args) => {
  message.reply(" check DMs!")
  message.author.send("\n\n**Commands**\n\n**!commands** or **!help** - to view commands\n**!serverinfo** - to view server information\n**!kick @user** - to kick a specified member\n**!ban @user** - to ban a specified member\n**!donate** - to support CTModeration\n**!premium** - to buy CTMod Premium\n**!botinfo** - to view information on CTMod\n**!ping** - to view Latency & API Latency\n**!uptime** - how long since the last CTMod update.\n**!invite** - invite CTMod to your server\n**!nickname @user <name>** - to change a users nickname\n**!announce #channel <message>** - to send an message from the bot in a specified channel\n**!mute @user <reason>** - to mute a user\n**!unmute @user** - to unmute a user\n**!purge <number>** - to bulk delete an amount of messages\n**!slowmode <seconds>** - to turn slowmode on in a channel to a custom time\n**!userinfo @user** - to view information on a user\n**!eval** - Creator Locked command")
}
