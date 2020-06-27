const { Client, Collection, MessageEmbed, } = require('discord.js');


module.exports.config = {
    name: "userinfo",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    const flags = {
        DISCORD_EMPLOYEE: 'Discord Employee',
        DISCORD_PARTNER: 'Discord Partner',
        BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
        BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
        HYPESQUAD_EVENTS: 'HypeSquad Events',
        HOUSE_BRAVERY: 'House of Bravery',
        HOUSE_BRILLIANCE: 'House of Brilliance',
        HOUSE_BALANCE: 'House of Balance',
        EARLY_SUPPORTER: 'Early Supporter',
        TEAM_USER: 'Team User',
        SYSTEM: 'System',
        VERIFIED_BOT: 'Verified Bot',
        VERIFIED_DEVELOPER: 'Verified Bot Developer'
    };





    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let ment = message.mentions.users.first();
    if (!ment) {
        message.reply(' please specify a user.')
    }

    const member = message.mentions.members.first();
    const userFlags = member.user.flags.toArray();

    const embed = new MessageEmbed()
        .setColor("#15f153")
        .setTitle(`**UserInfo** for ${member.user.username} - ${member.id}`)
        .addField("**Discord Username**", ment.tag)
        .addField("**UserID**", ment.id)
        .addField("**Current Status**", ment.presence.status)
        .addField("**Account Created**", ment.createdAt)
        .addField("**Server Join Date**", rMember.joinedAt)
        .addField("**Flags**", `${userFlags.length ? userFlags.map(flag => flags[flag]).join(", ") : 'None'}`)
        .setThumbnail(ment.avatarURL)

    message.channel.send(embed)

}
