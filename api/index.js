const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/test', (req, res)=> {
    res.json('test ok');
});


app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
});