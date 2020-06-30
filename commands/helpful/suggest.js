const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "suggest",
    aliases: []
}


module.exports.run = async (client, message, args) => {

    let suggestchannel = message.guild.channels.cache.find(sc => sc.name === "suggestions")
    if (!suggestchannel) return message.channel.send("Please create a 'suggestions' channel.")

    if (suggestchannel) {

        if(!args.length) return message.author.send("Suggestions must be in the format ```!suggest <suggestion>```");

        let usug = message.member.user.tag
        let sug = message.content.split(" ").slice(1).join(" ");

        const sugEmbed = new MessageEmbed()
        .setTitle(`New Suggestion - ${usug}`)
        .setDescription(`${sug}`)
        .setColor("#fc03e8")
        .setFooter("✅ = agree | ❌ = disagree");

        message.delete();
        suggestchannel.send(sugEmbed).then(async r => {
            await r.react("✅")
            await r.react("❌")
            })





    }

}
