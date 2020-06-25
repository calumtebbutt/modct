const { Client, Collection, MessageEmbed, CategoryChannel } = require('discord.js');

module.exports.config = {
    name: "welcome",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    const newUsers = [];

    client.on("guildMemberAdd", (member) => {
        const guild = member.guild;
        if (!newUsers[guild.id]) newUsers[guild.id] = new Collection();
        newUsers[guild.id].set(member.id, member.user);

        if (newUsers[guild.id].size > 1) {
            const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
            guild.channels.find(channel => channel.name === "general").send("Welcome our new users to the server!\n" + userlist);
            newUsers[guild.id].clear();
        }
    });
    client.on("guildMemberRemove", (member) => {
        const guild = member.guild;
        if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
    });
}