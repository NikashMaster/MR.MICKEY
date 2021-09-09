const MARAYA = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

MARAYA.addCommand({pattern: 'help', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/ab4ea320d7979c2ce1734.gif";
    r_text[1] = "https://telegra.ph/file/ab4ea320d7979c2ce1734.gif";
    r_text[2] = "https://telegra.ph/file/ab4ea320d7979c2ce1734.gif";
    r_text[3] = "https://telegra.ph/file/ab4ea320d7979c2ce1734.gif";
    r_text[4] = "https://telegra.ph/file/ab4ea320d7979c2ce1734.gif";
    r_text[5] = "https://telegra.ph/file/ab4ea320d7979c2ce1734.gif";
    
    var i = Math.floor(5*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `✅══════💕MR.miccy LK══════✅
      *MR.Miccy  Public  BOT*
     𝐈 𝐚𝐦 𝐚 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 user 𝐛𝐨𝐭.
    ╔════════════════════════════════
    ┇─
    ║⚛ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ⚛
    ┇
    ╭🈯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .song <text>
    ╰💫𝙐𝙨𝙚➜ Downloads song for you.
    ┇
    ╭🈯 විධානය➜ .video <yt link>
    ╰💫𝙐𝙨𝙚➜ Downloads video from YouTube link.
    ┇
    ╭🈯 විධානය➜ .profinsta<username>
    ╰💫𝙐𝙨𝙚➜ Shows the ig profile of the person.
    ┇
    ╭🈯 විධානය➜  .insta <link>
    ╰💫𝙐𝙨𝙚➜   Downloads content from instagram.
    ┇
    ╭🈯 විධානය➜  .yt<text>
    ╰💫𝙐𝙨𝙚➜   Gives you YT links.
    ┇
    ╭🈯 විධානය➜  .show <show name>
    ╰💫𝙐𝙨𝙚➜   Get info related to tv series and shows.
    ┇
    ╭🈯 විධානය➜ .gif 
    ╰💫𝙐𝙨𝙚➜ Converts video to gif.
    ┇
    ╭🈯 විධානය➜ .tomp3 
    ╰💫𝙐𝙨𝙚➜ Converts video into audio.
    ┇
    ╭🈯 විධානය➜ .tts <text>
    ╰💫𝙐𝙨𝙚➜ Converts text into voice.
    ┇
    ╭🈯 විධානය➜ .img <text>
    ╰💫𝙐𝙨𝙚➜ It sends image from google.
    ┇
    ╭🈯 විධානය➜ .trt <language code>
    ╰💫𝙐𝙨𝙚➜ Translate the text you tag.
    ┇
    ╭🈯 විධානය➜ .wiki <text>
    ╰💫𝙐𝙨𝙚➜ It sends Wikipedia result.
    ┇
    ╭🈯 විධානය➜ .lyric <text>
    ╰💫𝙐𝙨𝙚➜ Finds the lyrics of the song.
    ┇
    ╭🈯 විධානය➜ .covid <country code>
    ╰💫𝙐𝙨𝙚➜ Send the covid stats of your country.
    ┇
    ╭🈯 විධානය➜ .weather <city>
    ╰💫𝙐𝙨𝙚➜ Tells you about the weather of your place.
    ┇
    ╭🈯 විධානය➜ .removebg 
    ╰💫𝙐𝙨𝙚➜ Removes the background of tge image.
    ┇
    ╭🈯 විධානය➜ .ocr
    ╰💫𝙐𝙨𝙚➜ Finds the text written on the image.
    ┇
    ╭🈯 විධානය➜ .wallpaper
    ╰💫𝙐𝙨𝙚➜ It sends you random wallpaper.
    ┇
    ╠════════════════════════════════
    ┇─
    ║⚛ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ⚛
    ┇
    ╭🈯 විධානය➜ .joke 
    ╰💫𝙐𝙨𝙚➜ It sends a random joke.
    ┇
    ╭🈯 විධානය➜ .meme <text>
    ╰💫𝙐𝙨𝙚➜ Cations the image into a meme.
    ┇
    ╭🈯 විධානය➜ .quote 
    ╰💫𝙐𝙨𝙚➜ It sends a random quote.
    ┇
    ╭🈯 විධානය➜ .ss <website link>
    ╰💫𝙐𝙨𝙚➜ It sends the screenshot of the website.
    ┇
    ╭🈯 විධානය➜ .changesay <text>
    ╰💫𝙐𝙨𝙚➜ Converts text into changesay meme image.
    ┇
    ╭🈯 විධානය➜ .trumpsay
    ╰💫𝙐𝙨𝙚➜ Convert text into Trump's tweet.
    ┇
    ╭🈯 විධානය➜ .compliment 
    ╰💫𝙐𝙨𝙚➜ Gives you a compliment.
    ┇
    ╭🈯 විධානය➜  .bitly <link>
    ╰💫𝙐𝙨𝙚➜   Shorten your link.
    ┇
    ╭🈯 විධානය➜  .dict 
    ╰💫𝙐𝙨𝙚➜   Dictionary [.dict en;anime]
    ┇
    ╭🈯 විධානය➜  .zodiac <leo> 
    ╰💫𝙐𝙨𝙚➜   Tells you about your horoscope.
    ┇
    ╭🈯 විධානය➜  .qr <text>
    ╰💫𝙐𝙨𝙚➜   Converts text into qr code.
    ┇
    ╭🈯 විධානය➜  .movie 
    ╰💫𝙐𝙨𝙚➜  Gives you info about movie.
    ┇
    ╭🈯 විධානය➜  .anime <text>
    ╰💫𝙐𝙨𝙚➜  Gives you info about anime.
    ┇
    ╠════════════════════════════════
    ┇─
    ┇⚛ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ⚛
    ┇
    ╭🈯 විධානය➜ .sticker 
    ╰💫𝙐𝙨𝙚➜ Converts img/gif into a sticker.
    ┇
    ╭🈯 විධානය➜ .stk 
    ╰💫𝙐𝙨𝙚➜ Converts img/gif into a square sticker.
    ┇
    ╭🈯 විධානය➜ .imagesticker 
    ╰💫𝙐𝙨𝙚➜ Converts sticker into image.
    ┇
    ╭🈯 විධානය➜ .attp <text>
    ╰💫𝙐𝙨𝙚➜ Converts text into glowing sticker.
    ┇
    ╚═════════════════════════════════

`}) 

}));