const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "kick",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    let kickmember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let kickEmbed = new MessageEmbed()
    .setTitle("**User Kicked**")
    .setColor("#ee0000")
    .addField("User Kicked:", `${kickmember.user.username}`)
    .addField("Kicked by:", message.author)
    .setTimestamp()
    .setFooter("CTModeration");


    if (message.member.hasPermission("KICK_MEMBERS")) {

        if (!message.mentions.users.size) {
            return message.reply('You must specify a user.');
        }

        else {

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            let reason = message.content.split(" ").slice(2).join(' ');

            if (member.kickable == false) {
                message.channel.send("That user cannot be kicked!");
                return;
            }

            else {


                if (reason == ``) {
                    reason = (`No reason provided.`)
                }


                await member.send(`You have been kicked from **${message.guild.name}** with the reason: **${reason}**`)
                    .catch(err => message.channel.send(`⚠ Unable to contact **${member}**.`));

                await member.kick(reason)
                await message.channel.send(`👋 ${member} Reason: ${reason}`);


                console.log(`${message.author.tag} kicked ${member.user.tag} from '${message.guild.name}' with the reason: '${reason}'.`);


                let kickLog = message.guild.channels.cache.find(c => c.name === "chat-logs")
                if (!kickLog) return;

                kickLog.send(kickEmbed);

            }


        }

    }

    else {
        message.channel.send("You do not have permission to use kick.");
        return;
    }

}
