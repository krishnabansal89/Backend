const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const connect = require('./db')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')
app.use(express.json()) 

app.use(cors({
  origin:"https://frontend-yd5b.onrender.com"
}))
// app.use(express.static(path.join(__dirname + '/public')))

app.use('/api/auth',require('./Routes/auth'))
app.use('/api/main',require('./Routes/data'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// if(process.env.NODE_ENV =="production"){
//   app.use(express.static("/public"))
//   app.use("*",(res,req)=>{
//     res.sendFile(path.resolve(__dirname,'public','index.html'))
//   })
// }
connect()