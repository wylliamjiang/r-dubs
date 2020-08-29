# r-dubs
Discord bot for personal friend channels to format RWS scores from 10-mans

## Prerequisites
* Install [Node.js](https://nodejs.org/en/)
* Install [Discord.js library](https://discord.js.org/#/docs/main/stable/general/welcome)
  * `npm install discord.js`

## Local Testing
### Discord App Set Up
* Create an "application" on Discord
  * Head to discordapp.com/developers/applications/me
  * Hit _New Application_
  * Go to the __Bot__ tab and click _Add Bot_
* Get the bot's authorization token
  * Add a new file titled `auth.json` 
```
{
	"token": "PASTE_AUTH_TOKEN_HERE"
}
```
* Add the bot to your server
  * Go back to the _General Information_ section of your bot/application
  * Copy the _Client ID_ into this URL in place of the `CLIENTID` placeholder
```
https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8
```
* Running the bot
  * Once the bot has been added to a server, run the following command from within the repository
```
node bot.js
```