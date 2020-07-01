const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "commands",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    const commandEmbed = new MessageEmbed()
    .setTitle("CTMod Commands")
    .setDescription("Find a full list of commands here! *Please note some commands require certain permissions to work*")
    .setColor("#09FF00")
    .addField("!announce #channel <message>", "Announces a message in a channel")
    .addField("!ban @user <reason>", "Bans the mentioned user")
    .addField("!kick @user <reason>", "Kicks the mentioned user")
    .addField("!mute @user <reason>", "Mutes the mentioned user")
    .addField("!unmute @user", "Unmutes the mentioned user")
    .addField("!nickname @user <name>", "Changes mentioned user's nickname")
    .addField("!purge <number>", "Bulk deletes specified number of messages")
    .addField("!slowmode <number>", "Sets slowmode of the channel to desired amount (seconds)")
    .addField("!botinfo", "Displays information about CTMod")
    .addField("!commands or !help", "Sends a list of commands")
    .addField("!donate", "Sends a link to donate to CTModeration")
    .addField("!invite", "Sends an invite link for CTModeration")
    .addField("!membercount", "Displays how many members are in the server")
    .addField("!ping", "Shows Latency & API Latency")
    .addField("!serverinfo", "Displays information about the server")
    .addField("!userinfo @user", "Displays information about mentioned user")
    .addField("!suggest <suggestion>", "Creates a suggestion")
    .setFooter("CTModeration");
    
    
    
   
  message.reply(" check DMs!")
  message.author.send(commandEmbed)
}
