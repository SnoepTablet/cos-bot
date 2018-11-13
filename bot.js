const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function() {

  console.log("De Testbot is klaar voor gebruik!");

});

bot.on("message", function(message) {

  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith("!")) return;

  var args = message.content.substring("!".length).split(" ");

  switch (args[0].toLowerCase()) {

    case "ip":
      message.channel.send("Hallo " + user + "! Het IP van de server is: /n/**WolfTopia.g-s.nu");
      break;
    case "info":
      message.channel.send("Hallo " + user + "!/n/Wat leuk dat jij bent geïnteresseerd in onze informatie!/n//n/**__Wolfs Legacy__**");
      var infoembed = new Discord.RichEmbed()
         .setColor("#15f153")
         .addField("**Opgericht op:", message.guild.createdAt)
         .addField("*Eigenaar:**", "@wolf");
      return message.channel.send(infoembed)
      break;
    default:
      message.channel.sendMessage("Sorry, Dit command kennen wij niet.."); 
  }

});

bot.login(process.env.BOT_TOKEN);
