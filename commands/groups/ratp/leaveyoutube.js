const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "leaveyoutube",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
    }
    
    let user = message.author();
    
    let youtube = message.guild.roles.cache.find(x => x.name === "YouTube");


    if (user.roles.cache.has(youtube)) {
        user.roles.remove(youtube)
        message.reply(", removed from role.")
    } else return
    message.reply(", you do not have the YouTube role.")
    
}
