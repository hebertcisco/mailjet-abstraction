import mailjet = require('node-mailjet');
import { Messages } from './email.interface';
import { Email } from 'node-mailjet';

export class EmailService {
  constructor(private apiKey: string, private apiSecret: string, private options?: mailjet.ConnectOptions) {}
  public request = (Message: Messages): Promise<Email.Response> => {
    return mailjet.connect(this.apiKey, this.apiSecret).post('send', this.options).request(Message);
  };
}
