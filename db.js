const mysql = require('mysql2/promise')

async function conectar() {

    if(global.conexao && global.conexao.state != 'disconnected') {

        return global.conexao

    }

    //mysql://usuario:senha@servidor:porta/banco
    const stringConexao = 'mysql://root:@localhost:3306/livraria'

    const conexao = await mysql.createConnection(stringConexao)
    global.conexao = conexao
    return global.conexao

}

conectar()

module.exports = {}