document.getElementById('projetos-link').addEventListener('click', function(e) {
    e.preventDefault();

    // Novo conteúdo a ser exibido
    const novoConteudo = `
        <div>
            <h2>Novo Título</h2>
        </div>
        <div>
            
        </div>
        <div>
            <p>Este é um novo conteúdo.</p>
        </div>
    `;

    const projeto = document.getElementById('projeto');

    // Adicionando classe para acionar a transição de saída
    projeto.classList.add('saindo');
    setTimeout(() => {
        // Substituindo o conteúdo dentro da main pelo novoConteudo
        projeto.innerHTML = novoConteudo;

        // Removendo a classe para iniciar a transição de entrada
        projeto.classList.remove('saindo');
    }, 300); // Tempo correspondente à duração da transição (300ms no CSS)
});

// Troca do conteúdo quando o ícone de início é clicado
document.getElementById('inicio-link').addEventListener('click', function(e) {
    e.preventDefault();

    // Novo conteúdo para o início
    const novoInicio = `
        <div>
            <h1>Portifolio Web</h1>
        </div>
        <div>
            <img id="minha-foto" src="ASSETS/images/image.jpeg" alt="foto_Junior Apeles O jota">
        </div>
        <div>
            <p>Este é um <span>portifólio</span> feito para demonstração, de minhas habilidades na web.</p>
        </div>
    `;

    const projeto = document.getElementById('projeto');

    // Adicionando classe para acionar a transição de saída
    projeto.classList.add('saindo');
    setTimeout(() => {
        // Substituindo o conteúdo dentro da main pelo novoConteudo
        projeto.innerHTML = novoInicio;

        // Removendo a classe para iniciar a transição de entrada
        projeto.classList.remove('saindo');
    }, 300); // Tempo correspondente à duração da transição (300ms no CSS)
});