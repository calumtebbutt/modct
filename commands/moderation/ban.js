const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ban",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    let banmember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let banEmbed = new MessageEmbed()
    .setTitle("**User Banned**")
    .setColor("#ee0000")
    .addField("User Banned:", `${banmember.user.username}`)
    .addField("Banned by:", message.author)
    .setTimestamp()
    .setFooter("CTModeration");


    if (message.member.hasPermission("BAN_MEMBERS")) {

        if (!message.mentions.users.size) {
            return message.reply('You must specify a user.');
        }

        else {

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            let reason = message.content.split(" ").slice(2).join(' ');

            if (member.bannable == false) {
                message.channel.send("That user cannot be banned!");
                return;
            }

            else {


                if (reason == ``) {
                    reason = (`No reason provided.`)
                }


                await member.send(`You have been banned from **${message.guild.name}** with the reason: **${reason}**`)
                    .catch(err => message.channel.send(`⚠ Unable to contact **${member}**.`));

                await member.ban(reason)
                await message.channel.send(`👋 ${member} Reason: ${reason}`);


                console.log(`${message.author.tag} banned ${member.user.tag} from '${message.guild.name}' with the reason: '${reason}'.`);


                let banLog = message.guild.channels.cache.find(c => c.name === "chat-logs")
                if (!banLog) return;

                banLog.send(kickEmbed);

            }


        }

    }

    else {
        message.channel.send("You do not have permission to use kick.");
        return;
    }

}
