// Bibliotecas

// Tags
url = document.getElementById('url');
mp3 = document.getElementById("mp3");
mp4 = document.getElementById("mp4");
resume = document.getElementById("resume");

// Funções
if (mp3 == True) {} else if (mp4 == True) {} else if (resume == True) {};

// Ano
var data = new Date();
var atual = data.getFullYear();
var ano = document.querySelector('div#ano');
ano.innerHTML = `${atual}`;