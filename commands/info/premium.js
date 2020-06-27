const { Client, Collection, MessageEmbed, Channel } = require('discord.js');

module.exports.config = {
    name: "premium",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    message.channel.send("**\nPurchase Premium here:** http://ctmedia.site/product/ctmod-bot-premium/ \n\n**Premium Features:**\n- Premium Role in CTModeration Discord Server\n- Access to premium commands such as CTMusic")
}
