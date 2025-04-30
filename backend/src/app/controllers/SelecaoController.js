class SelecaoController {

    index(req, res) {
        const sql = "SELECT * FROM selecoes;"
        conexao.query(sql, (error, result) => {
             if (error) {
                 res.status(404).json({ "error": error})
             } else {
                 res.status(200).json(result)
             }
        })
     }
    show(){}
    store(){}
    update(){}
    delete(){}

}

// padrão Singleton
export default new SelecaoController()