const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "oa",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if (message.author.id === "267388385159675904") {

        let argsresult;
        let mChannel = message.mentions.channels.first();

        message.delete()
        if (mChannel) {
            argsresult = args.slice(1).join(" ")
            mChannel.send(argsresult)
        } else {
            argsresult = args.join(" ")
            message.channel.send(argsresult)
        }
    }
}