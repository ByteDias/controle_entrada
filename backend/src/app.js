import express from 'express'
import routes from './routes.js'

const app = express()

// Indica para o express ler JSON no body
app.use(express.json())

// Usar o Router
app.use(routes)

export default app
