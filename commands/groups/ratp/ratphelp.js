const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratphelp",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === '693509227343249418'){

    const ratpcommandsEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - Commands")
    .setDescription("Find a full list of commands for the RATP Dev London server here!")
    .setColor("#24bfab")
    .addField("**!ratphelp**", "View all available commands")
    .addField("**!ratprules**", "View the group rules")
    .addField("**!ratproutes**", "View a full list of routes")
    .addField("**!ratpoperators**", "View a full list of operators")
    .addField("**!ratpmeeting**", "View notes on what was said in the weekly meeting")
    .addField("**!ratpfleet**", "View the full RATP Fleet")
    .addField("**!ratpfaq**", "View frequently asked questions")
    .addField("**!ratpcredits**", "View a full list of game credits")
    .addField("**!ratpstaff**", "View a full list of the HRs, Seniors & Execs")
    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratpcommandsEmbed)

    } else {
        return;
    }

}