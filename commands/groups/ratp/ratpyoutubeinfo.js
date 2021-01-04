
const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratpyoutubeinfo",
    aliases: []
}


module.exports.run = async (client, message, args) => {


    if (message.author.id === "267388385159675904") {

        const youtubeembed = new MessageEmbed()
            .setTitle("**YouTube**")
            .setColor("#fc0303")
            .setDescription("On joining the server, you will automatically be given the YouTube role.\nHaving this role notifies you of any uploads on the RATP Dev London ROBLOX YouTube Channel.")
            .addField("**Leave Role**", "If you do not wish to receive notifications of new uploads, please run the **!leaverole** command in #bot-commands")
            .setFooter("CTModeration");

        let infochan = message.guild.channels.cache.find(c => c.name === "information")

        infochan.send(youtubeembed);

    }}
