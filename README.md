# Processo Seletivo: Backend Estágio

Olá! Neste desáfio você deve criar uma API RPC (você não precisa saber o que é RPC, mas se quiser: https://medium.com/lfdev-blog/e-agora-api-rest-ou-rpc-c24664d4755b) para facilitar o gerenciamento de uma fila de pessoas! Sua API deve conter os seguintes endpoints:

    - `/createUser` - Cadastra usuário;
    - `/addToLine` - Coloca um usuário na última posição da fila;
    - `/findPosition` - Retorna a posição de um usuário a partir de seu email
    - `/showLine` - Lista os usuários da fila e suas respectivas posições;
    - `/filterLine` - Lista os usuários filtrados a partir de um parâmetro;
    - `/popLine` - Tira a pessoa na primeira posição da fila;

É importante notar que a API deve ser feita com Javascript (Node.js) e os dados devem ser salvos em arquivos JSON ou em memória (volateis à execução da aplicação).

## Endpoints:
### Cadastrar usuário

Esse metódo deve receber nome e email do usuário e retornar id, nome e email e gênero.

### Adicionar a fila

Esse metódo deve receber o id do usuário a ser adicionado à fila e deve retornar a posição em que ele está na fila

### Busca usuário na fila

Esse metódo deve receber o email de um usuário e retornar a posição dele na fila

### Ver fila

Esse metódo deve retornar uma lista de usuários (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última)

### Filtrar fila

Esse metódo deve receber um gênero de usuário e retornar uma lista de usuários com aquele gênero (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última)

### Tira da fila

Esse metódo deve retirar da fila a pessoa na primeira posição e retorna-la.

## Se você fizer é um plus
    
    - Teste unitário
    - Typescript
    - Documentação
    - Validações como garantir que uma pessoa não vai ser adicionada à fila múltiplas vezes


## Entrega

Ao finalizar nos envie os seguintes itens:
    
    - Acesso ao repositório (se o repositório for privado no Github, dar permissão de acesso para @dygufa)
    - Exemplo de requisição de criação de usuário;
    - Exemplo de requisição de adição à fila;
    - Exemplo de requisição de ver fila;
    - Exemplo de requisição de retirar primeiro da fila;

Os exemplos de requisição devem ser enviados no formato:  nome do endpoint, metódo HTTP referente à chamada e body. Também é possível utilizar uma Postman (https://www.getpostman.com/) collection para organizar os exemplos, porém não é um requisito.

É isso, vlws flws! :)