const { Client, Collection, MessageEmbed, CategoryChannel, DiscordAPIError, GuildEmoji } = require('discord.js');

module.exports.config = {
    name: "botinfo",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    //variables
    const supportserver = ("https://discord.gg/V6HGAgB")


    let clienticon = client.user.displayAvatarURL;
    let clientembed = new MessageEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(clienticon)
    .addField("Bot Name", client.user.username)
    .addField("Created On", client.user.createdAt)
    .addField("Bot Creator", "CalumT#3056")
    .addField("Official Discord Server", supportserver)

    message.channel.send(clientembed);
}