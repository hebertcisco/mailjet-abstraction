import crypto from 'crypto';
import { chance } from '.';
import type { MailReponseInterface } from '../../src/email/email.interface';

const CustomID = crypto.randomUUID();

export const message_mock = {
  Messages: [
    {
      From: {
        Email: String(chance.email()),
        Name: String(chance.name()),
      },
      To: [
        {
          Email: String(chance.email()),
          Name: String(chance.name()),
        },
      ],
      Subject: String(chance.word()),
      TextPart: 'My first Mailjet email',
      HTMLPart: `<body>
             <h3>Test via jest </h3>
             <ul>
             <li><strong>Node version: </strong>${'v3.1'}</li>
             <li><strong>Platform: </strong>${process.platform}</li>
             </ul>
            </body>`,
      CustomID: CustomID,
    },
  ],
};
export const mail_reponse_mock: MailReponseInterface = {
  body: {
    Messages: [
      {
        Status: 'success',
      },
    ],
  },
};
