# DO WHILE 2020 - Desafio 2

#### Algumas instruções


**Instalar depêndencias:**

```

npm install ou yarn

```

**Para criar as chaves para seguraça:**

```

openssl genrsa -out private-key.pem 2048
openssl rsa -in private-key.pem -pubout -out public-key.pem

```

Não esquece de colocar os ```\n``` nas quebras de linha e quando vor add no .env deixa entre aspas duplas ```""```.

**Executar:**

```

yarn dev:server

```

**Testar aplicação:**

Na raiz do projeto que um arquivo *Insomnia.json* é só importar no Insomnia para conseguir testar.

Caso não tenha Insomnia as rotas são

* **http://localhost:3333/** => Para testar se o server está no ar. (Rota livre)
* **http://localhost:3333/generatorJWT** => Para criar um token. (Rota livre, não tem parâmetro)
* **http://localhost:3333/message** => Para criar um token. (Rota Privada precisa do token, não tem outro parâmetro)

### Agradecimentos

Agradeço a toda equipe do Do While parabéns por tudo que vocês estão fazendo, vocês transformarão minha vida!
