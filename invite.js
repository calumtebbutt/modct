const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "invite",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    message.author.send("**Invite CTMod to your server!**\nLink: http://ctmedia.site/discord-bot/\nDiscord Server: https://discord.gg/V6HGAgB")
}