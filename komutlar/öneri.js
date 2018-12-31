const Discord = require('discord.js');


exports.run = function(client, message, args) {

    var öneri = args.slice(0).join(' ');
    var guildID = "511879984093331456";
    var channelID = "514169470873239578";
    
    if (!öneri){
        return message.reply("Bir mesaj belirtin! Doğru kullanım: **!!bot-ekle <bot ID>**");
    } else {
        
        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .addField("Eylem:", "Öneri")
            .addField("Kullanıcı:", message.author.tag)
            .addField("ID", message.author.id)
            .addField("ID", öneri)
        
        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("Mesajınız alınmıştır.Botunuzu test edip sunucuya ekleyeceğiz..");
    };


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'bot-ekle', 
  description: "Bot hakkındaki önerilerinizi bot sahibine ulaştırır.", 
  usage: 'bot-ekle <bot ıd>' 
};