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
