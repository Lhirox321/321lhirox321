exports.run = (client, message, args) => {
    message.channel.send("**Psst. Yakıyorum.**").then(async msg => {
                    setTimeout(() => {
            message.react('💨');
        }, 1000);
          setTimeout(() => {
            message.react('🔥 💨 ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🔥');
        }, 1800);
        setTimeout(() => {
            msg.edit('💨 🔥 ');
        }, 2300);
        setTimeout(() => {
            msg.edit('💨 🔥 💨 🔥 ');
        }, 2800);
        setTimeout(() => {
            msg.edit('💨 🔥 💨 🔥 💨 🔥 💨 ');
        }, 3300);
        setTimeout(() => {
            msg.edit('💨 🔥 💨 🔥 💨 ');
        }, 3800);
        setTimeout(() => {
            msg.edit('💨 🔥 💨 ');
        }, 4300);
        setTimeout(() => {
            msg.edit('💨 ');
        }, 4800);
    setTimeout(() => {
            msg.edit('**Sigara bitti** Not: Sigara sağlığa zararlıdır. Lütfen sigara içmeyiniz!');
        }, 5300);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara iÃƒÂ§ersiniz.',
  usage: 'sigara'
};