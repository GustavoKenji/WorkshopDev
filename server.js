//Utilizando express para criar e configurar o server
const express = require("express");
const server = express();

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: " Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
    url: "https://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercícios",
    category: "Saúde",
    description: " Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
    url: "https://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditação",
    category: "Saúde Mental",
    description: " Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
    url: "https://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
    title: "Karaokê",
    category: "Entretenimento",
    description: " Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu",
    url: "https://rocketseat.com.br"
  },
];

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));

//configuração nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: server,
  noCache: true,
});

// rota '/' e requisição do cliente para responder
server.get("/", function(req, res){

  const reversedIdeas = [...ideas].reverse();

  const lastIdeas = [];
  for(let idea of reversedIdeas) {
    if(lastIdeas.length < 2) {
      lastIdeas.push(idea);
    }
  }

  return res.render("index.html", { ideas: lastIdeas });
});

server.get("/ideias", function(req, res) {
  const reversedIdeas = [...ideas].reverse();

  return res.render("ideias.html", { ideas: reversedIdeas });
});

//Server hospedado na porta 3000
server.listen(3000);