//configurar Back End
//Criar duas variáveis - Consumir o framework express e instancia
const express = require('express');
const app = express();

//Rota para os arquivos estaticos (public)
app.use(express.static('public'));

//Qual porta ira rodar
app.listen(3000, () => {
    console.log(`Servidor rodando no link http://localhost:3000`)
})