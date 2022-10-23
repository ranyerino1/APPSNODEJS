/* const http = require('http')
const host = 'localhost'
const puerto = 3003

const requestlistener=function(req,res) {
    res.writeHead(200)
    Response.apply("esto es un servidor")
}

const server = http.createServer(requestlistener)
server.listen(puerto,host,()=>{
    console.log(`servidor ejecutado sobre http//:${host}:${puerto}`);
})
 */

/* const op = require('./ejercicio1.js')

require('./ejercicio1.js')


op.suma(3,5)
op.resta(3,8)
op.multiplicar(4,6)
op.dividir(5,7)

op.suma(5,7)*/


/* const http = require('http')

function handleServer(req,res) {
res.write('<h1>respuesta del servidor</h1>')
res.end()
}

const server = http.createServer(handleServer).listen(3003) */

const express = require('express')
const app = express()
const port = 3003
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.set('views',__dirname + '/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/datospersonales', (req, res) => {
    res.render('datos_personales')
})

app.get('/contacto', (req, res) => {
  res.render('contacto')
})

app.get('/estudios', (req, res) => {
    res.render('estudios')
})
app.get('/pasatiempo', (req, res) => {
    res.render('pasatiempo')
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
