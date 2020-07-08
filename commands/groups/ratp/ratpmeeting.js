const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratpmeeting",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === '693509227343249418'){

    const ratpmeetingEmbed = new MessageEmbed()
    .setTitle("RATP Commands")
    .setDescription("To be uploaded soon...\n\n**Next Meeting:** TBC\n**Time:** TBC")
    .setColor("#24bfab")
    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratpmeetingEmbed)

    } else {
        return;
    }

}