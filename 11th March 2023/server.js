const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello World'
    });
})

app.get('/myname', (req, res) => {
    return res.status(200).json({
        name: 'Prathap Chandra'
    });
})

app.listen(9005, () => {
    console.log('App running on port 9005');
})