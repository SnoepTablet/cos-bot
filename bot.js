const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function() {

  console.log("De WolfTopia is klaar voor gebruik!");

});

bot.on("message", function(message) {

  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith("!")) return;

  var args = message.content.substring("!".length).split(" ");

  switch (args[0].toLowerCase()) {

    case "ip":
      message.channel.send("Hallo " + user + "! Het IP van de server is: /n/**WolfTopia.g-s.nu");
      break;
    default:
      message.channel.sendMessage("Sorry, Dit command kennen wij niet.."); 
  }

});

bot.login(process.env.BOT_TOKEN);
