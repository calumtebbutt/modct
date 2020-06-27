const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "purge",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if (message.member.hasPermission("MANAGE_MESSAGES")) {

        const amount = args.join(' ');

        if (!amount) return message.reply(" please specify an amount.");
        if (isNaN(amount)) return message.reply(" the amount isn`t a number.");

        if (amount > 1000) return message.reply(" you can`t delete more than 1000 messages at once.");
        if (amount < 1) return message.reply(" you have to delete at least 1 message.");

        await message.channel.messages.fetch({ limit: amount }).then(messages => {
            message.channel.bulkDelete(messages
            )
            message.reply(` deleted ${amount} messages!`)
        });
    } else {
        message.reply(" you do not have permission to purge.")
    }
}