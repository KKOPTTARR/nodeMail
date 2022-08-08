const nodemailer = require('nodemailer')
const config = require('../Config/qqConfig')
const smtpTransport = require('../config/smtpConfig')

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
const sendQQMail = function (recipient, subject, html) {

    smtpTransport.sendMail({

        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html

    }, function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log('发送成功');
    });
}

module.exports = sendQQMail;

