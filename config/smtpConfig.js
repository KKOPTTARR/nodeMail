const nodemailer = require('nodemailer')
let smtpTransport = require('nodemailer-smtp-transport');
const config = require('../Config/qqConfig')

module.exports = {
    smtpTransport: nodemailer.createTransport(smtpTransport({
        service: config.email.service,
        secureConnection: true,
        auth: {
            user: config.email.user,
            pass: config.email.pass
        }
    }))
}