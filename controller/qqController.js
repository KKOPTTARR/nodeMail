const QQSendMail = require('../Service/qqService');

//通过预设的QQ邮箱发送
async function QQSend() {
    await QQSendMail('18161963716@163.com','测试', 'Hi 点击一下带你去一个好玩的地方 www.baidu.com');
}

QQSend();