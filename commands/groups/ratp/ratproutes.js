const { Client, Collection, MessageEmbed, Guild } = require('discord.js');

module.exports.config = {
    name: "ratproutes",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    
    if(message.guild.id === '693509227343249418'){
    const ratproutesEmbed = new MessageEmbed()
    .setTitle("RATP Dev London - L&E V3 Routes")
    .setDescription("58 Walthamstow Central to Wanstead Park\n69 Walthamstow Central to Stratford\n97 Chingford to Stratford City [[FULL ROUTE]]\n158 Chingford Mount to Stratford [[FULL ROUTE]]\n212 Chingford to St.James Street [[FULL ROUTE]]\n215 Lea Valley Campsite to Walthamstow Central [[FULL ROUTE]]\n257 Walthamstow Central to Stratford [[FULL ROUTE]]\n357 Chingford Hatch to Whipps Cross (Hospital ~ Sundays only) [[FULL ROUTE]]\n339 Leytonstone to Stratford City\nW11 Chingford Hall Estate to Walthamstow Central [[FULL ROUTE]]\nW15 Higham Hill, Cogan Avenue to Lea Interchange Bus Garage\nW16 Chingford Mount to Leytonstone Station [[FULL ROUTE]]\nW19 Walthamstow, Argall Avenue/St.James Street to Leytonstone Plaza\nN26 Chingford Station/Walthamstow Central to Lea Interchange Bus Garage\n\n*Extensions possible after the release of the first part of this sim*")
    .setColor("#24bfab")

    .setFooter("CTModeration - RATP Dev London");

    message.author.send(ratproutesEmbed)
    } else {
        return;
    }


}