const WYSendMail = require('../Service/wyService');
const QQSendMail = require('../service/qqService')

class Controller {
    //通过预设的QQ邮箱发送
    async WYSend() {
        WYSendMail('2540121298@qq.com', '测试', 'Hi 小波,这是一封');
    }
    //通过预设的QQ邮箱发送
    async QQSend() {
        QQSendMail('dbfiip@163.com', '测试', 'Hi 小波,这是一封');
    }
}


module.exports = new Controller();