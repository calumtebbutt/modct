const { Client, Collection, MessageEmbed, CategoryChannel, DiscordAPIError, GuildEmoji } = require('discord.js');

module.exports.config = {
    name: "serverinfo",
    aliases: []
}


module.exports.run = async (bot, message, args) => {
    let serverembed = new MessageEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(message.guild.iconURL)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("Owner", message.guild.owner);

    message.channel.send(serverembed);
}