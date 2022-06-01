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

router.get('/listaLivros', async (req,res) => {

    const resultado = await global.db.listarLivros()
    res.json( resultado )

})

app.use('/', router)
app.listen(port)
console.log('API funcionando!')