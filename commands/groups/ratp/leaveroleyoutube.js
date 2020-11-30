const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "leave-role-youtube",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    let youtube = message.guild.roles.cache.find(x => x.name === "YouTube"){
    user.roles.remove(youtube)
    message.reply(" has left the YouTube role.")
    } else
    message.reply(", you do not have the YouTube role.")
    
}
