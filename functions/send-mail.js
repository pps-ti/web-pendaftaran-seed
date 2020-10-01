if (!process.env.NETLIFY) {
  require('dotenv').config();
}

const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    throw new Error('Invalid request');
  }

  const body = JSON.parse(event.body);
  const mailRecipient = body.recipient;
  const recipientName = body.recipientName;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_ACCOUNT,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  transporter.sendMail(
    {
      from: process.env.MAIL_ACCOUNT,
      to: mailRecipient,
      subject: 'Terimakasih telah mendaftar workshop SEED #2',
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Static Template</title>
          <style>
            .narahubung {
              display: block;
              text-decoration: none;
              width: fit-content;
            }
          </style>
        </head>
        <body>
          <p>
            Selamat, ${recipientName}!
          </p>
          <p>
            Anda telah terdaftar pada workshop
            <strong>Software Engineering EDucation #2</strong>
            dengan tema
            <strong>Build a Flask App with a NoSQL Database using MongoDB</strong>.
          </p>
      
          <p>
            Perlu diketahui bahwa terdapat seleksi pendaftar SEED #2 oleh internal tim
            Lab PPS-TI. Kami akan mengumumkan perihal diterima/tidak nya anda sebagai
            peserta SEED #2 pada tanggal 14 November mendatang sekaligus mengonfirmasi
            kehadiran anda.
          </p>
      
          <p>
            Jika ada pertanyaan, dapat langsung ditanyakan melalui narahubung:
          </p>
      
          <a class="narahubung" href="https://wa.me/628883762069" target="_blank">
            (WhatsApp) Wahid
          </a>
          <a
            class="narahubung"
            href="https://www.instagram.com/labpps_informatika/"
            target="_blank"
          >
            (Instagram) Lab PPS-TI
          </a>
      
          <p>Terima kasih dan tetap semangat!</p>
        </body>
      </html>`,
    },
    function (error, info) {
      if (error) {
        callback(null, {
          statusCode: 500,
          body: 'failed',
        });
      } else {
        callback(null, {
          statusCode: 200,
          body: 'success',
        });
      }
    }
  );
};
