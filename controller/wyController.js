const WYSendMail = require('../Service/wyService');

//通过预设的QQ邮箱发送
async function WYSend() {
    await WYSendMail('2540121298@qq.com','测试', 'Hi 小波,这是一封');
}

WYSend();