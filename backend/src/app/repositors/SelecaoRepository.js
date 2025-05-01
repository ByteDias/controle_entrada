import { consult } from "../database/conexao.js"

class SelecaoRepository{
    // CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return consult(sql, selecao, "Erro ao inserir!")
    }
    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return consult(sql, 'Erro ao encontrar!')
    }

    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id = ?"
        return consult(sql, id, 'Erro ao encontrar!') 
        
    }
    updadeById(selecao, id){
        const sql = "UPDATE selecoes SET ? WHERE id = ?;"
        return consult(sql, [selecao, id], "Erro ao atualizar!")
    }
    deleteById(id){
        const sql = "DELETE FROM selecoes WHERE id = ?"
        return consult(sql, id, 'Erro ao deletar!')
    }

}

export default new SelecaoRepository;