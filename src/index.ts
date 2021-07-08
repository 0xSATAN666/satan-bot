import discord from 'discord.js';
import config from './config';
import initDb from './db';

const bot = new discord.Client();

bot.once("ready", async () => {
  console.log("Connected to discord's servers");
  await bot.user.setStatus("dnd");
  const db = await initDb();
});

bot.on("message", async (msg:discord.Message) => {
  
  if (msg.content == "!ping") {

    try {

      await msg.channel.send("pong!");

    } catch (err) {

      console.error(err);

    }

  }

});

bot.login(config.token);