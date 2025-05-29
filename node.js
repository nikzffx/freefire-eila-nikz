const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.send('Free Fire API is live');
});

app.get('/api/freefire', async (req, res) => {
  const { uid, region } = req.query;

  try {
    // Replace this with your actual API logic or scraping
    const response = await axios.get(`https://yourapi.com/${region}/${uid}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
