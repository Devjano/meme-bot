const express = require("express");
const app = express();

app.listen(() => console.log("server"));

app.use("/ping", (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require("ytdl-core");

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [`fhelp`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

/////////////////

////////////////////
client.on("message", message => {
  if (message.content.startsWith( "fhelp")) {
    var embed = new Discord.MessageEmbed().setColor(`#000000`).setDescription(`
      **Help Comand** 
> \`f1\`

> [\`invite bot\`](https://discord.com/api/oauth2/authorize?client_id=867208359337394194&permissions=8&scope=bot)  [\`Support\`](https://discord.gg/dTNKbPXw9Y)

    `);
    
    return message.channel.send(embed);
  }
});

/////////////////



var servers = {};

var f1 = "f1";



function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.play(
    yt(server.queue[0], { fliter: "audionly" })
  );

  server.queue.shift();

  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}
client.on("ready", () => {
  console.log(`funny bot ${client.guilds.size} servers `);
});

client.on("message", async message => {
  if (message.content === f1) {
    message.react("🔊");
    message.reply(`hhh mdm`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــە
**`);
    }
    voiceChannel.join().then(connnection => {
      let stream = yt("", { audioonly: true });
      const dispatcher = connnection.play(stream);
    });
  }




  if (message.content === "fstop") {
    var servers = {};

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

  }

  if (message.content === "fstop") {
    message.channel.send(` farhad zirak | Thanks You`)
  }
})


client.login("");
