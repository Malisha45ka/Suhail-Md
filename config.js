const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_54_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyRTFSSDdVM2tPai93S1RCOW5CQjMyeTdnbHN6Y3N4c3h0Y0Rwa2ZoQVlZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1NEJnZVBaa1JNR2N3S214bDZxcU1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmOGFiZmNlLTk2MmQtNDA2Mi05MTM5LWU5NzVlNTc4YTJmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxOTUsXG4gICAgICA4NyxcbiAgICAgIDkxLFxuICAgICAgMTYwLFxuICAgICAgMTYsXG4gICAgICAzMSxcbiAgICAgIDQ3LFxuICAgICAgMTU3LFxuICAgICAgNTgsXG4gICAgICAyMTAsXG4gICAgICAxOTIsXG4gICAgICA0MixcbiAgICAgIDExNSxcbiAgICAgIDYxLFxuICAgICAgNDUsXG4gICAgICAyNDMsXG4gICAgICAxMDUsXG4gICAgICAzOCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMTMxLFxuICAgICAgMTg3LFxuICAgICAgMzQsXG4gICAgICAxNjQsXG4gICAgICAyNDgsXG4gICAgICAyMTEsXG4gICAgICAxNzIsXG4gICAgICAxODYsXG4gICAgICAyNTMsXG4gICAgICAzOCxcbiAgICAgIDIyMyxcbiAgICAgIDUxLFxuICAgICAgMyxcbiAgICAgIDE2OCxcbiAgICAgIDE0OCxcbiAgICAgIDEyMSxcbiAgICAgIDE1MSxcbiAgICAgIDEyLFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJLMTJDREdCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyNjM1NzY3MTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTUyNTU2OTEwMzg3OTM6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLniKrkuLnjhKXlt6XvvLPljYTkuLlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNN1VqZXdHRU8ydDhiRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVsUEF0RzhpRHZMWnhlNGRlcHplK2dHMWkwa1E4SmdRbFF3YlB1SzdqVlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNlRPUzdkeUlzRlB0cXBTWHhrMWNQbUhuMGNyMFdNbi9zQk95VWUwMzRYdW1yVDQyRGFjc2ZnRW92MU1KaDQzWTFNdjFnMVBGSktBb1V4bit1Q2xDREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSFpMN1V3MUt3NGJxanNqTUNlVng4M2o3Q2tRYzdCZVh6ZWxLaW9GenVTOGNhN0xUREFCN08wWGtiOVlHZlVwSEVYV3NYVVowNndkTVlYVHRmMjRuQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjYzNTc2NzE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MjMwNDQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWYxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxSmkzeGMwa0M5b2NVK0czZ1JFb2pOWjIycVpPdHpQUWpIMzBDak1hYlpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MzczMjg5NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTE5MjY3ODgzMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Drac sine",
  packname: process.env.PACK_NAME || malisha"",
  botname : process.env.BOT_NAME  || "malisha. md",
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
