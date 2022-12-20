<h1 align="center">
    <br>
    <p align="center">DOE SANGUE PET<p>
</h1.>

<p align="center">
<img src= "![CAPA PROJETO](https://user-images.githubusercontent.com/109418568/208764549-edeed592-727b-4720-b887-bb96b48095b2.png)"width="50%" height="50%"/></p>
<br>

<p align="justify"> Sejam muito bem vindos ao meu projeto final, desenvolvido como requisito para a conclusão do curso "Todas em Tech" da {reprograma}.


#  ✨INTRODUÇÃO E OBJETIVO:

<p align="justify">
Doenças, acidentes e cirurgias com perda sanguínea aguda, são os casos com maior urgência de transfusão e a não realização do procedimento pode levar a óbito. A importância da conscientização de tutores e da comunidade corrobora para a mudança no cenário e engrandece a causa animal, causa que precisa da nossa atenção e ajuda. É importante ressaltar que a doação não traz qualquer risco ao doador e salva muitas vidas.



<p align="justify">
A ideia nasce a partir da necessidade da conscientização da comunidade sobre a importância da doação de sangue de pets, resultando em saldo positivo nos bancos de sangue e no pronto atendimento dos animais que necessitam. 

  
##  🔎 SOBRE A API:

    
<p align="justify">
O projeto "Doe Sangue Pet" é voltado para o uso de clínicas veterinárias a fim de facilitar a busca por pets doadores de sangue. A API foi dividida em duas partes, separadas por cachorros e gatos, atendendo aos pré-requisitos para cada animal. Os tutores realizam o cadastro com suas informações e com as informações necessárias dos pets, e as clínicas terão acesso aos animais disponíveis para a realização de doações quando necessário. 

    -  **Cachorros e Gatos** : um espaço de consulta e cadastro de animais que estão aptos a realizar doação de sangue.

    
##  ⚙️ FUNCIONALIDADES:

    
- Listar todos os cadastros de cães e gatos da API;
- Listar cadastros de cães e gatos por meio de filtros;
- Cadastro, atualização e exclusão dos cadastros;
- Autenticação de administradores.

##  💻 MÉTODOS:

<p align="justify">
Desenvolvida utilizando JavaScript e Node.js, uma API que conta com dois CRUDs. Usando a conexão com banco de dados MongoDB e rotas testadas no Insomnia.

    
##  📂 ARQUITETURA MVC
```
   |-📑 .vercel
   |-📑 project.json
   |-📑 README.md
   |
   |- 📁 src
   | |
   | |- 📁 config
   | |- 📑 dataBase.js
   | |-
   | |- 📁 controller
   | |- 📑 authController.js 
   | |- 📑 cachorroController.js
   | |- 📑 gatoController.js
   | |- 📑 userController.js
   | |- 
   | |- 📁 models
   | |- 📑CachorroSchema.js
   | |- 📑GatoSchema.js
   | |- 📑UserSchema.js
   |
   | |- 📁 router
   | |- 📑authRoutes.js
   | |- 📑cachorroRoutes.js
   | |- 📑gatoRoutes.js
   | |- 📑indexRouter.js
   |
   | |- 📑 app.js
   |
   |- 📑 .env
   |- 📑 .env.exemplo
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 server.js
   |- 📑 vercel.json 
     
```

##  👨‍💻 TECNOLOGIAS E PACOTES UTILIZADOS:


**TECNOLOGIAS**

- [ Git/GitHub ](https://github.com/)
- [ Vercel ](https://vercel.com/)
- [ Javascript ](https://www.javascript.com/)
- [ MongoDB Atlas ](https://www.mongodb.com/cloud/atlas)
- [ Node.js ](https://nodejs.org/en/)
- [ VScode ](https://code.visualstudio.com/) 
- [ Insomnia ](https://insomnia.rest/download)

### PACOTES

- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [bcrypt](https://www.npmjs.com/package/bcrypt)   
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  

    
# 🔃 ROTAS
    
## 🔃 ROTAS - AUTENTICAÇÃO
 
| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/all`         | Lista todos os administradores             |
| POST        | `/create`         | Cadastra administrador              |
| POST         | `/login`         | Realiza login do administrador          |
 

## 🔃 ROTAS - CACHORRO

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/cachorro`         | Lista todos os cadastrados de cães             |
| GET          | `/cachorro/:id`     | Filtra os cadastros por ID   |
| POST        | `/cachorro`         | Cadastro dos cães               |
| PATCH          | `/cachorro/:id`         | Atualizar cadastros           |
| DELETE          | `cachorro/:id`     | Deletar um cadastro por ID  |


## 🔃 ROTAS - GATO

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/gato`         | Lista todos os cadastrados de gatos             |
| GET          | `/gato/:id`     | Filtra os cadastros por ID   |
| POST        | `/gato`         | Cadastro dos gatos               |
| PATCH          | `/gato/:id`         | Atualizar cadastros           |
| DELETE          | `gato/:id`     | Deletar um cadastro por ID  |
       

## 🟢 PARA REALIZAR A INSTALAÇÃO NO SEU COMPUTADOR:


1. Primeiro é necessário clonar o seguinte repositório:

    ```bash
    $ git clone https://github.com/julianavirgens88/Doe-Sangue-Pet
     ```

2. Entre na seguinte pasta: 

    ```bash
    $ cd Doe-Sangue-Pet/
    ```
    
3. Para prosseguir, é necessário baixas as dependências: 

   ```bash
    $ npm install
    ```
4. Inicie o projeto com o comando: 

   ```bash
    $ npm run dev
    ```   

<br>

---

## 🚀 IMPLEMENTAÇÕES FUTURAS:

* ⬛ Desenvolver um front-end;
* ⬛ Utilizar API de geolocalização, para refinar as buscas;
* ⬛ Implementar comandos para disparo de e-mails para comunicar tutores de pets cadastrados, sobre possíveis emergências e solicitações de doação;
* ⬛ Implementar informações para conscientização da comunidade acerca da doação de sangue pet e sua importância;
* ⬛ Implementar testes unitários.
    
## 🌈 CONTATO:

<div>
<a href="https://www.instagram.com/eujulianavirgens" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:julianalvirgens@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/julianalvirgens/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>
