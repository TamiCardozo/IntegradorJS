
export function renderCart(){
    const storage = localStorage.getItem('carrito') ?? null
    let carrito = [];
    if(storage) carrito = JSON.parse(storage)
    const items = document.querySelector("#carrito ul")
    items.innerHTML = null
    for (const {animal,cantidad} of carrito) {
        const element = document.createElement("li");
        element.innerHTML = `<picture><img src="imagenes/${animal.imagen}" alt="foto del perro ${animal.raza} ${animal.nombre}"></picture>`
        element.innerHTML += `<dl><dt>${animal.raza}</dt><dd>$${new Intl.NumberFormat("es-AR").format(animal.precio * cantidad)}</dd></dl>`
        const elementForm = document.createElement("form")
        const quantity = document.createElement("fieldset")
        const btnQuantityAdd = document.createElement("button")
        const btnQuantityRemove = document.createElement("button")
        const quantityOut = document.createElement("output")
        const btnRemove = document.createElement("button")
        btnQuantityRemove.innerHTML = "-"
        btnQuantityAdd.innerHTML = "+"
        quantityOut.innerHTML = cantidad
        btnQuantityAdd.addEventListener('click',() => addCart(animal))
        btnQuantityRemove.addEventListener('click',() => removeQuantity(animal))
        btnRemove.addEventListener('click',() => removeElement(animal))
        btnRemove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`
        btnQuantityRemove.setAttribute('type',"button")
        btnQuantityAdd.setAttribute('type',"button")
        btnRemove.setAttribute('type',"button")
        btnRemove.setAttribute('role',"remove")
        quantity.appendChild(btnQuantityRemove)
        quantity.appendChild(quantityOut)
        quantity.appendChild(btnQuantityAdd)
        elementForm.appendChild(quantity)
        elementForm.appendChild(btnRemove)
        element.append(elementForm)
        items.append(element)
    }  
}

export function addCart(animal){
    const storage = localStorage.getItem('carrito') ?? null
    let carrito = [];
    if(storage) carrito = JSON.parse(storage)
    
    if(carrito.length == 0){
        carrito.push({animal,cantidad:1})
        localStorage.setItem('carrito',JSON.stringify(carrito))
        return renderCart()
    }
    const exist = carrito.find((item) => item.animal.id == animal.id)

    if(!exist){
        carrito.push({animal,cantidad:1})
        localStorage.setItem('carrito',JSON.stringify(carrito))
        return renderCart()
    }

    carrito = carrito.map((item) => {
        if(item.animal.id == animal.id){
            item.cantidad += 1
        }
        return item
    })

    localStorage.setItem('carrito',JSON.stringify(carrito))
    return renderCart()
}

export function removeQuantity(animal){
    const storage = localStorage.getItem('carrito') ?? null
    let carrito = [];
    if(storage) carrito = JSON.parse(storage)

    carrito = carrito.map((item) => {
        if(item.animal.id == animal.id){
            item.cantidad -= 1
        }
        return item
    }).filter(({cantidad}) => cantidad >= 0)

    localStorage.setItem('carrito',JSON.stringify(carrito))
    return renderCart()
}

export function removeElement(animal){
    const storage = localStorage.getItem('carrito') ?? null
    let carrito = [];
    if(storage) carrito = JSON.parse(storage)
    carrito = carrito.filter((item) => item.animal.id != animal.id)
    localStorage.setItem('carrito',JSON.stringify(carrito))
    return renderCart()
}