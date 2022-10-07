

//constantes



const bloqueProductos = document.getElementById('contenedor-productos')

const carritoContenedor = document.getElementById('carrito-cont')

const vaciarcart = document.getElementById('vaciar-carrito')

const contadorProd = document.getElementById('contadorProd')

//fin constantes

let carrito = [
]

//storage 
/*
document.addEventListener('DOMContentLoaded', () => {
        carrito = json.parse(localStorage.getItem('carrito'))
        subirCompra()
})*/



// agregar productos desde el js, para que en caso de actualizar codigo no se tenga que hacer uno por uno

const productos = async()=>{
    const respuesta = await fetch('/data.json')
    const data = await respuesta.json()

data.forEach((producto) => {
    const contProducto = document.createElement('div')
    contProducto.classList.add('contenedorProducto')
    contProducto.innerHTML = `
    <h4 class="title">${producto.nombre}</h4>
    <img class="imgProducts" src=${producto.img} alt="">
    <p class="price">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="button">Añadir al carrito</button>
    `

    bloqueProductos.appendChild(contProducto)

    
})
const boton = document.getElementById(`agregar${producto.id}`)
boton.addEventListener('click', () => {
        addtocart(producto.id)
    })
}

productos()

//se añade al carrito  en la consola
const addtocart = (prodId) => {
    const agregado = carrito.some (prod => prod.id === prodId)

    if (agregado){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else{
    const items = productos.find((prod) => prod.id === prodId)
    carrito.push(items)
    console.log(carrito)
    }
subirCompra()
}   

//Elimina los productos del carrito
const quitarProducto = (prodId) => {
    const items = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(items)
    carrito.splice(indice, 1)
    subirCompra()
}

//se añade al carrito creando un div por cada prod
const subirCompra = () => {
    carritoContenedor.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p> Precio: ${prod.precio}</p>
        <p> # ${prod.cantidad}</p>
        <button onclick="quitarProducto(${prod.id})" class="botonProducto"><i class="material-symbols-outlined">delete</button>
        `
        carritoContenedor.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorProd.innerText = carrito.length
}

// vacia el carrito y por el bootstrap cierra el modal
vaciarcart.addEventListener('click', () => {
    carrito.length = 0
    subirCompra()
})

