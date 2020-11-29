const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratpstaff",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === '693509227343249418'){

    const ratpstaffEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - Staff")
    .setDescription("**HRs**\nreecerod\nAlexDev_exe\nH1_Z1z\nDD_Sim\nRebelkopGamer206\nPhotoBlockTrollz\nFletchyboy100\nmax8gaming\nBritishAviator_RBX\nTowerGateway\nthemister18\nixMidnight_Rosieix\nczllvm\n\n**Engineering Team**\nx3fklazomaniac\nMike_7668\nsenyo44\nBrian_Sedano\nbossmaneternity\nkyrovia\nTsunamiD\nthegreeknotebook\nMrTomasBoy\nrailwork\nJPYukiRBX\n\n**Execs**\nCalumT01 *- Deputy Chairman*\niiReece98 *- Chairman*")
    .setColor("#24bfab")
    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratpstaffEmbed)

    } else {
        return;
    }

}
