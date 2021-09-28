import dotenv = require('dotenv');
import uuidv4 = require('uuidv4');
import { EmailService, jet } from '../index';

dotenv.config();

const { apiKey, apiSecret, fromEmail, fromName, toEmail, toName, subject } = process.env;
const uuid = uuidv4.uuid();
const message = {
  Messages: [
    {
      From: {
        Email: String(fromEmail),
        Name: String(fromName),
      },
      To: [
        {
          Email: String(toEmail),
          Name: String(toName),
        },
      ],
      Subject: String(subject),
      TextPart: 'My first Mailjet email',
      HTMLPart: `<body>
             <h3>Test via jest </h3>
             <ul>
             <li><strong>Node version: </strong>${process.version}</li>
             <li><strong>Platform: </strong>${process.platform}</li>
             </ul>
            </body>`,
      CustomID: uuid,
    },
  ],
};
const reponse = {
  body: {
    Messages: [
      {
        Status: 'success',
      },
    ],
  },
};
it('Mail Works', async () => {
  expect(await new EmailService(String(apiKey), String(apiSecret), { version: 'v3.1' }).request(message)).toMatchObject(
    reponse,
  );
});

it('Mailjet Works', async () => {
  expect(
    await new jet.EmailService(String(apiKey), String(apiSecret), { version: 'v3.1' }).request(message),
  ).toMatchObject(reponse);
});
