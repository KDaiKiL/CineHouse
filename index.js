const express = require('express');
const app = express();
const acoesCine = require('./acoesCine/cine')
const catalogo = require('./acoesCine/catalogo')
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Seja bem vindo ao CineHouse!!</h1>')
});

app.get('/filmes', (req, res) => {
    res.send('<h2>Temos os seguintes filmes registrados: </h2><br> >> ' + acoesCine.listarTodosOsFilmes(catalogo))
});

app.get('/filmes/emCartaz', (req, res) => {
    res.send('<h2>Temos os seguintes filmes em estreia:</h2><br> >> ' + acoesCine.listarFilmesEmCartaz(catalogo))
});

app.get('/filmes/longaDuracao', (req, res) => {
    res.send('<h2>Os filmes mais demorados da lista são:</h2><h6>(Com mais de duas horas de duração)</h6><br> >> ' + acoesCine.listarFilmesEmLongaDuracao(catalogo))
});

app.post('/filmes', (req, res) => {
    catalogo.push(req.body)
    res.json(catalogo)
});

app.put('/filmes', (req, res) => {
    let { codigo } = req.body
    acoesCine.alterarStatus(catalogo, codigo)
    res.json(catalogo)
});

app.delete('/filmes', (req, res) => {
    let { codigo } = req.body
    let filmPosition = catalogo.findIndex(filme => filme.codigo == codigo)
    if(filmPosition != -1) {
        catalogo.splice(filmPosition, 1)
    }
    res.json(catalogo)
});

app.listen(9000, () => {
    console.log('Server rodando..')
});