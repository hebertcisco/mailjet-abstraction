import type { ConnectOptions, Email } from 'node-mailjet';
import { EmailService } from './email/email.service';
import type { Messages } from './email/email.interface';

export * as jet from './email/email.service';
export * as typo from './email/email.interface';

export default function mailjet(
  apiKey: string,
  apiSecret: string,
  Messages: Messages,
  options?: ConnectOptions,
): Promise<Email.Response> {
  return new EmailService(apiKey, apiSecret, options).request(Messages);
}
export { EmailService } from './email/email.service';
export type { Generics, PostResponse, Attachment, InlinedAttachment, SendParamsMessage } from './email/email.interface';

export * from './email';
