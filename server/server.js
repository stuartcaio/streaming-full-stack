const express = require('express');
const cors = require('cors');
const Filmes = require('./src/models/Filme');
const app = express();
const porta = 8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/filmesAPI', (req, res) => {
    Filmes.findAll().then((filmes) => {
        res.status(200).json(filmes);
    })
});

app.get('/filmeAPI/:id', (req, res) => {
    Filmes.findByPk(req.params.id).then((filme) => {
        res.status(200).json(filme);
    })
});

app.post('/cadastrar', (req, res) => {
    Filmes.create(req.body).then(() => {
        res.redirect('http://localhost:3000');
    }).catch(() => {
        console.log('Não foi possível cadastrar o filme.');
    });
});

app.get('/excluir/:id', (req, res) => {
    Filmes.findByPk(req.params.id).then((livro) => {
        if(livro){
            livro.destroy({
                where: {id: req.params.id}
            }).then(() => {
                console.log(livro.destroyTime);
                res.redirect('http://localhost:3000');
            })
        }
    })
});

app.post('/editar/:id', (req, res) => {
    Filmes.findByPk(req.params.id).then((livro) => {
        if(livro){
            livro.update({
                titulo: req.body.titulo,
                imagem: req.body.imagem,
                diretor: req.body.diretor
            }).then(() => {
                res.redirect('http://localhost:3000');
            })
        }
    })
})

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta}.`);
});