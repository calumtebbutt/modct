const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ratpoperators",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    
    if(message.guild.id === '693509227343249418'){
        
    const ratpoperatorsEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - L&E V3 Operators")
    .setDescription("**RATP Dev London**\nDiscord: https://discord.gg/4CaCKa2\nGroup Link: https://www.roblox.com/groups/5841116/RATP-Dev-London#!/about\n\n**Stagecoach Group UK**\nDiscord: https://discord.gg/a4Tj8dC\nGroup Link: https://www.roblox.com/groups/4470266/SC-Stagecoach-Group-UK#!/about\n\n**Sullivan Buses**\nDiscord: https://discord.gg/pFwxJHm\nGroup Link: https://www.roblox.com/groups/4033033/Sullivanbuses#!/about\n\n**Selkent**\nDiscord: https://discord.gg/nY8yCT2\nGroup Link: https://www.roblox.com/groups/4772685/SC-Stagecoach#!/about\n\n**SunRise Coffee**\nDiscord: https://discord.gg/PMRz96u\nGroup Link: https://www.roblox.com/groups/1058031/SunRise-Coffee#!/about")
    .setColor("#24bfab")

    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratpoperatorsEmbed)
    } else {
        return;
    }


}
