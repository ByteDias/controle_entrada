import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
// Indica para o express ler body com json
app.use(express.json())
// Indica para o express ler url encoded
app.use(express.urlencoded({ extended: true }))

// Mock
const selecoes = [
    {id: 1, nome: "Brasil", grupo: "G"},
    {id: 2, nome: "Suiça", grupo: "G"},
    {id: 3, nome: "Sériva", grupo: "G"},
    {id: 4, nome: "Camarões", grupo: "G"}
]

let findSelecao = (id)=>{
    return selecoes.filter(selecao => selecao.id == id)
}

// Criando rota padrão
app.get('/', (req, res) => {
    res.send('pagina padrao')
})

// Rota que exibe os itens
app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})
// Rota que recebe o parâmetro id 
app.get('/selecoes/:id', (req, res)=>{
   // let index = req.params.id
    //res.send(findSelecao(index))
    res.json(findSelecao(req.params.id))
})

// Rota que faz o delete do item com o id passado o parâmetro
app.delete('/selecoes/:id', (req, res)=>{
    let index = findSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send('Seleção excluída com sucesso!')

})
// ota para atualização dos dados
app.put('/selecoes/:id', (req, res)=>{
    let index = findSelecao(req.params.id)
    selecoes[index].nome = req.body.nome
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)

})

// Rota que adiciona um novo item
app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).redirect('/selecoes')
})

// Rota que exibe o formulário HTML
app.get('/form-selecao', (req, res)=>{
    res.sendFile(__dirname + '/html/form.html');
})
export default app