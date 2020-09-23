if (!process.env.NETLIFY) {
  require('dotenv').config();
}

const { GoogleSpreadsheet } = require('google-spreadsheet');
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    throw new Error('Invalid request');
  }

  try {
    const sheetType = event.queryStringParameters.type;
    const data = JSON.parse(event.body);
    const dataValuesArray = Object.values(data);

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SPREADSHEET_ID_FROM_URL
    );
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[sheetType];
    await sheet.addRow(dataValuesArray);

    return {
      statusCode: 200,
      body: 'post data succeeded',
    };
  } catch (error) {
    throw new Error('Internal server error');
  }
};
