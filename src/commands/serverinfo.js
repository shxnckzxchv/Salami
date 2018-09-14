const Discord = require("discord.js");

var test = [
    0x6600ff, // 1
    0xFF0000, // 2
    0x00ff00, // 3
    0xffffff, // 4
    0x4286f4, // 5
    0xf45642, // 6
    0x262525, // 7
    0xe2d626, // 8
    0x87e226, // 9
    0x26e2c0, // 10
    0x2633e2, // 11
    0x8126e2, // 12
    0x2370ba, // 13
    0x643e85, // 14
    0xeb12d5, // 15
    0xf00139, // 16
    0xaf2f2b, // 17
    0xd0c8aa, // 18
    0x2107db, // 19
    0x68b3a4, // 20
    0x70e3a8, // 21
    0xd3b938, // 22
    0x962f7c, // 23
    0xc7f4ba, // 24
    0xedeebc, // 25
    0x609eb4 // 26
];

module.exports.run = async (bot, msg, args) => {
    let guild = msg.guild
    let ServerInfo = new Discord.RichEmbed()

    .setAuthor(guild.name, guild.iconURL)
    .setColor(test[Math.floor(Math.random() * test.length)])
    .setThumbnail(guild.iconURL)
    .addField('Owner', guild.owner.user.username + '#' + guild.owner.user.discriminator)
    .addField('ID', guild.id)
    .addField('Region', guild.region)
    .addField('Members', guild.memberCount)
    .setFooter('Created: ' + guild.createdAt)
    return msg.channel.send(ServerInfo);
}

module.exports.help = {
    name: "serverinfo"
}