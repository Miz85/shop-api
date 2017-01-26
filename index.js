const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/items', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Chocolate',
      price: '2.5'
    },
    {
      id: 2,
      name: 'Apple',
      price: '0.45'
    },
    {
      id: 3,
      name: 'Banana',
      price: '1'
    },
    {
      id: 4,
      name: 'iPhone case',
      price: '42.99'
    },
  ]);
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
});
