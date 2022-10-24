const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {titulo: 'Descripcion de mi perfil' ,
    descripcion: 'Estudiante en Analisis y desarrollo de sismtemas de informacion, Servicio Nacional de Aprendizaje Sena, VI Trimestre.Me interesa aprender y adquirir conocimientos durante el desarrollo de mi formacion.'})
})

router.get('/datospersonales', (req, res) => {
    res.render('datos_personales', {titulo: 'Descripcion de mi perfil' ,
    descripcion: 'Estudiante en Analisis y desarrollo de sismtemas de informacion, Servicio Nacional de Aprendizaje Sena, VI Trimestre.Me interesa aprender y adquirir conocimientos durante el desarrollo de mi formacion.'})
})

router.get('/contacto', (req, res) => {
  res.render('contacto', {titulo: 'Descripcion de mi perfil' ,
  descripcion: 'Estudiante en Analisis y desarrollo de sismtemas de informacion, Servicio Nacional de Aprendizaje Sena, VI Trimestre.Me interesa aprender y adquirir conocimientos durante el desarrollo de mi formacion.'})
})

router.get('/estudios', (req, res) => {
    res.render('estudios', {titulo: 'Descripción de mi perfil academico.' ,
    descripcion: 'Termine mi primaria y bachillerato en el colegio Jose Mati I.E.D, el colegio tenia alianza con el sena por lo cual tambien me gradue del colegio con un titulo de tecnico en programacion de software para posteriormentecontinuar con el teclogo en analisis y desarrollo de sistemas de informacion en el Servicio Nacional de Aprendizaje Sena'})
})
router.get('/pasatiempo', (req, res) => {
    res.render('pasatiempo', {titulo: 'Descripción de mis pasatiempos.' ,
    descripcion: 'En mis tiempos libres principal mente Hago deporte  ojugar videojuegos que involucren estrategia y trabajo en equipo, tambien ver series normalmente de origen japones con subtitulos y leer cosas de mi interes tales como libros de comedia, terror, suspenso o de filosofia'})
})
 


module.exports = router;