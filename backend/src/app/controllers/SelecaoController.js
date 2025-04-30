import conexao from "../database/conexao.js"

class SelecaoController {

    async index(req, res) {
        const sql = "SELECT * FROM selecoes;"
        conexao.query(sql, (error, result) => {
             if (error) {
                 res.status(404).json({ "error": error})
             } else {
                 res.status(200).json(result)
             }
        })
     }
    async show(req, res) {
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
    }
    async store(req, res) {
        const selecao = req.body
        const sql = "INSERT INTO selecoes SET ?;"
        conexao.query(sql, selecao, (error, result) => {
             if (error) {
                 res.status(400).json({ "error": error})
             } else {
                 res.status(201).json(result)
             }
        })
    }
    async update(req, res) {
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
    
    }
    async delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id = ?"
        conexao.query(sql, id, (error, result) => {
             if (error) {
                 res.status(404).json({ "error": error})
             } else {
                 res.status(200).json(result)
             }
        })
    }

}

// padrão Singleton
export default new SelecaoController()