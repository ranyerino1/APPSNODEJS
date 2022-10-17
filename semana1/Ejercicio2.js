const express = require('express')

const server = express()

server.get('/', (req, res)=>{
    res.send("hola mundo")
})

server.get('/clientes', (req, res)=>{
    res.send("Pagina de clientes")
})

server.listen(3002, ()=>{
    console.log(`servidor 3002 en ejecucion`)
})
