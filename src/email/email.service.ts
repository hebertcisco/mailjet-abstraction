import mailjet from 'node-mailjet';
import type { Messages } from './email.interface';
import type { Email } from 'node-mailjet';

export class EmailService {
  constructor(private apiKey: string, private apiSecret: string, private options?: mailjet.ConnectOptions) {}
  public request = (Message: Messages): Promise<Email.Response> => {
    return mailjet.connect(this.apiKey, this.apiSecret).post('send', this.options).request(Message);
  };
}
