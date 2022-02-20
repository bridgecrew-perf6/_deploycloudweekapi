const _PORT   = 8081

const server  = require('./api/api')

const express = require('express')
const cors    = require('cors')
const log     = require('morgan')

const app     = express()

app.use(cors({allowedHeaders: 'Content-Type'})) // { origin:'https://cloudweek.netlify.app/' }
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(log('dev'))

app.use('/', server)


app.listen(process.env.PORT || _PORT,()=>{
    console.log(`Online into Port: ${_PORT}`)
})