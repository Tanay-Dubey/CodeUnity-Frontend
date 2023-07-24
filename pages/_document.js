import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
        <title>CodeUnity</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
