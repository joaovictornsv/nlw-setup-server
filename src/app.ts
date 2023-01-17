import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify()

app.register(cors)

app.get('/', () => {
  return { message: 'Hello, World!' }
})

export { app }
