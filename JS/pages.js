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
            <div class="bloco entrando" id="sobre">
                <h1>Aba de sobre mim</h1>
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