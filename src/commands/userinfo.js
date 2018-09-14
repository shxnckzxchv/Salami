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
    var str = "";    
    let UserInfo = new Discord.RichEmbed()

    .setAuthor(msg.author.tag, msg.author.avatarURL)
    .setColor(test[Math.floor(Math.random() * test.length)])
    .setThumbnail(msg.author.avatarURL)
    .addField('ID', msg.author.id, true)
    .addField('Nickname', msg.member.displayName, true)
    .addField('Status', msg.author.presence.status, true)
    .addField('Playing', msg.member.presence.playing, true)
    .addField('Mention', '<\@' + msg.author.id + '>')
    .addField('Joined', msg.guild.joinedAt)
    .addField('Roles', msg.author.roles)
    .setFooter('Created: ' + msg.author.createdAt)
    return msg.channel.send(UserInfo);


}

module.exports.help = {
    name: "userinfo"
}