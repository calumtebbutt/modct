const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "joinyoutube",
    aliases: []
}

module.exports.run = async (client, message, args) => {


    if (message.guild.id === '693509227343249418') {

        let youtube = message.guild.roles.cache.get('783061666081275981')

        const member = message.member


        if (!youtube) {
            member.roles.add(youtube)
            message.reply(' added role **YouTube**.')
        }

    }

}

