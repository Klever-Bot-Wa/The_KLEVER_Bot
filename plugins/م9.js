let handler = async (m, { conn, command, text }) => {
let love = `
* ╭────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────✧ *
* ├ 🤴🏻 المطور :* *Mahmoud Mahmed*
* ├ #️⃣ الرقم :* *wa.me/201016948771*
* ├ ✅ الاصدار :* ${vs}
* ├ 🎳 البادئة :* *${usedPrefix}*
* ├ 🔐 الشات الخاص :* *${groups.length}*
* ├ 🚀 وقت التشغيل:* *${uptime}*
* ├ 🐢 السرعة :* *${speed}* 
* ╰────────────··· *
* ╭───[ الاوامر كتابية ]───✧ *
* ├〚 .نصيحه 〛*
* ├〚 .بوست 〛*
* ├ 〚 .اقتباسات 〛*
* ├〚 .صراحه 〛*
* ├〚 .فزوره 〛*
* ├〚 .اسالني 〛*
* ├〚 .لوخيروك 〛*
* ├〚 .حروف 〛*
* ╰────────────···*

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م9|م٩)$/i
export default handler
