const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratprules",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    
    if(message.guild.id === '693509227343249418'){
    const ratprulesEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - Server Rules")
    .setDescription("1. No Racism\n2. No spamming\n3. No begging for ranks\n4. No inappropriate photos\n5. There are chat warnings which can be given out by Hrs+. 3 Warnings will result in a kick from the server.\n6. No Nudity / NSFW\n7. No homophobic language\n8. No advertising other groups or servers\n9. When asking questions, please ensure you check the group description or check the chat to see if your question has already been answered.\n10. No unnecessary tagging\n11. Don't ask to be accepted into the group, join requests are checked every day\n12. Executives reserve the right to issue mutes/bans without providing reasons\n\n*Failure to result in following these rules will be followed up with a consequence.*")
    .setColor("#24bfab")

    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratprulesEmbed)
    } else {
        return;
    }


}
