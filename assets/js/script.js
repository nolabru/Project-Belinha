function abrirMenu()
{
    const menu = document.querySelector('.menu')
    const navegacao = document.querySelector('.navegacao')
    menu.classList.toggle('active')
    navegacao.classList.toggle('active')
}

window.sr = ScrollReveal({ reset: true,
    duration: 1000,
    delay: 250
});

sr.reveal('.imgContent2',{ origin: 'left' });
