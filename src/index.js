const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client({disableEveryone: true});
const fs = require('fs');

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, cmds) => {
    if (err) console.log(err);

    let jsfile = cmds.filter(f => f.split('.').pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find any bot commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let bfiles = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(bfiles.help.name, bfiles);
    });

});


bot.on('ready', () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("https://noobhax.club");
});

bot.on('message', msg => {
    if (msg.content == 'hello') {
        msg.channel.send("hello <\@" + msg.author.id + ">");
    }
});

bot.on('message', async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === 'dm') return;

    let prefix = config.prefix
    let msgArray = msg.content.toLowerCase().split(' ');
    let cmd = msgArray[0]
    let args = msgArray.slice(1)
    let cmdfile = bot.commands.get(cmd.slice(prefix.length));
    if (cmdfile) cmdfile.run(bot, msg, args);

});

bot.login(config.TOKEN);