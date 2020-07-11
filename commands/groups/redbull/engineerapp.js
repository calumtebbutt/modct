const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "engineerapp",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if(message.guild.id === "720999183905063012"){
        let supmember = message.mentions.members.first()



    let announcementchannel = message.guild.channels.cache.find(c => c.name === "team-chat")
    if (!announcementchannel) return;

    announcementchannel.send(`${supmember}, Hello. I am glad to announce that you have passed your application to become an engineer and have been entered into the training program. If you didn't already know the training program lasts 4 weeks where you'll be constantly evaluated. From the performance and ability we see in the trainings you attend, it will determine your full place on the team.`);

    } else return;
}
