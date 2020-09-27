if (!process.env.NETLIFY) {
  require('dotenv').config();
}

const { GoogleSpreadsheet } = require('google-spreadsheet');
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 400,
      body: 'Invalid request',
    };
  }

  try {
    const sheetType = event.queryStringParameters.type;
    const npm = event.queryStringParameters.npm;

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SPREADSHEET_ID_FROM_URL
    );

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[sheetType];
    const rows = await sheet.getRows();
    const npmExists = rows.some((row) => row.NPM === npm);

    const unique = !npmExists;

    return {
      statusCode: 200,
      body: String(unique),
    };
  } catch (error) {
    throw new Error('Tidak dapat mengambil data');
  }
};
