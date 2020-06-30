const { Client, Collection, MessageEmbed } = require('discord.js');
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.config = {
    name: "warn",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(" you do not have permission to use this command.");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply(" please specify a user.");
    if(wUser.hasPermission("ADMINISTRATOR")) return message.reply(" you cannot warn this user.");
    if(user.bot) return message.reply(" you cannot warn a bot");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });


    let warnEmbed = new MessageEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#ff5e00")
    .addField("Warned User", wUser)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason)
    .setFooter("CTModeration")
    .setTimestamp();

    let warnchannel = message.guild.channels.cache.find(sc => sc.name === "warnings")
    if(!warnchannel) return message.channel.send("Channel name 'warnings' not found. Please create this channel.");
    warnchannel.send(warnEmbed)
    message.channel.send(`${wUser} has been warned.`)
    wUser.send(`You have been warned in ${message.guild.name} for ${reason}. You now have ${warns[wUser.id].warns} warnings.`)

}
