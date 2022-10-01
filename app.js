const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send(`
    <h2>Hi welcome to api server</h2>
    `)
})


app.listen(8000, () => {
    console.log('server is running on port 8000')
})