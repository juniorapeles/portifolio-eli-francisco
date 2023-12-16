document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('projetos-link').addEventListener('click', function(e) {
        e.preventDefault();

        const novoConteudo = `
            <div class="bloco entrando" id="projetos">
                <h1>Aba de projetos</h1>
            </div>
        `;

        const main = document.querySelector("main");

        main.classList.add('saindo');
        setTimeout(() => {
            main.innerHTML = novoConteudo;
            main.classList.remove('saindo');

            setTimeout(() => {
                const novoBloco = main.querySelector(".bloco");
                novoBloco.classList.remove('entrando');
            }, 50);
        }, 300);
    });

    document.getElementById('sobre-link').addEventListener('click', function(e) {
        e.preventDefault();

        const novoConteudo = `
            <div class="bloco entrando">
                <h1>Aba sobre mim</h1>
            </div>
            <div class="bloco " id="sobre">
              
                <span>
                    <div class="texto">
                        <p>Atualmente tenho 18 anos, sou desenvolvedor de software da Itpower Software</p>
                        <p>Atendo a chamados e Sustain prestando serviços para a empresa Mazars, atuei em projetos desde gerenciamentos de notas fiscais, até Registros humanos, gerenciamentos de documentos e etc.</p>
                        <p>Tenho experiência sólida com o banco de dados SQL Server.</p>
                        <p>estou focado estudando Java e procuro oportunidades para trabalhar com a linguagem.</p>
                    </div>
                </span>
            </div>
        `;

        const main = document.querySelector("main");

        main.classList.add('saindo');
        setTimeout(() => {
            main.innerHTML = novoConteudo;
            main.classList.remove('saindo');

            setTimeout(() => {
                const novoBloco = main.querySelector(".bloco");
                novoBloco.classList.remove('entrando');
            }, 50);
        }, 300);
    });

    document.getElementById('fale-link').addEventListener('click', function(e) {
        e.preventDefault();

        const novoConteudo = `
            <div class="bloco entrando" id="fale">
                <h1>Aba de Fale Comigo</h1>
            </div>
            <div class="bloco">
                <div class="texto"></div>
            </div>
        `;

        const main = document.querySelector("main");

        main.classList.add('saindo');
        setTimeout(() => {
            main.innerHTML = novoConteudo;
            main.classList.remove('saindo');

            setTimeout(() => {
                const novoBloco = main.querySelector(".bloco");
                novoBloco.classList.remove('entrando');
            }, 50);
        }, 300);
    });
});