const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "botinfo",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    //variables
    const supportserver = ("https://discord.gg/V6HGAgB")

    let serversize = client.guilds.cache.size
    let membercount = client.users.cache.size
    let clienticon = client.user.displayAvatarURL;
    let clientembed = new MessageEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(clienticon)
    .addField("Bot Name", client.user.username)
    .addField("Created On", client.user.createdAt)
    .addField("Server Count", serversize)
    .addField("User Count", membercount)
    .addField("Bot Creator", "CalumT#3056")
    .addField("Official Discord Server", supportserver)

    message.channel.send(clientembed);
}
