import { Hono } from 'hono'
import nodemailer from 'nodemailer';
const app = new Hono()

app.get('/', (c) => {
  const transporter = nodemailer.createTransport({
  host: 'smtp.yourserver.com',
  port: 587,
  auth: {
    user: 'myid@yourserver.com',
    pass: 'my-password'
  },
});
  return c.text('Hello Hono!')
})

export default app
