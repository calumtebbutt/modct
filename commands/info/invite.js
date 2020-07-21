const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "invite",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    message.author.send("**Invite CTMod to your server!**\nLink: https://top.gg/bot/725000309759279105\nDiscord Support Server: https://discord.gg/V6HGAgB")
}
