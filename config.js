//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
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
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VRMjBPSlBZZDdZL28rOVA0ODZzZW9BNXZ3SkpQejhHZG9IOTRta0xHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2FlN1I1M0tzNEc5Vmo1bjhsQkJoVllaY2lZZ0YvZEM0RUZwRGtreGozUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRWx0VnlxenBIRW9CVG9hTHZ2aENIMk03dHB2a29vcDZkZ1Y0dTRVc240PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q3B2aW1QYUVXSm5DNUxheGFZZStvUVBQcDNXVk03NzZrZDNkWE9GcFEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHNE9BbXpCYjhZTjhETzdtQmcwSEFvN1BiNU0yOXJxM0tVdmdhRlJYMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZNTkl4ZktOQ3JuclZxOHRlcDVxMkdPREFIQm9QOGo4V25XRzI0ZjFjU009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JLYmZMSGc4eE9RNFhCY3N1YWkxcjFDdWdIOENyRnpxQ0p0UDFaVCtVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWNUZU5DQXB6bFhxcmRHb1A2bi9HcU4vWVpPZXA5eW5yTGhoRldPaE54bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVXeEZLQ0c1bXJwUEtFQUV5Qm8xWWIzWkIrNG45YXRFQVdqSHVQdGVaQ1ZwS1JDdWJaa3F1cjg1dkxITEp5cGtZWHRTTjl0SmduNS83QjRsY2RrNGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJEM096RGJXd0FJcG5CMHBxazhBOHkyamFUZjJxNEZrek1EZWxaUkgwajhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4MTI2Mzc1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyOTExQUIzMzU2RkE2NENERjAwRDU3RDRDNkNGM0NDRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjI3NjM0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODEyNjM3NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODUyM0Y2QjIwMDI3QTMxQUI2RjMwQzZBODAyRDJEMEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjYyNzYzNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNkFSdTBRN1hTblcwczB1V0ZhdWIxUSIsInBob25lSWQiOiI0NjYwMTUzZC0wNDg4LTQ1NWYtOTg5MC04Mjk0ODA2MGU2OTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1EeFluNmh2VE9ZSXF2djI5TFBPejdBRk5RPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNpaVNUNnZUdVQ4WDMrOU9aTEhobjF4VkYydz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5WkNHNkFLWCIsIm1lIjp7ImlkIjoiMjU0NzgxMjYzNzUzOjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1pc3RhaCBYLiBCb3QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PY2d2a0VFS1BzdExVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpaME9rYXpWVFZyRkJIdXh0aVZQY3hOYWlIODlNbTVaQVVKanlPQVZ0bmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNVWDNESm5LcUtFalFiMmQveXM1aW9DUVlwclJZMm9LVzUxcFJSWm1iNnhmM0ZCOCtWQ0toRk1HU3YvTUNhQStwSGhFMzhSWmU1MnVJdnFtMW5nQ0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1WTlQYzJhbXNkbFlPajRaRUpFSkQydndTOGNtRHFTMy94ZlBSV28rV0dHWjZuZE9ieHdtK3N4elVDZmVCd1QrYjRyeHFFQnlPOGZyaTBiNy9pS1BqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MTI2Mzc1MzoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjMmREcEdzMVUxYXhRUjdzYllsVDNNVFdvaC9QVEp1V1FGQ1k4amdGYlozIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjI3NjMyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdrRCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
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
