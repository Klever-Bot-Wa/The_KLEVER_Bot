
let handler = async (m, { conn, participants, usedPrefix, command }) => {
	
let kickte = `✳️ الاستخدام الصحيح للامر\n*${usedPrefix + command}* @منشن`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*[❗] يرجى الرد على الشخص او الاشاره اليه ليتم طرده*') 
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
if(conn.user.jid.includes(mentioned)) return m.reply("*[❗] لا استطيع حذفه ربما لانه منشئ المجموعه يرجى ازالته يدويا*")
let responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
let exitoso1 = `*@${mentioned.split("@")[0]} تم طردك بسبب افعالك السيئه فلتنقلع من هنا*`
let error1 = `*@${mentioned.split("@")[0]} هذا الشخص هو منشئ المجموعه لذلك لا استطيع ازالته*`
let error2 = `*@${mentioned.split("@")[0]} لقد تم حذف هذا الشخص من المجموعه اصلا*`
if (responseb[0].status === "200") m.reply(exitoso1, m.chat, { mentions: conn.parseMention(exitoso1)})  
else if (responseb[0].status === "406") m.reply(error1, m.chat, { mentions: conn.parseMention(error1)})   
else if (responseb[0].status === "404") m.reply(error2, m.chat, { mentions: conn.parseMention(error2)})  
else conn.sendMessage(m.chat, {text: `*[❗] هناك خطأ ما*`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
return

}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'طرد', 'خرجو'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
