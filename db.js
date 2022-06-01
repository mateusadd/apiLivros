const mysql = require('mysql2/promise')

async function conectar() {

    if(global.conexao && global.conexao.state != 'disconnected') {

        return global.conexao

    }

    //mysql://usuario:senha@servidor:porta/banco
    const strConexao = 'mysql://root:@localhost:3306/livraria'

    const conexao = await mysql.createConnection(strConexao)
    global.conexao = conexao
    return global.conexao

}

async function listarLivros() {

    const con = await conectar()
    const [livros] = await con.query('select * from livros;')
    return livros

}

conectar()

module.exports = { listarLivros }