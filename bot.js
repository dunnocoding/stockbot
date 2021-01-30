require('dotenv').config();
let Discord = require('discord.js');
let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');
let bot = new Discord.Client();
//let polltime = 300000;
//let timer;

bot.on('ready', function() {
    console.log(`Logged in as ${bot.user.username} at ${new Date().toLocaleString()}`);
    bot.user.setPresence({
        activity: {
            name: '$toink$', type: 'COMPETING',
        },
        status: 'online',
    });
    setInterval(scrape, polltime=60000, {});
});

bot.on('message', function(message) {
    if(message.author.bot && !message.content.match(new RegExp(`^(<@(|!)${bot.user.id}+>)`,'g'))) return;
    switch(arg=message.content.split(' ')[1]) {
        case 'track':
            scrape({channel: message.channel}); break;
        case 'ua': case 'header':
            scrape({channel: message.channel, ua: arg});
            /*message.reply('UA changed!');*/ break;
	default:
	    message.reply(`mention me with \`track\` to get the StockPrice of GME in chat, or \`ua\` search using another User-Agent, do this if I dont show as online`).then(msg => msg.delete({timeout: 30000}));
    }
});
bot.on('ratelimit', function(info) {
    bot.user.setPresence({
        activity: {
            name: 'Bonkers, We\'ve hit a ratelimit!!!', type: 'LISTENING',
        },
        status: 'idle',
    });
    console.log(`Timeout:${info.timeout}	| Limit: ${ info.limit} | Method: ${info.method} | Path: ${info.path} | Route: ${info.route}`);
});
bot.login(process.env.TOKEN);

function scrape({
    channel,
    ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'}){
    axios.get('https://finance.google.com/finance/?q=GME',{ headers: {'User-Agent': ua }})
    .then(function (res) { 
        let $ = cheerio.load(res.data);
        priceGME = $('span[jsname=vWLAgc]').first().text();
        subtitle = $('div[data-attrid=subtitle]').text().split(':');
        
        if(channel) {
            channel.guild.members.cache.get(bot.user.id).setNickname(`[${subtitle.join(']')}: ${priceGME}`).catch(err => channel.send(`If you cant see my name update it's because of ${err.message}`));
            return channel.send(`[${subtitle.join(']')}: ${priceGME}`);
        }
        bot.guilds.cache.each(guild => guild.members.cache.get(bot.user.id).setNickname(`[${subtitle.join(']')}: ${priceGME}`));
    }).catch(err =>{
        bot.user.setPresence({
            activity: {
                name: err.message ,type: 'WATCHING',
            },
            status: 'dnd',
        });
        console.log(err.message);
    });
    }
    
