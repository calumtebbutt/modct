const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratpfaq",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === '693509227343249418'){

    const ratpfaqEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - Frequently Asked Questions")
    .setDescription("**Can I be a HR?**\nIf we're hiring for HRs/MRs, the position will be advertised in the #applications channel.\n\n**When is the next meeting?**\nMeetings are advertised on our Group Shout and Discord server.")
    .setColor("#24bfab")
    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratpfaqEmbed)

    } else {
        return;
    }

}