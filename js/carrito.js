import { renderCart } from "./actions.js"
const storage = localStorage.getItem('carrito') ?? null
let carrito = [];
if(storage) carrito = JSON.parse(storage)
const items = document.querySelector("#carrito ul")
const btnRemoveAll = document.querySelector("#btnRemoveAll")

btnRemoveAll.addEventListener('click',(e) =>{
    e.preventDefault();
    localStorage.setItem('carrito',JSON.stringify([]))
    renderCart()
})

renderCart()