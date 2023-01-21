const express = require('express');
const path = require('path');
const port = 3000
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, 'home.html'));
});

app.all('*',(req,res)=>{
    res.status(404).send("<h1>not found</h1>");
})

app.listen(port, ()=>{
    console.log("running on port " + port);
})