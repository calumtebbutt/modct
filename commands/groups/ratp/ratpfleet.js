const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratpfleet",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === '693509227343249418'){

    const ratpfleetEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - Fleet")
    .setDescription("- Marhsall Dart 9.9m\n- E200 9.6m & 10.8m\n- E200 MMC 10.2m\n- E400 MMC 10.5m\n- LT 11.2m\n\nOther buses are coming soon and once the game is opened you will see them tested around the map by the developers.")
    .setColor("#24bfab")
    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratpfleetEmbed)

    } else {
        return;
    }

}
