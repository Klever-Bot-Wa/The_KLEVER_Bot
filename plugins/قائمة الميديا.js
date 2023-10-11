let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50  
    
if (/^يضنايا|خالص1$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/يضنايا.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (chat.audios && m.text.match(/(انت هنا|مش فاهم)/gi)) {
let vn = './media/قول السؤال تاني.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(اشتمو|بيشتمك)/gi)) {    
let vn = './media/بوت تعبان.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ياديوث|ديوث)/gi)) {    
let vn = './media/ديوث.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ملل|اي الزهق دا|الدنيا نايمة|زهقان)/gi)) {    
let vn = './media/زهقان.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(سلام عليكم/سمو عليكو|السلامعليكو|سموعليكو|سلام عليكم ورحمه الله وبركاته|السلام عليكم ورحمة الله وبركاته)/gi)) {    
let vn = './media/سلام عليكم.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(اقلع)/gi)) {    
let vn = './media/اقلع.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(امال|اومال|حصل|حصلل)/gi)) {    
let vn = './media/امال.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ترجمة|ترجم|ضن|ترجمه)/gi)) {    
let vn = './media/ترجمة.mp3 vives.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ياكسمك|يكسمك|يا كسمك)/gi)) {    
let vn = './media/ياكسمك.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ضحكة شريرة|ضحكة مخيفة|اضحك|هموت من الضحك|مش قادر)/gi)) {    
let vn = './media/مش قادر.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(شرموطة|براحة|بدخلو)/gi)) {    
let vn = './media/شرموطة.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(عيط|هعيط)/gi)) {    
let vn = './media/ضحكة شريرة.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(اطفاء|ايقاف|باي|وداعا|سلام)/gi)) {    
let vn = './media/اطفاء.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(بوم|bom|قصف جبهتو|في نص راسو|جبهالو في نص راسو)/gi)) {    
let vn = './media/Bom.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(كليفر)/gi)) {    
let vn = './media/bot.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(سبع قوال|نشيد)/gi)) {    
let vn = './media/sb3.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(الفاجر|المطرقع|المطرشم|القادر)/gi)) {    
let vn = './media/voice.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(استغفرالله|استغفر الله|اللة يسامحك|الله يسامحك)/gi)) {    
let vn = './media/aa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(بوت علق|بوت وسخ|بوت خول|بوت تعبان|بوت عرص)/gi)) {    
let vn = './media/Abot.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
    
if (chat.audios && m.text.match(/(ماشي ماثي|ماشي|ماثي|موشي|موشي موش|موش موش)/gi)) {    
let vn = './media/moshi moshi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(احلامي|احلامى|احلام|حلمي)/gi)) {    
let vn = './media/a7lame.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(قحبة|شرموطة|قحبه)/gi)) {    
let vn = './media/Yamete-kudasai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(الدون|كريستيانو|رونالدو|نعم|اجل|سيييي)/gi)) {    
let vn = './media/siu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(مشفر|مش شغال)/gi)) {    
let vn = './media/Moshafer.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (chat.audios && m.text.match(/(ايديت)/gi)) {    
let vn = './media/menus/Menuvid1.mp4'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(KLEVER)/gi)) {    
let vn = './media/menus/Menuvid2.mp4'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(كليڤر)/gi)) {    
let vn = './media/menus/Menuvid3.mp4'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(هخلي البوت يشتمك|اسمع يكسمك|بوت ابن متناكة)/gi)) {    
let vn = './media/بوت متناك.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
return !0 }
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
   
if (chat.audios && m.text.match(/(لسة صاحي|صباح الخير|🥱|هنام)/gi)) {    
let vn = './media/لسة صاحي.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
if (chat.audios && m.text.match(/(ينايمين|اصحو|الجروب نايم|الجروب ميت|ماتو|يميتين)/gi)) {    
let vn = './media/جروب نايم.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(اممم|امم|امممم|اممممم|اممممم)/gi)) {    
let vn = './media/امممم.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(اتصال|تشغيل|متصل|تفعيل)/gi)) {    
let vn = './media/اتصال.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
    
    
