let handler = async (m, { conn, command, text }) => {
let love = `
*╭────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────✧*
*├ 🤴🏻 المطور :* *Mahmoud Mahmed*
*├ #️⃣ الرقم :* *wa.me/201016948771*
*├ ✅ الاصدار :* ${vs}
*├ 🎳 البادئة :* *${usedPrefix}*
*├ 🔐 الشات الخاص :* *${groups.length}*
*├ 🚀 وقت التشغيل:* *${uptime}*
*├ 🐢 السرعة :* *${speed}* 
*╰────────────···*
*╭───[ اوامر الاعضاء ]───✧*
*├〚 .السورس 〛*
*├〚 .القوانين 〛*
*├〚 .السرعه 〛*
*├〚 .بنج 〛*
*├〚 .لفل 〛*
*├〚 .المطور 〛*
*├〚 .دردشة-مجهول 〛*
*├〚 .التوقيت 〛*
*├〚 .انطق 〛*
*├〚 .ترجمة 〛*
*├〚 .بوستات 〛*
*├〚 .نصيحه 〛*
*├〚 .اقتباسات 〛*
*├〚 .ذكاء-اصطناعي 〛*
*╰────────────···*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م١|م1|اوامر الاعضاء|الاوامر الاعضاء)$/i
export default handler
