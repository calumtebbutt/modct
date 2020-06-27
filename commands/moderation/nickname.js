const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "nickname",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    let nickuser = message.mentions.users.first();
    let nickname = args.join(" ").slice(22);
    let nickuser1 = message.mentions.members.first();

    if(!nickuser) return message.reply(" please specify a user.");

    if(!nickname) return message.reply(" please give a nickname.");

    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(" you do not have permission to change nicknames.");

    nickuser1.setNickname(nickname);
    message.channel.send(`Changed ${nickuser}'s nickname!`);
}