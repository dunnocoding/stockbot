let Discord = require('discord.js');
let request = require('request');
let cheerio = require('cheerio');
var bot = new Discord.Client();

bot.on('ready', function() {
    console.log(`Logged in as ${bot.client.username} at ${new Date().toLocaleString()}`);
});

bot.on('message', function(message) {
	var rxp = new RegExp(/^(asx:)[a-z0-9]{3}/i);
	if (rxp.test(message)){
		var market = message.substr(0,3).toUpperCase();
		var code = message.substr(4,3).toUpperCase();
		var url = "https://finance.google.com/finance/getprices?p=1d&i=60&x=ASX&f=c&q="+code;
		console.log(url);
		scrape(url,message.channel,code,market);
	}
});
bot.login(process.env.TOKEN);

function scrape(url,channel,code,market){
    request(url, function(error, response, html){
		console.log('error:', error); // Print the error if one occurred
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	    let $ = cheerio.load(response);
	    priceGME = $(span).attr('jsname','vWLAgc').text();
    }).catch(err => console.log(err);new Discord.Channel(channel.send(err)););
}
