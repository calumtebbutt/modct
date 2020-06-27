const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ban",
    aliases: []
}

module.exports.run = async (bot, message, args) => {


    var kickEmbed = new MessageEmbed()
    .setDescription("Ban")
    .setColor("#ee0000")
    .addField("Banned by", message.author);


    if (message.member.hasPermission("BAN_MEMBERS")) {

        if (!message.mentions.users.size) {
            return message.reply('You must specify a user.');
        }

        else {

            let member = message.mentions.members.first();
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

            }


        }

    }

    else {
        message.channel.send("You do not have permission to use kick.");
        return;
    }

}
