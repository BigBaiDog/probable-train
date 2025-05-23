import { Hono } from 'hono'
import nodemailer from 'nodemailer';
const app = new Hono()

app.get('/', async(c) => {

const transporter = nodemailer.createTransport({
    // host: 'smtp.163.com',       // 163 邮箱 SMTP 服务器
    // service: '163',
     host: '123.58.180.7', // smtp.163.com的实际IP
    port: 465,                  // SSL 端口
    secure: true,               // 使用 SSL
    auth: {
        user: 'bigbaidog@163.com',  // 你的 163 邮箱地址
        pass: 'TSq7LMCK6QFGgsH2'       // 前面获取的授权码
    }
});
// 发送邮件的函数
async function sendMail() {
    try {
        const info = await transporter.sendMail({
            from: '"博主小助手" <your_email@163.com>', // 发件人显示名和邮箱
            to: '1194423126@qq.com',               // 收件人邮箱
            subject: '来自 Node.js 的问候',             // 邮件主题
            text: '你好！这是一封用 Node.js 发送的测试邮件！', // 纯文本内容
            // html: '<p>你好！这是一封用 <b>Node.js</b> 发送的测试邮件！</p>' // HTML 内容
        });
        console.log('邮件发送成功:', info.response);
  return c.text('1')
    } catch (error) {
        console.log('邮件发送失败:', error);
  return c.text('2')
    }
}

// 执行发送
 await sendMail();


  // return c.text('123')
})

export default app
