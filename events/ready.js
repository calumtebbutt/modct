const Discord = require("discord.js")


module.exports = client => {
     console.log(`${client.user.username} is online`)
    // client.user.setActivity("Hello", {type: "WATCHING", url:"!invite"});

    let statuses = [
        `${client.guilds.size} servers!`,
        "!help",
        `over ${client.users.size} users!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

}