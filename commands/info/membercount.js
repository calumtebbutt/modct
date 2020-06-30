const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "membercount",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    let online = message.guild.members.cache.filter(
        member => member.user.presence.status !== "offline"
    )

    const mEmbed = new MessageEmbed()
    .setColor("#09FF00")
    .setTitle(`${message.guild.name}'s Member Count`)
    .setTimestamp()
    .setFooter("CTModeration")
    .addField("Total Member Count", `${message.guild.memberCount}`)
    .addField("Bot Count", `${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .addField("Online", `${online.size}`)

    message.channel.send(mEmbed)
}
