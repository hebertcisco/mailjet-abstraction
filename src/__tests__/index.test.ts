import dotenv from 'dotenv';
import { EmailServiceMock, apiKey_mock, apiSecret_mock, message_mock } from '../../test/mock';
import type { MailReponseInterface } from '../email/email.interface';

dotenv.config();

describe('EmailService', () => {
  let mailreponse: MailReponseInterface;
  let apiKey: string;
  let apiSecret: string;
  let mockEmailService: EmailServiceMock;

  beforeAll(() => {
    mailreponse = {
      body: {
        Messages: [
          {
            Status: 'success',
          },
        ],
      },
    };

    apiKey = apiKey_mock;
    apiSecret = apiSecret_mock;
    mockEmailService = new EmailServiceMock(apiKey, apiSecret);
  });
  it('Mail Works', async () => {
    const expected = await mockEmailService.request(message_mock);

    expect(expected).toMatchObject(mailreponse);
  });
});
