import puppeteer from "puppeteer";
import { existsSync } from "fs";

export const createBlogPostImage = async (title: string, name: string) => {
  if (existsSync(`public/images/posts/${name}.png`)) {
    return `public/images/posts/${name}.png`;
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.cdnfonts.com/css/geometria" rel="stylesheet" />
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #BA7BCC;
        font-family: "Geometria", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 180vh;
        width: 240vw;
      }

      .text-bg {
        background-color: #131C2A;
        height: 900px;
        width: 1820px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5rem;
      }

      .image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 0 3rem;
        word-break: break-all;
      }

      h1 {
        color: #BA7BCC;
        font-size: 7rem;
        font-weight: 900;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      span {
        color: #ffffff;
        font-size: 3rem;
        font-weight: 900;
        text-align: center;
        padding-top: 5rem;
    }
    </style>
  </head>
  <body>
    <div>
    <div class="container">
        <div class="text-bg">
            <div class="image">
                <h1>${
                  title.length > 35 ? title.slice(0, 35) + "..." : title
                }</h1>
                <span class="nish">NISH</span>
            </div>
        </div>
    </div>
  </body>
</html>

    `);

  await page.screenshot({
    path: `public/images/posts/${name}.png`,
    clip: {
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
    },
  });

  await browser.close();

  return `/images/posts/${name}.png`;
};
