const hamburguer = document.getElementById('hamburguer')
const infoHome = document.getElementById('info-home')
hamburguer.addEventListener('click', () => {
    const nav = document.getElementById('nav')
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none'
    nav.style.transition = 'all 0.6s ease-in-out'

    if (window.innerWidth < 768) {
        infoHome.style.display = infoHome.style.display === 'block' ? 'none' : 'block'
    }
})
const data = [
    {
        imagen: '/images/cuadro1.png',
        nombre: 'Pajaro Pinocho - 14x10" ',
        precio: '95.00'
    },
    {
        imagen: '/images/cuadro2.png',
        nombre: 'Sala Eco - 14x10" ',
        precio: '95.00'
    }, {
        imagen: '/images/cuadro3.png',
        nombre: 'Arbol Pinocho - 14x10"',
        precio: '95.00'
    },
]

let div = document.createElement('div')
let button = document.createElement('button')
let containbutton = document.createElement('a')
containbutton.appendChild(button)
button.id = 'button-buy'
containbutton.style.display = 'flex'
containbutton.style.justifyContent = 'center'
button.innerHTML = 'Ver todos los cuadros'
let contain = document.getElementById('section-4')

data.forEach((photos) => {
    let div1 = document.createElement('div') 
    // ESTILOS
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.gap = '15px'
    div1.style.display = 'flex'
    div1.style.flexDirection = 'column'
    div1.style.alignItems = 'center'

    if (window.innerWidth >= 768 && window.innerWidth <= 900) {
        div.style.flexDirection = 'column'
        div.style.alignItems = 'center'
    }else if (window.innerWidth >= 1000 && window.innerWidth <= 1400) {
        div.style.flexDirection = 'column'
    }else{
        div.style.flexDirection = 'row'
    }
    // FINALIZA ESTILOS
    contain.appendChild(div)
    div.appendChild(div1)
    div1.innerHTML = `
    <img src='${photos.imagen}' alt='${photos.nombre}'>
    <p id='title-photos'>${photos.nombre}</p>
    <p id='paragraph-photos'> <span>Desde:</span>  $${photos.precio}</p>
    `
})
contain.appendChild(containbutton)
