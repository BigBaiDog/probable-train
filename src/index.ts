import { Hono } from 'hono'
import nodemailer from 'nodemailer';
const app = new Hono()

app.get('/', async(c) => {
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

(async () => {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: "1194423126@qq.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });
  console.log("Message sent:", info.messageId);
    return c.text(info.messageId)
})();
})

export default app
