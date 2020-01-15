//De onde será "chamada" a biblioteca express -< MiniFramework
//Leve e simples, a preparação do ambiente para desenvolvimento é descomplicada.
//Importar arquivo de rotas
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
//Conexão com o banco de dados -> yarn add mongoose

mongoose.connect('mongodb+srv://thecurrentuser:Mrkiller\"123@cluster0-0wzlk.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	userUnifiedTopology: true,
});

//Informar a aplicação que a comunicação por padrão será feita utilizando a estrutura de dados JSON
//Tem que vir antes, senão o body de requisição não vai funcionar para as rotas
app.use(express.json());
app.use(routes);
app.listen(3333);