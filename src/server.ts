import { app } from './app'

const HOST = process.env.HOST

async function start(): Promise<void> {
  await app.listen({
    host: HOST,
    port: 3333
  })
  console.log('Server is running')
}

start()
