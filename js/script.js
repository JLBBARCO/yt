// Bibliotecas

// Tags Importadas
let preferencia = document.querySelector('form#preferencia');
let url = document.getElementById('url');
let change_mp3 = document.querySelector('div#change_mp3');
let change_mp4 = document.querySelector('div#change_mp4');

// Comandos
// Barra de progressão

// Funções
preferencia.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obtém a opção selecionada
    const opcaoSelecionada = document.querySelector('input[name="select"]:checked');

    // Verifica se há uma opção selecionada e exibe o conteúdo relacionado
    if (opcaoSelecionada) {
    const idConteudo = opcaoSelecionada.value;
    document.getElementById(idConteudo).style.display = "block";
    }
});