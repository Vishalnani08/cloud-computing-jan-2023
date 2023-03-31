const express = require('express');
const app = express();
const PORT = 1111;

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hi!!! This message is from server one'
    })
});

app.listen(PORT, () => {
    console.log(`Server one running on port ${PORT}`);
})