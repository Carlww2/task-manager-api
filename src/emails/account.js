const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carlwwii@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carlwwii@gmail.com',
        subject: `Good bye ${name}!`,
        text: `It's a shame you have to leave, tell us why are you leavnig to improve our serives.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}