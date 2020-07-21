const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "unmute",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.reply(
            " you do not have permission to unmute anyone."
        );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
    }


    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!user) {
        return message.reply(
            " please mention the member to who you want to unmute"
        );
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")


    if (user.roles.cache.has(muterole)) {
        return message.reply(" user has not been muted.")
    }


    user.roles.remove(muterole)

    await message.reply(`**${message.mentions.users.first().username}** has been unmuted`)

    user.send(`You are now unmuted from **${message.guild.name}**`)


  const unmuteembed = new MessageEmbed()
  .setTitle("**User Unmuted**")
  .setColor("#ff9900")
  .addField("User:", `${message.mentions.members.first() || message.guild.members.cache.get(args[0])}`)
  .addField("Unmuted by:", `${message.author.tag}`)
  .setTimestamp()
  .setFooter("CTModeration");


  let unmutelog = message.guild.channels.cache.find(c => c.name === "chat-logs")
  if (!unmutelog) return;

  unmutelog.send(unmuteembed);
}
