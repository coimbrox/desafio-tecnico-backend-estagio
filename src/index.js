const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());


//create empty array for store 
const queue = [];
const users = [];

// criei a constante user para receber os valores do insomnia e estou fazendo o push dela na memória do array
app.post('/register', (request, response) => {

  const { name, email, gender } = request.body;

  const user = { id: uuid(), name, email, gender }

  userss.push(user);

  return response.json(users);
});

//buscar no array e fazer alterações no projeto e setando status code
app.put('/register/:id', (request, response) => {
  const { id } = request.params;
  const { name, email, gender } = request.body;

  const userEmail = user.findEmail(user => user.email === email);

  if (userEmail < 0) {
    return response.status(400).json({ error: 'Project Not Found' })
  }

  const user = {
    name,
    email,
    gender,
  };

  users[userEmail] = user;

  return response.json(user);
});

app.delete('/register/:id', (request, response) => {
  const { id } = request.params;

  const userEmail = users.findEmail(user => user.email === email);

  if (userEmail < 0) {
    return response.status(400).json({ error: 'Project Not Found' })
  }

  users.splice(userEmail, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('Back-end Iniciado');
});