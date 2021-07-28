import chalk from 'chalk'
import NodeMailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

const { log } = console

interface MailOption {
  subject: string
  to: string
  html?: string
  attachments?: Mail.Attachment[]
}

export default class Mailer {
  private static transporter = NodeMailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT as string),
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  private static isReady = false

  static async verify(): Promise<boolean> {
    return new Promise((resolve) => {
      this.transporter.verify((err) => {
        if (err) {
          log(`${chalk.red('error')} - failed to connect to Gmail server`)
          console.error(err.message)
          resolve(false)
        } else {
          log(`${chalk.yellow('email')} - connected to Gmail server`)
          this.isReady = true
          resolve(true)
        }
      })
    })
  }

  static async sendMail(options: MailOption): Promise<any> {
    if (!this.isReady) {
      log(`${chalk.yellow('email')} - not connected to an email server`)
      log(
        `${chalk.yellow(
          'email'
        )} - connecting to the email server for the first time`
      )
      await this.verify()
    }

    const sendOptions = {
      ...options,
      from: `"Jang Haemin" <io@jhaemin.com>`,
    }

    return this.transporter.sendMail(sendOptions)
  }
}
