import mailjet from 'node-mailjet';
import { mail_reponse_mock } from '.';

import type { Messages } from '../../src/email/email.interface';

export class EmailServiceMock {
  constructor(private apiKey: string, private apiSecret: string, private options?: mailjet.ConnectOptions) {
    void this.apiKey;
    void this.apiSecret;
    void this.options;
  }
  public request = (Message: Messages) => {
    void Message;
    return Promise.resolve(mail_reponse_mock);
  };
}
