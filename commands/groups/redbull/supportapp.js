const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "supportapp",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === "720999183905063012"){
        let supmember = message.mentions.members.first()



    let announcementchannel = message.guild.channels.cache.find(c => c.name === "team-chat")
    if (!announcementchannel) return;

    announcementchannel.send(`${supmember}, Congratulations on passing your application for the Support Team.  We expect you to be as active as the pilots and working hard.\n\nIF YOU APPLIED FOR MEDIA: Every photo you take is to be submitted in #media-submissions for inspection. Keep in mind that photos or videos MUST be 720p or higher quality; it cannot show ANY GUIs, mouse icons or usernames.`);

    } else return;
}
