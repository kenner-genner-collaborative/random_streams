const path = require('path');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001; 
app.use(express.static('public'))
app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => console.log('Now listening on' + PORT));

