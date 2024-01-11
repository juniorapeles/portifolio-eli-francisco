document.addEventListener('DOMContentLoaded', function () {
    const elementosAnimar = document.querySelectorAll('.animacao');
    elementosAnimar.forEach(function (elemento) {
        elemento.classList.add('aparecer');
    });
});

function toggleContent() {
    const titulo = document.querySelector('.homeSection h2');
    const habilidadesContainer = document.querySelector('.skills-container');

    // Verifica se o modo escuro está ativado
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Define os textos conforme o modo atual
    if (isDarkMode) {
        titulo.textContent = 'Desenvolvedor Full Stack';
        habilidadesContainer.innerHTML = '<span>HTML/CSS/Bootstrap</span><span>Java</span><span>Spring</span><span>Jpa</span><span>JUnit</span><span>Mockito</span>';
    } else {
        titulo.textContent = 'Desenvolvedor Backend';
        habilidadesContainer.innerHTML = '<span>Coldfusion</span><span>SqlServer</span><span>HTML/CSS/Bootstrap</span><span>Java</span><span>Spring</span><span>Jpa</span><span>JUnit</span><span>Mockito</span>';
    }
}

function mudaFrame(secao) {
    const homeSection = document.querySelectorAll('.homeSection');
    const projetosSection = document.getElementById('projetosSection');
    const contatoSection = document.getElementById('contatoSection');

    if (projetosSection && contatoSection) {
        projetosSection.style.display = 'none';
        contatoSection.style.display = 'none';

        if (secao === 'projetos') {
            projetosSection.style.display = 'block';
            // Se estiver na página 'projetos', oculta os elementos 'homeSection'
            homeSection.forEach(elemento => {
                elemento.style.display = 'none';
            });
        } else if (secao === 'contato') {
            contatoSection.style.display = 'block';
            // Se estiver na página 'contato', oculta os elementos 'homeSection'
            homeSection.forEach(elemento => {
                elemento.style.display = 'none';
            });
        } else {
            // Se estiver em outra página, mostra os elementos 'homeSection'
            projetosSection.style.display = 'none';
            contatoSection.style.display = 'none';
            homeSection.forEach(elemento => {
                elemento.style.display = 'block';
            });
        }
    } else {
        console.error("Algum dos elementos não foi encontrado!");
    }
}

const body = document.body;
const footer = document.querySelector('footer');

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

const darkModeButton = document.createElement('button');
darkModeButton.innerHTML = 'Modo Escuro';
darkModeButton.classList.add('btn', 'btn-dark', 'fixed-bottom', 'mb-3', 'me-3');
darkModeButton.addEventListener('click', function () {
    toggleDarkMode();
    toggleContent(); // Adiciona esta linha para ajustar o conteúdo quando muda para o modo escuro
});

