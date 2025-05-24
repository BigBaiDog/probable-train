import { Hono } from 'hono'
import nodemailer from 'nodemailer';
const app = new Hono()

app.get('/', async(c) => {


  const transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    // secure: false, // upgrade later with STARTTLS
    auth: {
      user: '1194423126@qq.com',
      pass: 'papytfjwhpxzigba'
    },

  });

  async function sendMail() {
    try {
        const info = await transporter.sendMail({
            from: '1194423126@qq.com', // 发件人显示名和邮箱
            to: 'bigbaidog@163.com',               // 收件人邮箱
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

})

export default app
