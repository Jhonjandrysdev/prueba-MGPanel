const hamburguer = document.getElementById('hamburguer')
hamburguer.addEventListener('click', () => {
    const nav = document.getElementById('nav')
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none'
})