interface PostResponseDataTo {
  readonly Email: string;
  readonly MessageUUID: string;
  readonly MessageID: number;
  readonly MessageHref: string;
}
interface PostResponseDataMessage {
  readonly Status: string;
  readonly CustomID: string;
  readonly To: ReadonlyArray<PostResponseDataTo>;
  readonly Cc: ReadonlyArray<PostResponseDataTo>;
  readonly Bcc: ReadonlyArray<PostResponseDataTo>;
}
interface PostResponseData {
  readonly Messages: ReadonlyArray<PostResponseDataMessage>;
}
export interface Generics {
  Email: string;
  Name: string;
}

export interface PostResponse {
  readonly body: PostResponseData;
}
export interface Attachment {
  ContentType: string;
  Filename: string;
  Base64Content: string;
}

export interface InlinedAttachment extends Attachment {
  ContentID: string;
}
export interface SendParamsMessage {
  From: {
    Email: string;
    Name?: string | undefined;
  };
  Sender?:
    | {
        Email: string;
        Name?: string | undefined;
      }
    | undefined;
  To: Generics[];
  Cc?: Generics[] | undefined;
  Bcc?: Generics[] | undefined;
  ReplyTo?: Generics | undefined;
  Variables?: any | undefined;
  TemplateID?: number | undefined;
  TemplateLanguage?: boolean | undefined;
  Subject?: string | undefined;
  TextPart?: string | undefined;
  HTMLPart?: string | undefined;
  MonitoringCategory?: string | undefined;
  URLTags?: string | undefined;
  CustomCampaign?: string | undefined;
  DeduplicateCampaign?: boolean | undefined;
  EventPayload?: string | undefined;
  CustomID?: string | undefined;
  Headers?: any | undefined;
  Attachments?: Attachment[] | undefined;
  InlinedAttachments?: InlinedAttachment[] | undefined;
}
export interface Messages {
  Messages: SendParamsMessage[];
}
