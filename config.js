tuconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="mathara,colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94767458992" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "947458992";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94726357671";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_56_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg0LFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjA5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICA5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUC9NYXd4YUZPUWlMVkpMNm5mcFhCbmFvSUhKN3FQTXMxcGdwbGRyZ0xodz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYkJkV3lNYnhRMzZ1NmsyUWFkbWdhd1wiLFxuICBcInBob25lSWRcIjogXCJiZjQ5ODhiNi01MTE4LTRhNzctYWI5ZC1kNzc2MTQ2YmQ3MGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMTM2LFxuICAgICAgMTUxLFxuICAgICAgMjI4LFxuICAgICAgMTY0LFxuICAgICAgMjgsXG4gICAgICAyMjMsXG4gICAgICAxOTIsXG4gICAgICAxOTIsXG4gICAgICAyMTcsXG4gICAgICAxMTUsXG4gICAgICA3NyxcbiAgICAgIDU0LFxuICAgICAgMjQyLFxuICAgICAgMjI1LFxuICAgICAgMjM3LFxuICAgICAgMjEyLFxuICAgICAgNDEsXG4gICAgICA0NixcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDksXG4gICAgICAxNzIsXG4gICAgICAxMDAsXG4gICAgICA3NSxcbiAgICAgIDAsXG4gICAgICAxNDUsXG4gICAgICA1OSxcbiAgICAgIDEzOCxcbiAgICAgIDY1LFxuICAgICAgNTksXG4gICAgICAxMzUsXG4gICAgICA4MyxcbiAgICAgIDE5MCxcbiAgICAgIDEyLFxuICAgICAgNDgsXG4gICAgICA4MyxcbiAgICAgIDMyLFxuICAgICAgNDIsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkFZUVpCTUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY3NDU4OTkyOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBc2hpbnNhbmFcIixcbiAgICBcImxpZFwiOiBcIjE4MDY2ODAwMDY4NjI1Mzo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AyeSs2OEdFTEwyMHJJR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRjdpQ2JHNnA4OFVDcG9GWGRaM205b1A4eWdhK0xISWJCVDhGekU2Mm9EUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMR2ZienAxd2VxWUZLcjBVT1F2Vk05UHIybXEyMDhRRElFYk9xMDFoOEJZY3g0cnVUVmNqSkRjZmdlOGJFbElsTDZNaXAxSm44REdkc3RyK2FuYTRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMdGtMZnR3dVFYdThMT3JFRjNSZzl1MkhTWU83cTRLcmZmR3VTTVFydjJzcGlveXFOc0xlMWxkQTRqbXhRVDRDSURZY2srTTB6Z014ak12cFVsSzJBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NzQ1ODk5Mjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODI4OTgxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==VxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJLMTJDREdCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyNjM1NzY3MTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTUyNTU2OTEwMzg3OTM6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLniKrkuLnjhKXlt6XvvLPljYTkuLlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNN1VqZXdHRU8ydDhiRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVsUEF0RzhpRHZMWnhlNGRlcHplK2dHMWkwa1E4SmdRbFF3YlB1SzdqVlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNlRPUzdkeUlzRlB0cXBTWHhrMWNQbUhuMGNyMFdNbi9zQk95VWUwMzRYdW1yVDQyRGFjc2ZnRW92MU1KaDQzWTFNdjFnMVBGSktBb1V4bit1Q2xDREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSFpMN1V3MUt3NGJxanNqTUNlVng4M2o3Q2tRYzdCZVh6ZWxLaW9GenVTOGNhN0xUREFCN08wWGtiOVlHZlVwSEVYV3NYVVowNndkTVlYVHRmMjRuQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjYzNTc2NzE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MjMwNDQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWYxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxSmkzeGMwa0M5b2NVK0czZ1JFb2pOWjIycVpPdHpQUWpIMzBDak1hYlpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MzczMjg5NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTE5MjY3ODgzMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Drac sine",
  packname: process.env.PACK_NAME || malisha"",
  botname : process.env.BOT_NAME  || "malisha.md",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
