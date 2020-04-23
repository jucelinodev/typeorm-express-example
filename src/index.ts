import server from './server'

const PORT = process.env.PORT || 3000

function main() {
  server.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
  })
}

main()
