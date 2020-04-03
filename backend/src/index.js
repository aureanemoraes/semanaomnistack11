const express = require('express'); // importing express
const routes = require('./routes');
const cors = require('cors');

const app = express(); // defining an express application

app.use(cors());

app.use(express.json()); // permitir que a aplicação reconheça requisições em json

app.use(routes);

app.listen('3333'); // defining application port

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar informação do back-end
  * POST: Criar uma inforamção no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query: parâmetros nomeados enviados na rota após '?' (filtros, paginação)
   * ex.: ?page=2&name=diego
   * 
   * Route: parâmetros utilizados para identificar recursos
   * ex.: /users/:id
   * 
   * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
   */

   /** 
    * SQL : Banco de dados Relacionais
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: pacote oficial do banco de dados para node
     * ex.: SELECT * FROM users;
     * 
     * Query Builder: escrevendo as querys com uma linguagem de programação
     * ex.; table('users').select('*').where();
     * KNEX.JS
     */