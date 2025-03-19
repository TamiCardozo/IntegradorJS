document.querySelector("#btnMenu").addEventListener('click',(e) => {
    e.preventDefault();
    document.querySelector("#menu").classList.toggle('active')
})
document.querySelector("#btnCarrito").addEventListener('click',(e) => {
    e.preventDefault();
    document.querySelector("#carrito").classList.toggle('active')
})
document.querySelector("#btnFilter").addEventListener('click',(e) => {
    e.preventDefault();
    document.querySelector("#filtro").classList.toggle('active')
})
document.querySelector("#btnCloseCarrito").addEventListener('click',(e) => {
    e.preventDefault();
    document.querySelector("#carrito").classList.remove('active')
})