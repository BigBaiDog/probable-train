import { Hono } from 'hono'
import nodemailer from 'nodemailer';
const app = new Hono()

app。get('/', (c) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    auth: {
      user: 'bigbaidog@163.com',
      pass: 'Netease051326.'
    },
  });
  const mailOptions = {
    from: '"Node.js Mailer" <bigbaidog@163.com>', // 发件人
    to: '1194423126@qq.com',                     // 收件人
    subject: '测试邮件',                                // 邮件主题
    text: '这是一封测试邮件的正文内容。',                  // 纯文本正文
    html: '<p>这是一封 <b>测试邮件</b> 的 HTML 正文内容。</p>', // HTML 正文
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return c.text('邮件发送失败：'+error);
    }
    return c.text('邮件发送成功：'+info.messageId);
  });

  return c.text('Hello Hono!')
})

export default app
