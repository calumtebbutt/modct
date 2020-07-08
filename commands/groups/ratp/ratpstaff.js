const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratpstaff",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === '693509227343249418'){

    const ratpstaffEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - Staff")
    .setDescription("**HRs**\nreecerod\nBrickBusEllis\nAlexDev_exe\nZainabdriver\nBrettYork\namazingguy377\nDD_Sim\nRebelkopGamer206\nPhotoBlockTrollz\niiDight3r\nFletchyboy100\njojojosh3210\nmax8gaming\nBritishAviator_RBX\nCaidanParker\nTowerGateway\nOptical365\nthemister18\nKacperEpic\nJ_oshJ\nredline_1999\n\n**Engineering Team**Master_GamerMan\nConnorClever\nx3fklazomaniac\nMike_7668\nsenyo44ALT2\n\n**Execs**\nCalumT01 *- Executive Assistant*\nMrTomasboy *- Vice Chairman*\niiReece98 *- Chairman*")
    .setColor("#24bfab")
    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratpstaffEmbed)

    } else {
        return;
    }

}