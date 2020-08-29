const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.substring(0, 5) == '!rws ') {
        var args = msg.content.substring(5).split(' ');
        var cmd = args[0];

        var res = process_raw_rws_string(msg.content.substring(5));

        // creating the embed object
        var embedded_message = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('RWS')
            .setTimestamp();

        // iterating over list of returned processed string values
        for (var i = 0; i < res["usernames"].length; i++) {
            // due to limitations on discord.js api for embed objects (limit 25 objects)
            // need to check if 8 rows have been created and if so start new embed object.
            if (i != 0 && i % 8 == 0) {
                msg.channel.send(embedded_message);
                embedded_message = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('RWS')
                    .setTimestamp();
            }
            embedded_message.addField('User', res["usernames"][i], true);
            embedded_message.addField('RWS', res["rws"][i], true);
            embedded_message.addField('Rounds Played', res["roundsplayed"][i], true);
        }

        msg.channel.send(embedded_message);
        // deleting user command message for channel cleanliness
        msg.delete({timeout: 1000})
            .then(msg => console.log(`Deleted message from ${msg.author.username} after 1 second.`));
    }
});

client.login(auth.token);

// HELPER FUNCTIONS
function process_raw_rws_string(raw_rws_string) {
    // Removing <> bracketed texts from raw RWS string
    const re = /<.*?>/g;
    var bracket_removed_string = raw_rws_string.replace(re, "");

    // Splitting bracket_removed_string to just usernames, RWS values, and rounds played values
    var split_string = bracket_removed_string.split(/has RWS=|\n|roundsplayed=|,/);
    // Removing extra white space values.
    var processed_values = [];
    for (var i = 0, j = 0; i < split_string.length; i++) {
        // Basically checking if the current string is not only white space characters.
        if (split_string[i] && split_string[i].trim()) {
            processed_values[j] = split_string[i];
            j += 1;
        }
    }

    // Populating individual arrays to be returned
    let usernames = [];
    let rws = [];
    let roundsplayed = [];

    for (var i = 0; i < processed_values.length; i++) {
        if (i % 3 == 0) {
            usernames.push(processed_values[i]);
        } else if (i % 3 == 1) {
            rws.push(processed_values[i]);
        } else {
            roundsplayed.push(processed_values[i]);
        }
    }

    return {"usernames": usernames, "rws": rws, "roundsplayed": roundsplayed};
}
    