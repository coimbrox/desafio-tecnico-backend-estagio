const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());


//create empty array for store 
const users = [];

// I created the user constant to receive the insomnia values ​​and I'm pushing it into the array's memory
app.post('/createUser', (request, response) => {

  const { name, email, gender } = request.body;

  const user = { id: uuid(), name, email, gender }

  users.push(user);

  return response.json(users);
});

//search the array and make changes to the project and setting status code
app.put('/search/:email', (request, response) => {
  const { email } = request.params;

  const userEmail = users.findIndex(user => user.email === email);

  if (userEmail < 0) {
    return response.status(400).json({ error: 'Email Not Found' })
  }


  return response.json(users[userEmail]);
});

app.delete('/delete/:email', (request, response) => {
  const { email } = request.params;

  const userEmail = users.findIndex(user => user.email === email);

  users.splice(userEmail, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('Back-end Iniciado');
});

// queue

const queue = [];

app.post('/addToLine/:email', (request, response) => {
  const { email } = request.params;

  const userEmail = users.findIndex(user => user.email === email);

  if (userEmail < 0) {
    return response.status(400).json({ error: 'Email Not Found' })
  }


  const UserAdd = queue.push(users[userEmail]);
  return response.json({ queue });

});

function AddQueue() {

}
