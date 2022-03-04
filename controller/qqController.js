const QQSendMail = require('../Service/qqService');

//通过预设的QQ邮箱发送
async function QQSend() {
    await QQSendMail('dbfiip@163.com','测试', 'Hi 小波,这是一封');
}

QQSend();