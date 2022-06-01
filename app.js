global.db = require('./db')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const e = require('express')

const port = 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//definição das rotas
const router = express.Router()

router.get('/', (req,res) => {

    res.json( {mensagem : 'funcionou!'} )

})

app.use('/', router)
app.listen(port)
console.log('API funcionando!')