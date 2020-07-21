const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "about",
    aliases: []
}


module.exports.run = async (client, message, args) => {
    const aboutembed = new MessageEmbed()
    .setTitle("**CTModeration Bot**")
    .setThumbnail('http://ctmedia.site/wp-content/uploads/2020/06/NORMAL.png%27')
    .setURL("https://ctmedia.site/ctmod%22")
    .setColor("#09FF00")
    .setDescription("CTMod is a Discord Moderation bot with features such as music playing, message logging and much more!")
    .setFooter("Created by CalumT#3056 - CTModeration")
    .addField("**Commands**", "To view a full list of commands available - head to https://top.gg/bot/725000309759279105")
    .addField("**Message Logging**", "CTMod is able to log when a user edits or deletes a message in any channel. For this feature to work, please ensure you have a channel name “chat-logs”. Once this channel has been created, CTMod will automatically start logging messages in that channel.")
    .addField("**Suggestions System**", "CTMod has its own suggestions system. For this to work, please make sure you have a channel named 'suggestions' and this will automatically work.")
    .addField("Add CTMod to you server by heading to https://top.gg/bot/725000309759279105", "Enjoy!")

    message.author.send(aboutembed)
}