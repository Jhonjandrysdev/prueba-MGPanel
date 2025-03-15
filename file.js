const hamburguer = document.getElementById('hamburguer')
hamburguer.addEventListener('click', () => {
    const nav = document.getElementById('nav')
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none'
    nav.style.transition = 'all 0.5s'
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

data.forEach((photos) => {
    let contain = document.getElementById('section-4')
    let div1 = document.createElement('div') 
    // ESTILOS
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.gap = '15px'
    div1.style.display = 'flex'
    div1.style.flexDirection = 'column'
    // FINALIZA ESTILOS
    contain.appendChild(div)
    div.appendChild(div1)
    div1.innerHTML = `
    <img src='${photos.imagen}' alt='${photos.nombre}'>
    <p id='title-photos'>${photos.nombre}</p>
    <p id='paragraph-photos'> <span>Desde:</span>  $${photos.precio}</p>
    `
})
