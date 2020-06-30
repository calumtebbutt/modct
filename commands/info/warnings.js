const { Client, Collection, MessageEmbed } = require('discord.js');
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.config = {
    name: "warnings",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply(" user not found.");

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };


    let warningsEmbed = new MessageEmbed()
    .setDescription("Warnings")
    .setAuthor(message.author.username)
    .setColor("#ff5e00")
    .addField("Number of Warnings", warns[wUser.id].warns)
    .setFooter("CTModeration")
    .setTimestamp();

    message.channel.send(warningsEmbed)

}
