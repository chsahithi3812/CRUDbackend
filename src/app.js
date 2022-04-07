const express = require ('express')
const port=process.env.PORT || 9000
const app=express()
const cors= require('cors')
require('dotenv').config()

require('./database/db.js')


app.use(express.json())
app.use(cors())



app.use(require('./routes/auth.js'))

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})