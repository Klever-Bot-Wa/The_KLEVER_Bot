let handler = async (m, { command, text }) => m.reply(`
*💫 اسئل بوت كليفر 💫*
  
*السؤال:* ${text}
*الاجابة:* ${['اه','ممكن','في الاغلب اه','ف الاغلب لا','لا','مستحيل','حصل','مش عارف','نتا بتكلمني'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^بوت|كليفر$/i
export default handler
