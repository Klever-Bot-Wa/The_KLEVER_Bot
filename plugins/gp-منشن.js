let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}*✦━━━━━[ 𝒉𝒆𝒏𝒓𝒚-𝒃𝒐𝒕 ]━━━━━✦*

*⤹⚜ آلمنشن ᬽ آلجــمآعــي ⚜⤸*
\n` + users.map(v => '│◦❈↲ احبك يا @' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━[ 𝒌𝒍𝒆𝒗𝒆𝒓-𝒃𝒐𝒕 ]━━━━━✦*', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
