const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dice.html');
});

app.get('/rollDice', async (req, res) => {
  const result = { value: Math.floor(Math.random() * 6) + 1 };
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
