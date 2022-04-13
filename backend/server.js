const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

const PORT = process.env.PORT || 3333;

app.use(cors());

app.get('/', async (req,res) => {

  try {
    const { data } = await axios('https://positive-vibes-api.herokuapp.com/quotes/random')
  
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
  
});

app.listen(PORT, () => console.log(`Servidor iniciado na posta ${PORT}`));
