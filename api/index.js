const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors( {
    credentials: true,
    origin: 'http://localhost:5173',

} ));

const port = process.env.PORT || 4000;

app.get('/test', (req, res)=> {
    res.json('test ok');
});

app.post('/register')


app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
});