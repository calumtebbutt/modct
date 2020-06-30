const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "smite",
    aliases: []
}


module.exports.run = async (client, message, args) => {


    const ownerID = ["267388385159675904", "143042059526340610"]

    if (ownerID.includes(message.author.id)) {


        let smited = message.mentions.members.first();
        let smitedperson = smited.user.username
        let smiter = message.author.username

        const smiteEmbed = new MessageEmbed()
            .setTitle("Smite!")
            .setColor("#b5faff")
            .setDescription(`🌩 ${smitedperson} just got smited by ${smiter}! 🌩`);

        message.channel.send(smiteEmbed)

    } else {
        message.reply(" you do not have permission to use this command.")
    }

}
