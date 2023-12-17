document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('projetos-link').addEventListener('click', function(e) {
        e.preventDefault();

        const novoConteudo = `
            <div class="bloco entrando" id="projetos">
                <h1>Aba de projetos</h1>
            </div>
            <div class="bloco">
                <span>
                    <div class="texto">
                        <h2>House of Books - Link abaixo</h2>
                        <p><a target="_blank" href="https://github.com/juniorapeles/House-Of-Books">Código fonte do projeto</a></p>
                        <p>Status atual do projeto: Em andamento</p>
                        <p>Prazo de conclusão: 24 de fevereiro de 2024</p>
                        <p>Descrição do projeto:</p>
                        <p>O projeto House of Books é uma API em Java e Spring que utiliza tecnologias abrangentes do universo Java. Esta iniciativa visa proporcionar um aprendizado sólido na linguagem, fugindo da metodologia tradicional de cursos e priorizando o desenvolvimento de habilidades de pesquisa e requisitos ainda não dominados. A proposta é construir um ambiente de imersão no desenvolvimento e na inovação.</p>
                        
                    </div>
                    <div class="texto">
                        <h2>Funções da Biblioteca</h2>
                        <p>A biblioteca oferece uma gama de funcionalidades, incluindo métodos REST que abrangem todas as operações de CRUD para as entidades.</p>
                        <p>Com um foco principal na entidade "livro", as principais funcionalidades englobam:</p>
                        <p>- Inserções e deleções de livros</p>
                        <p>- Atualizações que podem ser feitas com um único tipo de alteração ou várias</p>
                        <p>- Empréstimos de livros com base nos exemplares disponíveis</p>
                        <p>- Devolução de livros</p>
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

    document.getElementById('sobre-link').addEventListener('click', function(e) {
        e.preventDefault();

        const novoConteudo = `
            <div class="bloco entrando">
                <h1>Aba sobre mim</h1>
            </div>
            <div class="bloco " id="sobre">
                <span>
                    <div class="texto">
                        <p><strong>Com apenas 18 anos, já sou um desenvolvedor de software na Itpower Software.</strong></p>
                        <p>Atuo na resolução de chamados e no suporte, prestando serviços para a renomada empresa Mazars. Tenho experiência em projetos diversos, desde a gestão de notas fiscais até o gerenciamento de recursos humanos e documentos.</p>
                        <p>Minha especialidade está no banco de dados SQL Server, onde possuo uma sólida experiência.</p>
                        <p><em>Atualmente, estou imerso no estudo de Java e à procura de oportunidades para aplicar esse conhecimento em projetos desafiadores.</em></p>
                    </div>
                    <div class="texto">
                        <h2>Habilidades Técnicas</h2>
                        <span>
                            Conceitos de Orientação a Objetos (Classes, Objetos, Herança, Encapsulamento, Polimorfismo)
                            Spring Framework (Spring Boot, Spring MVC)
                            Manipulação de Banco de Dados com JPA/Hibernate
                            Desenvolvimento de APIs RESTful
                            Conhecimentos básicos de HTML, CSS e JavaScript
                            Fundamentos de Testes Unitários (JUnit, Mockito)
                            Conhecimento básico em controle de versão (Git)
                            Conhecimento de IDEs como Eclipse, IntelliJ IDEA
                            Compreensão dos princípios básicos de segurança da aplicação
                            Boa compreensão de estruturas de dados e algoritmos básicos
                        </span>
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
                <div class="texto">
                    <span>
                        <h3>E-mail</h3>
                        <p>elijunior.apeles2005@gmail.com</p>
                    </span>
                </div>
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