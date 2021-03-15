# Stock Bot
Stock Bot to check stocks, directly on Discord.
> Stock Bot currently only works on *depends*
## Installation
### Create a Discord App
- Create a Discord account
- Go to https://discordapp.com/developers/applications/me/create to create a new discord app
- Once your app is created click on **Create a Bot User**
- Invite your bot to your discord server
### Run the install
```
git clone https://github.com/christusdsouza/stockbot
cd stockbot
npm install
```
### Configure the bot
> Better advised to use SECRET environment variables while hosting online
- Create a file called **.env** with the following structure
```
# file: .env
TOKEN=some.token-by.Discord
``` 
## Running
```
node bot.js
```
## Usage
*automated* 
Use @mention track - to get the StockPrice in chat | @mention ua - to set the User-Agent
*works only for NYSE right now
