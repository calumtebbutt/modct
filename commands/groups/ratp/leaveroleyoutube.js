const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "leave-role-youtube",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    let youtube = message.guild.roles.cache.find(x => x.name === "YouTube"){
        
        let user = message.author
        
        if (user.roles.cache.has(youtube)) {
        user.roles.remove(youtube)
        return message.reply(", you've left the YouTube role.")
    } else return
    message.reply(" has left the YouTube role.")
    
}
