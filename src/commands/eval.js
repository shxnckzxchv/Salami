module.exports.run = async (bot, msg, args) => {

    if (msg.author.id === "263399048436776961") 
    if (msg.content.substr(0, 6)) {
        try {
            var noobcakeyum = eval(msg.content.substr(7, msg.content.length));
            if (noobcakeyum !== undefined)
            msg.reply(noobcakeyum.toString());
        }
        catch (err) {
            msg.reply(err.toString());
        }
    }

}

module.exports.help = {
    name: "eval"
}
