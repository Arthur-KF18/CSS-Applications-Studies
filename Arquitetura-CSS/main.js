const receita = document.querySelector('[data-receita]');


receita.addEventListener('click', event => {
    function mostraReceita() {
        receita.innerHTML = `
        <details class="receita__botao">
            <summary>Ver Receita</summary>
            <div class="caixa">
                <h1>Tigela de Abacate</h1>
            </div>
        </details>
        
        `
    }

    mostraReceita(receita)
})