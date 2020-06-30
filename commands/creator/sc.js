const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "sc",
    aliases: []
}


module.exports.run = async (client, message, args) => {
    ownerID = ('267388385159675904')

    if(message.author.id == ownerID) {

        let serversize = client.guilds.cache.size
        let membersize = client.users.cache.size

        message.channel.send(`**CTMod** is currently in **${serversize} servers watching ${membersize} users.**`)
    } else {
        message.reply(" you do not have permission to use this command.")
    }
}
