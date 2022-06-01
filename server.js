const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  'chance the rapper': {
    age: 29,
    birthName: 'Chancelor Bennett',
    birthLocation: 'Chicago, Illinois',
  },
  'dylon': {
    age: 29,
    birthName: 'Dylon',
    birthLocation: 'New York, New York',
  }
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:rapperName', (req, res) => {
    const rapperName = req.params.rapperName.toLowerCase();

    if (rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers['dylon']);
    }  
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});