module.exports = {
  'config': {
    'name': "owner",
    'version': "1.0",
    'author': "MAHABUB RAHMAN",
    'countDown': 0x5,
    'role': 0x0,
    'shortDescription': "admin and info",
    'longDescription': "bot owner info",
    'category': "auto ✅"
  },
  'onStart': async function () {},
  'onStart': async function ({
    event: _0x575d71,
    message: _0x3b0c92,
    getLang: _0x2dbddd,
    usersData: _0xe65319,
    threadsData: _0x31ad81
  }) {
    const _0x67d90d = await _0xe65319.get(_0x575d71.senderID);
    const _0x8f4cd = _0x67d90d.name;
    const _0x826896 = await _0x31ad81.get(_0x575d71.threadID);
    const _0x47034c = _0x826896.threadName;
    const _0x1c250f = new Date();
    const _0x2822cd = {
      'year': "numeric",
      'month': "numeric",
      'day': "numeric"
    };
    const _0x27ce82 = _0x1c250f.toLocaleDateString("en-US", _0x2822cd);
    const _0x3ac793 = _0x1c250f.toLocaleTimeString("en-US", {
      'timeZone': "Asia/Dhaka",
      'hour12': true
    });
    const _0x3b754f = "╔╝❮" + _0x8f4cd + "❯╚╗\n━━━━━━━━━━━━━━━━━━━━━━\n𝐍𝐀𝐌𝐄: 🆂🅾🆄🆁🅰🆅\n𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: SONATON\n𝐀𝐃𝐃𝐑𝐄𝐒𝐒: SATKANIYA,CHITTAGONG,𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇\n𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄\n𝐀𝐆𝐄: 20\n𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: YES🤭\n𝐖𝐎𝐑𝐊: FARMCHIST\n𝐆𝐌𝐀𝐈𝐋: sourabnath991@gmail.com\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/share/12LAVUaKSqP/ \n𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑: https://m.me/s.o.u.r.a.v.tsu.941375\n𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801880962478\n𝐈𝐌𝐎: ❌❌\n𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: ❌❌\n━━━━━━━━━━━━━━━━━━━━━━\n\nBot Prefix: ( . )\nBot Name: 🆂🅾🆄🆁🅰🆅 BOT\ngc Name: " + _0x47034c + "\nTime:【 " + _0x27ce82 + " || " + _0x3ac793 + " \n━━━━━━━━━━━━━━━━━━━━━━";
    _0x3b0c92.reply({
      'body': _0x3b754f,
      'attachment': await global.utils.getStreamFromURL("https://graph.facebook.com/100014754734049/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662")
    });
  }
};
