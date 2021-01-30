let Discord = require('discord.js');
let request = require('request');
let cheerio = require('cheerio');
let bot = new Discord.Client();

bot.on('ready', function() {
    console.log(`Logged in as ${bot.client.username} at ${new Date().toLocaleString()}`);
});

bot.on('message', function(message) {
// 	var rxp = new RegExp(/^(asx:)[a-z0-9]{3}/i);
// 	if (rxp.test(message))
		let url = "https://finance.google.com/finance/?q=GME";
		scrape(url,message.channel);
});
bot.login(process.env.TOKEN);

function scrape(url,channel){
    request(url, function(error, response, html){
		console.log('error:', error); // Print the error if one occurred
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	    let $ = cheerio.load(response);
	    priceGME = $(span).attr('jsname','vWLAgc').text();
    }).catch(err => console.log(err);new Discord.Channel(channel.send(err)););
}
