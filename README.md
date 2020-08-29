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

## Possible Improvements
Currently using the [Discord.js](https://discord.js.org/#/) API and specifically the [Embeds](https://discordjs.guide/popular-topics/embeds.html) objects to generate the tables. Unfortunately there is a limitation on the number of fields (25) and also mobile support is not ideal as it lists all the information vertically. 

One possible solution is generating ascii tables dynamically to respond to the output values.
* Idea from [reddit](https://www.reddit.com/r/discordapp/comments/5dqsml/how_do_markdown_tables_work/)
* Github pointer to [user generated support class](https://github.com/ekgame/storasbot/blob/master/src/main/java/lt/ekgame/storasbot/utils/TableRenderer.java)