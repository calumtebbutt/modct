const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratpfleet",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === '693509227343249418'){

    const ratpfleetEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - Fleet")
    .setDescription("To be announced soon...")
    .setColor("#24bfab")
    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratpfleetEmbed)

    } else {
        return;
    }

}