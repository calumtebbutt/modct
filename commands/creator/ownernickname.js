const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "onick",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if (message.author.id === "267388385159675904") {
        let nick = args.join(" ").slice(22);
        let nickuser2 = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        message.delete();
        nickuser2.setNickname(nick);
    }
}
