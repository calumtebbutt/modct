const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ping",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("Pinging...");
    m.edit(`:ping_pong: Pong!\n**Latency** is ${m.createdTimestamp - message.createdTimestamp}ms.\n**API Latency** is ${Math.round(message.client.ping)}ms`);
}