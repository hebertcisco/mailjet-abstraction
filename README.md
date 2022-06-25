<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/mailjet-abstraction/main/.github/images/favicon512x512-mail.png" align="center" alt=":package: ts-npm-package-boilerplate" />
 <h2 align="center">:package: mailjet-abstraction</h2>
 <p align="center">Build Together. Send Smarter.</p>
</p>

  <p align="center">
    <a href="https://github.com/hebertcisco/mailjet-abstraction/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/mailjet-abstraction?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/mailjet-abstraction/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/mailjet-abstraction?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/mailjet-abstraction">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/mailjet-abstraction?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/mailjet-abstraction">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/mailjet-abstraction?color=336791&label=Total%20downloads" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/mailjet-abstraction/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/mailjet-abstraction/issues/new/choose">Request Feature</a>
  </p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>Build Together. Send Smarter.</strong>✨</p>

# Getting started

> Build Together. Send Smarter.

[![codecov](https://codecov.io/gh/hebertcisco/mailjet-abstraction/branch/main/graph/badge.svg?token=4QRSAT0WDC)](https://codecov.io/gh/hebertcisco/mailjet-abstraction)

[![Node.js build and publish package](https://github.com/hebertcisco/mailjet-abstraction/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/hebertcisco/mailjet-abstraction/actions/workflows/npm-publish.yml)

[![Running Code Coverage](https://github.com/hebertcisco/mailjet-abstraction/actions/workflows/coverage.yml/badge.svg)](https://github.com/hebertcisco/mailjet-abstraction/actions/workflows/coverage.yml)

## Installation

```bash
npm i mailjet-abstraction
# Or
yarn add mailjet-abstraction
```

## Usage

```ts
import { EmailService  } from 'mailjet-abstraction';

try{
  await new EmailService('apiKey', 'apiSecret', { version: 'v3.1' })
    .request({
  Messages: [
    {
      From: {
        Email: 'yorEmail@domain.com',
        Name: 'yorName',
      },
      To: [
        {
          Email: 'anEmail@domain.com',
          Name: 'Doe',
        },
      ],
      Subject: 'Greetings from Mailjet.',
      TextPart: 'My first Mailjet email',
      HTMLPart: `<body>
             <h3>Test</h3>
            </body>`,
    },
  ],
});
}catch (e){
  console.error(e)
}
```
> Clone this repository: `git clone https://github.com/hebertcisco/mailjet-abstraction`

### Open the directory and run the script line:

```bash
cd mailjet-abstraction && npm i
```
