import app from "./src/app.js";

const PORT = 8081

   // Escutador da porta
   app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})




