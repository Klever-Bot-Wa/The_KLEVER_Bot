import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝐊𝐋𝐄𝐕𝐄𝐑', body: '𝐊𝐋𝐄𝐕𝐄𝐑', sourceUrl: `https://solo.to/kleversensei`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
