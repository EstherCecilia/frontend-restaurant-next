import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
          <title>Restaurant</title>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                window._mfq = window._mfq || [];
                (function() {
                  var mf = document.createElement("script");
                  mf.type = "text/javascript";
                  mf.defer = true;
                  mf.src = "//cdn.mouseflow.com/projects/30e6083a-e58a-44f8-bb16-a63ee41b9f51.js";
                  document.getElementsByTagName("head")[0].appendChild(mf);
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
