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

    let totalsecs = bot.uptime
    let ttlsecs = totalsecs / 1000
    let hrs = Math.floor(ttlsecs / 3600)
    ttlsecs %= 3600
    let mins = Math.floor(ttlsecs / 60)
    let seconds = ttlsecs % 60   

    var n = 0; for (var i = 0; i < bot.guilds.array().length; ++i) n+=bot.guilds.array()[i].memberCount;

    let Info = new Discord.RichEmbed()

    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setThumbnail(bot.user.avatarURL)
    .addField('Version', '1.4.38', true)
    .addField('Library', 'discord.js', true)
    .addField('ID', '382632424825421844', true)
    .addField('Users', n, true)
    .addField('Developer', 'salmon#0750', true)
    .addField('Servers', bot.guilds.array().length, true)
    .addField('Uptime', hrs + ' hours ' + mins + ' minutes and ' + Math.round(seconds) + ' seconds')
    .setThumbnail(bot.user.avatarURL)
    .setColor(test[Math.floor(Math.random() * test.length)])
    .setFooter('Created: ' + bot.user.createdAt)
    return msg.channel.send(Info);
}

module.exports.help = {
    name: "info"
}