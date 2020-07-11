const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "pilotapp",
    aliases: []
}

module.exports.run = async (client, message, args) => {

    if (message.guild.id === "720999183905063012") {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            let supmember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
            if(!supmember){
                message.reply(", please mention a user.")
            }

            let announcementchannel = message.guild.channels.cache.find(c => c.name === "team-chat")
            if (!announcementchannel) return;
            message.delete();

            announcementchannel.send(`${supmember}, Hello. I am glad to say you have passed your application and have been entered into the training program. If you didn't already know the training program lasts 4 weeks where you will be constantly evaluated. From the performance and ability we see in the trainings you attend, it will determine your full place on the team.`);
        } else message.reply(", you do not have permission to use this command.")
    } else return;
}
