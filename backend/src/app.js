import express from 'express'

import conexao from './app/database/conexao.js';

import SelecaoController from './app/controllers/SelecaoController.js'
const app = express()
// Indica para o express ler body com json
app.use(express.json())
// Indica para o express ler url encoded
app.use(express.urlencoded({ extended: true }))

// Rota que adiciona um novo item
app.post('/selecoes', (req, res) =>{
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (error, result) => {
         if (error) {
             res.status(400).json({ "error": error})
         } else {
             res.status(201).json(result)
         }
    })
})

// Rota para atualização dos dados
app.put('/selecoes/:id', (req, res)=>{
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id = ?;"
    conexao.query(sql,[selecao, id], (error, result) => {
         if (error) {
             res.status(404).json({ "error": error})
         } else {
             res.status(200).json(result)
         }
    })

})

// Rota que exibe os itens
app.get('/selecoes', SelecaoController.index)

// Rota que recebe o parâmetro id e retorna o objeto com o id referenciado
app.get('/selecoes/:id', (req, res)=>{
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id = ?"
    conexao.query(sql, id, (error, result) => {
        let linha = result[0]
         if (error) {
             res.status(404).json({ "error": error})
         } else {
             res.status(200).json(linha)
         }
    })
})

// Rota que faz o delete do item com o id passado o parâmetro
app.delete('/selecoes/:id', (req, res)=>{
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id = ?"
    conexao.query(sql, id, (error, result) => {
         if (error) {
             res.status(404).json({ "error": error})
         } else {
             res.status(200).json(result)
         }
    })
})



export default app