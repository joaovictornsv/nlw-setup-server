import { app } from './app'

async function start(): Promise<void> {
  await app.listen({
    port: 3333
  })
  console.log('Server is running')
}

start()
