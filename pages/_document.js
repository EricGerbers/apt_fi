import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        ></link>
        <link href='https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap' rel='stylesheet' />
        <meta
          name='description'
          content='Building the ultimate ecosystem to help you cut your 50 years of work - in half!'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
