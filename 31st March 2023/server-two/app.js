const express = require('express');
const app = express();
const PORT = 2222;

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hi!!! This message is from server two'
    })
});

app.listen(PORT, () => {
    console.log(`Server one running on port ${PORT}`);
})