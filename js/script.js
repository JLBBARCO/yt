// Oculta partes do site que são mostradas depois de selecionar uma ação
let change1 = document.querySelector("div#change1");
change1.style.display = "none";
let change2 = document.querySelector('div#change2');
change2.style.display = "none";
let change3 = document.querySelector('div#change3');
change3.style.display = "none";
let change4 = document.querySelector('div#change4');
change4.style.display = "none";

// Config de teste
let progresso = 1
let progresso1 = progresso; progresso2 = progresso; progresso3 = progresso;

// Funções
let url = document.getElementById('url');
let opção = document.querySelector('form#preferencia');
opção.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    
    // Obtém a opção selecionada
    let opçãoSelecionada = document.querySelector('input[name="select"]:checked');
    let idOpção = opçãoSelecionada.value;
    
    // Verifica qual opção foi selecionada e executa o que cada uma deve fazer
    if (idOpção == 'assistir') {
        // Mostra a caixa antes oculta, referente a opção
        change1.style.display = "block";

        // Configurações do iframe para mostrar o vídeo
        let iframe = document.querySelector('iframe#video');
        iframe.src = url;
    } else if (idOpção == 'resume') {
        // Mostra a caixa antes oculta, referente a opção
        change2.style.display = 'block';

        // Declara oculta a barra e a porcentagem de download do txt
        txt.style.display = "none";

        // Cria um resumo do vídeo
        let resume = document.querySelector("input#resume");
        
        // Declara que a let txt_download recebe o botão de download do txt
        let txt_download = document.querySelector("input#txt_download");

        // Escuta quando o botão for clicado e chama as funções referentes
        txt_download.addEventListener('click', function(event){
            // Declara que a barra e a porcentagem do download seja mostrada
            let txt = document.querySelector('section#txt');
            txt.style.display = "block";
            
            // Declara que a barra de progresso e a porcentagem sejam referentes ao download
            let carregado1 = document.querySelector("div#carregado1");
            carregado1.style.width = `${progresso1}%`;
            let percent1 = document.querySelector('div#percent1')
            carregado1.style.width = `${progresso1}%`;
            percent1.innerHTML = `${progresso1}%`;
        })
    } else if (idOpção == 'mp3') {
        // Declara que a parte selecionada antes oculta, agora seja mostrada
        change3.style.display = "block";

        // Declara que a barra e a porcentagem de download seja referente ao download real
        let carregado2 = document.querySelector('div#carregado2');
        let percent2 = document.querySelector('div#percent2');
        carregado2.style.width = `${progresso2}%`;
        percent2.innerHTML = `${progresso2}%`;
    } else if (idOpção == 'mp4') {
        // Mostra a parte referente
        change4.style.display = "block";

        // Declara que a barra e a porcentagem do progresso seja referente ao download em tempo real
        let carregado3 = document.querySelector("div#carregado3");
        let percent3 = document.querySelector("div#percent3");
        carregado3.style.width = `${progresso3}%`;
        percent3.innerHTML = `${progresso3}%`;
    };
});