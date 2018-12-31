const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const api = 'sadasdasd';


module.exports = client => {
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    client.user.setStatus("online");
    var Games = [

        "》 /Yardım  《",
        `》  ≪ +уαя∂ιм ≫ ${client.users.size} кυℓℓαηıcı, ${client.guilds.size} ѕυηυcυ ≪ /уαя∂ιм ≫  《`,
        "》  Lhirox Bot İle Karşınızdayız! Botumuz Yeni Yardımlarınızı Bekliyorum 《",
        "》 /уαя∂ιм | " + client.guilds.size + " ѕυηυcυ " + client.users.size + " кυℓℓαηıcı'уα нιzмєт νєяιуσяυz! 《",

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/awarereis");
        }, 2 * 2500);

};