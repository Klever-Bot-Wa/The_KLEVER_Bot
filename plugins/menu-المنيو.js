import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/ShadowBot.mp3'
let pp = imagen4
let img = await(await fetch('https://https://telegra.ph/file/e509be2d469ecbf2a33e5.jpg)).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*╭────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────✧*
*├ 🤴🏻 المطور :* *Mahmoud Mahmed*
*├ #️⃣ الرقم :* *wa.me/201016948771*
*├ ✅ الاصدار :* ${vs}
*├ 🎳 البادئة :* *${usedPrefix}*
*├ 🔐 الشات الخاص :* *${groups.length}*
*├ 🚀 وقت التشغيل:* *${uptime}*
*├ 🐢 السرعة :* *${speed}* 
*╰────────────···*
*╭───[ القائمة العامة ]───✧*
*├ ❬ .م1 ❭↜ 〚 اوامر الاعضاء 〛*
*├ ❬ .م2 ❭↜ 〚 اوامر المطور 〛*
*├ ❬ .م3 ❭↜ 〚 اوامر الجروبات 〛*
*├ ❬ .م4 ❭↜ 〚 اوامر التحميل 〛*
*├ ❬ .م5 ❭↜ 〚 الاوامر الاسلامية 〛*
*├ ❬ .م6 ❭↜ 〚 اوامر التصميم 〛*
*├ ❬ .م7 ❭↜ 〚 اوامر الصوت 〛*
*├ ❬ .م8 ❭↜ 〚 اوامر المرح 〛*
*├ ❬ .م9 ❭↜ 〚 الاوامر كتابية 〛*
*├ ❬ .م10 ❭↜〚 كــــل الأوامــر 〛*
*╰────────────···*
*╭───[ *اوامر خاصة* ]───✧*
*├ ❬🤖❭↜ 〚 .المميزات 〛*
*├ ❬🤖❭↜ 〚 .السورس 〛*
*├ ❬🤖❭↜ 〚 .المطور 〛*
*╰────────────···*


`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `${wm}`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『👑┇Klever┇🤖┇Bot┇👑』',
body: null,
thumbnail: img,
sourceUrl: `https://telegra.ph/file/c6bf7ac59aaa73bead7ba.jpg`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗] هناك مشكلة في قائمة اوامر البوت ابلغ المالك ليتم اصلاحها', m)
}}
handler.command = /^(اوامر|الاوامر|الأوامر|أوامر|menu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}