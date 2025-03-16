// Tags Importadas
let opção = document.querySelector('form#preferencia');
let url = document.getElementById('url');
let change1 = document.querySelector("div#change1");
let change2 = document.querySelector('div#change2');
let change3 = document.querySelector('div#change3');
let change4 = document.querySelector('div#change4');
let resume = document.querySelector("input#resume");
let carregado = '';
let percent = '';

// Comandos
change1.style.display = "none";
change2.style.display = "none";
change3.style.display = "none";
change4.style.display = "none";

// Config Padrão
let progresso = 0;
let download = 0;

// Funções
opção.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obtém a opção selecionada
    let opçãoSelecionada = document.querySelector('input[name="select"]:checked');
    let idOpção = opçãoSelecionada.value;

    // Verifica qual opção foi selecionada e executa o que cada uma deve fazer
    if (idOpção == 'assistir') {
        change1.style.display = "block";
        let iframe = document.querySelector('iframe#video');
    } else if (idOpção == 'resume') {
        change2.style.display = 'block';
        let txt = document.querySelector('section#txt'); // Chama a section#id txt que contém a barra de download do txt
        txt.style.display = "none";
        let txtdownload = document.querySelector("input#txtdownload");
        txtdownload.addEventListener('click', function(event){
            txt.style.display = "block";
            carregado = document.querySelector("div#carregado1");
            carregado.style.width = `${progresso}%`;
            percent = document.querySelector('div#percent1')
            percent.innerHTML = `${progresso}%`;
        })
    } else if (idOpção == 'mp3') {
        change3.style.display = "block";
        carregado = document.querySelector('div#carregado2');
        percent = document.querySelector('div#percent2');
        while (download == true) {
            let mp3 = document.querySelector("input#mp3");
        };
    } else if (idOpção == 'mp4') {
        change4.style.display = "block";
        carregado = document.querySelector("div#carregado3");
        percent = document.querySelector("div#percent3");
    } else {
        window.alert('Selecione um campo para continuar');
    };
    carregado.style.width = `${progresso}%`;
    percent.innerHTML = `${progresso}%`;
});