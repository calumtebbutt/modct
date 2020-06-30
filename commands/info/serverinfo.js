const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "serverinfo",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    let serverembed = new MessageEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(message.guild.iconURL)
    .addField("Server Name", message.guild.name)
    .addField("Region", `${message.guild.region}`)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("Owner", message.guild.owner)
    .addField("Channels", `${message.guild.channels.cache.size}`)
    .addField("Roles", `${message.guild.roles.cache.size}`);

    message.channel.send(serverembed);
}
