const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "announce",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(" you do not have permission to use this command.")

    let argsresult;
    let mChannel = message.mentions.channels.first();

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
}
