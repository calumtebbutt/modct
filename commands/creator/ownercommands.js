const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "oc",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    const commandEmbed = new MessageEmbed()
        .setTitle("CTMod Commands")
        .setDescription("Find a full list of commands here! *Please note some commands require certain permissions to work*")
        .setColor("#09FF00")
        .addField("**!oa #channel <message>**", "Announces a message in a channel")
        .addField("**!oc**", "View Owner Commands")
        .addField("**!eval**", "evaluate javascript code")
        .addField("**!sc**", "view server count")
        .addField("**!smite @user**", "smite a person lol")
        .addField("**!onick**", "set a nickname")
        .setFooter("CTModeration");



    if (message.author.id === "267388385159675904") {
        message.reply(" check DMs!")
        message.author.send(commandEmbed)
    }
}