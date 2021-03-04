const express = require('express')
const app = express()
const PORT = 9999 || process.env.PORT

app.get('/', (req, res) => {
    res.send('<h1>Le Hong Nghiem</h1>')
})

app.listen(PORT, () => console.log('SERVER STARTED'))
