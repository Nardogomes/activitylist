const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3333;

app.get("/api", async (request, response) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.frasestop.com/frases-de-motivacao", {
      waitUntil: "load",
      timeout: 0,
    });

    const content = await page.evaluate(() => {
      const nodeList = document.querySelectorAll(
        ".lista-frases .card-phrase .phrase-image a img"
      );

      const listArray = { ...nodeList };

      const list = [];
      for (let item in listArray) {
        list.push([listArray[item].dataset.src]);
      }

      return list;
    });

    await browser.close();

    response.json(content);
  } catch (error) {
    throw console.error("Erro na requisição: ", error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
