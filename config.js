//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q"; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "254774932620";
global.owner = process.env.OWNER_NUMBER || "254781263753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNadVgwTEMwTDY4WEgvc2tjNGIzY24vOUdmcUU3QWUzWHVvS3NoVDIyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FTSkptS01tZ2JuRldkMU5wTU5zVnZyYnlRVFRHU05oTW5XV3BKenRWMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TjZBQ1hjcG5iMmJvdnY5SjZBUUdGOWd4Vmg4N1BtT3oxSGhyQzNPVGwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxd3RyNHN5c2RmR08rdEdsZGZXUWNNdDVDQWtmTHdSb1o0TzVETUVaa0ZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNWGlpZDh0RlljZFpOU2toaVFoWVNlZTdocG9oQ3AzYzNFbVRmaFFZMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwyMlVJOWFhb0R1N29UbGFjamhGallFU2p5RkNsQnQ4YmxnT3VDZzJublk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RkZ0VYdkRBcG5OTEpWbVZ0a2FQUHo4Ukl0cWVPTU1pYXBLay84d1FFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmNhQXZaME41bUhLR0RtYmI4UDN2RkdnNGM3TGRPUFJlREFldk50bDdqND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncxSnBhQkcvK3RyVHdMdGtxMEVuSXFaRVlEUVNmeVNsQlNCRmRQdUNxNVlLK0M5UU1MRDBFc2NDU202bGQxbm5HbTFXLzIvSUp6WUVvM0N2OGs3S0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiJMaDBuOFFLa0FlWUZvRFFUMVRjRmpUTmExRTNkY0QyTzFDZXRVTGMzU3dJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4MTI2Mzc1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMENDQjNCQjY0N0Y2QkE2OEQ0RjZDQkFDMTc4MkNEQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjY3MzIzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODEyNjM3NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkU5ODdFNDQ4QzM5NTlDODcwQjUzMEQzNjI4RUI0NTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjY2NzMyNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiY2U5MmYySFJTSjZsRUozZTNnempaZyIsInBob25lSWQiOiI4OGQ1ZjUzMy1mYWRlLTQ4YjQtYTljNS02NzZkYzY0NTQ2YTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmMvam9udmp0a2Q2UVFhZm9uK01UYW5EY0dNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNRbVdCV1RWZmw1c05jQ25PV1JCZXdaN0Y1UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXOUpMTU04USIsIm1lIjp7ImlkIjoiMjU0NzgxMjYzNzUzOjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1pc3RhaCBYLiBCb3QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDVXd3UVFxcUszdFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJvVndTbXY0SHRKek9Pd0xUVDV4ZEc5djJUYVRvS216c2NESmloQUZlakE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZ1Qi9WcytGdStRMnBoZ1ZvcytwUHNZY2NMdXlsU1d1YnVZRk1nK2JacFdhT09rRGQwSFo4cit2Zm9wZE54aloxOTViUWlWQW1wSi9hK1BiRWZIR0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRVmhuSVc0Rnk2QVRvVUk2Nk9SVjVIWStscmFVQTc0NVB0eUhnNE0zT3JQblhMVlpGYmRFQlM5VHJTZytRdUQzdkYyTmhFK1JlN1p2K0p5TXRpVFhBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MTI2Mzc1MzoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRYUZjRXByK0I3U2N6anNDMDArY1hSdmI5azJrNkNwczdIQXlZb1FCWG93In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjY3MzIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURUTCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Alvin M",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
