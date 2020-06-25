const { Client, Collection, MessageEmbed, Channel } = require('discord.js');

module.exports.config = {
    name: "donate",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    message.reply("\n**Want to support CTMod Bot?**\nDonate to us via Paypal: https://www.paypal.me/ctmedia")
}