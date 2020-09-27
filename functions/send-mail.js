if (!process.env.NETLIFY) {
  require('dotenv').config();
}

const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    throw new Error('Invalid request');
  }

  const mailRecipient = JSON.parse(event.body).recipient;

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
      subject: 'Anda telah mendaftar workshop SEED 2',
      text:
        'Terimakasih, Anda telah mendaftar di workshop SEED yang akan di adakan pada bulan Oktober 2020. Untuk saat ini, Anda masih berada di ruang tunggu dan akan mendapatkan email lanjutan jika sudah mendapatkan tempat di workshop tersebut.',
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
