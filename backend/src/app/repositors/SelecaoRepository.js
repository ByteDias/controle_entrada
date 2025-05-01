import conexao from "../database/conexao.js"
class SelecaoRepository{
    // CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (error, result) => {
                if(error) return reject('Erro na criação"')
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
            })
        })
    }
    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
           conexao.query(sql, (error, result)=> {
                if (error) return reject('Erro ao Exibir o Conteúdo')
                    // Aqui a gente está fazendo o parse do resultado
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
            })
        })
    }

    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id = ?"
        return new Promise((resolve, reject)=> {
            conexao.query(sql, id, (error, result) => {
                if (error) return reject('Erro ao encontrar o registro!')
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
            })
        }) 
        
    }
    updadeById(selecao, id){
        const sql = "UPDATE selecoes SET ? WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,[selecao, id], (error, result) => {
                if(error) return reject('Erro ao atualizar!')
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
            })
        })
    }
    deleteById(id){
        const sql = "DELETE FROM selecoes WHERE id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if (error) return reject('Erro na exclusão do registro!!')
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
            })
        })
    }

}

export default new SelecaoRepository;