const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "leaveyoutube",
    aliases: []
}

module.exports.run = async (client, message, args) => {


    if (message.guild.id === '693509227343249418') {

        let youtube = message.guild.roles.cache.get('783061666081275981')

        const member = message.member


        if (youtube) {
            member.roles.remove(youtube)
            message.reply(' removed role **YouTube**.')
        }


        if (!youtube) {
            message.reply(' you do not have that role.')
        }


    }

}
