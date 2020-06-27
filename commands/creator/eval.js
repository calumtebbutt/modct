const { Client, Collection, MessageEmbed } = require('discord.js');
const { inspect } = require("util");

module.exports.config = {
    name: "eval",
    aliases: []
}


module.exports.run = async (client, message, args) => {
    ownerID = ('267388385159675904')

    const clean = ("");

    if (message.author.id !== ownerID) return;
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
    }


}
