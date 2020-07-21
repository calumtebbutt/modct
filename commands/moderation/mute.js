const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
  name: "mute",
  aliases: []
}


module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply(
      " you do not have permission to mute anyone"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.reply("I do not have permission to manage roles.");
  }

  const muteuser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if (!muteuser) {
    return message.reply(
      " please specify a user to mute."
    );
  }

  if (muteuser.id === message.author.id) {
    return message.channel.send("I am unable to mute mentioned user.");
  }

  let reason = args.slice(1).join(" ")


  if (!reason) {
    return message.reply(" please give the reason to mute the member.")
  }

  let muterole = message.guild.roles.cache.find(x => x.name === "Muted")


  if (!muterole) {
    return message.reply(" this server does not have a role with name `Muted`. Please create this role and set permissions to each channel.")
  }

  if (muteuser.roles.cache.has(muterole)) {
    return message.reply(" user is already muted.")
  }

  muteuser.roles.add(muterole)

  const muteembed = new MessageEmbed()
  .setTitle("**User Muted**")
  .setColor("#ff9900")
  .addField("User:", `${message.mentions.members.first() || message.guild.members.cache.get(args[0])}`)
  .addField("Muted by:", `${message.author.tag}`)
  .addField("Reason:", `${reason}`)
  .setTimestamp()
  .setFooter("CTModeration");


  await message.reply(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)


  let mutelog = message.guild.channels.cache.find(c => c.name === "chat-logs")
  if (!mutelog) return;

  mutelog.send(muteembed);
}
