# Stock Bot
Stock Bot gives you the ability to quickly check a stock value from ~~any~~ available stock market globally, directly ~~from~~ on Discord.
> Stock Bot currently only works on *depends*
## Installation
### Create a Discord App
- Create a Discord account
- Go to https://discordapp.com/developers/applications/me/create to create a new discord app
- Once your app is created click on **Create a Bot User**
- Invite your bot to your discord server
### Run the install
```
git clone https://github.com/aidanwardman/Stock-Bot
cd Stock-Bot
npm install requirements.txt
```
### Configure the bot
> Better advised to use environment variables while hosting online
- Create a file called **credentials.json** with the following structure
```
{
	"token":"ABCDEFG"
}
``` 
- Replace **ABCDEFG** with your discord **App Bot User Token**
## Running
```
node bot.json
```
## Usage
*automated*
