const formulario = document.querySelector("#formulario")
const nombre = formulario.querySelector("#nombre")
const email = formulario.querySelector("#email")
const mensaje = formulario.querySelector("#mensaje")

formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    const feedbacks = Array.from(formulario.querySelectorAll('.feedback'))
    const success = feedbacks.filter((feed) => feed.classList.contains('success'))
    if(feedbacks.length != success.length){
        feedbacks.filter((feed) => !feed.classList.contains("success")).forEach((feed) => {
            feed.classList.add("error");
            feed.innerText = "Completar información"
        })
    }else{
        feedbacks.forEach((feed) => {
            feed.classList.remove("error");
            feed.classList.remove("success");
            feed.innerText =null
        })
        e.target.reset();
        alert('Mensaje Enviado')
    }
})

nombre.addEventListener('input',(e) => {
    e.preventDefault()
    const {value} = e.target
    const fieldset = e.target.closest('fieldset');
    const feedback = fieldset.querySelector(".feedback")
    feedback.classList.remove('success')
    feedback.classList.remove('error')
    if(value.trim().length <= 3){
        feedback.classList.add('error')
        feedback.innerText = "Debe tener minimo 3 caracteres"
    }else{
        feedback.classList.add('success')
        feedback.innerText = "Campo valido"
    }
})

email.addEventListener('input',(e) => {
    e.preventDefault()
    const {value} = e.target
    const fieldset = e.target.closest('fieldset');
    const feedback = fieldset.querySelector(".feedback")
    feedback.classList.remove('success')
    feedback.classList.remove('error')
    if(value.trim().length <= 8){
        feedback.classList.add('error')
        feedback.innerText = "Debe tener minimo 8 caracteres"
        return feedback
    }
    
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!value.match(re)){
        feedback.classList.add('error')
        feedback.innerText = "Formato del correo invalido" 
        return feedback
    }

    feedback.classList.add('success')
    feedback.innerText = "Campo valido"
    return feedback
})

mensaje.addEventListener('input',(e) => {
    e.preventDefault()
    const {value} = e.target
    const fieldset = e.target.closest('fieldset');
    const feedback = fieldset.querySelector(".feedback")
    feedback.classList.remove('success')
    feedback.classList.remove('error')
    if(value.trim().length <= 8){
        feedback.classList.add('error')
        feedback.innerText = "Debe tener minimo 8 caracteres"
        return feedback
    }
    if(value.trim().length >= 124){
        feedback.classList.add('error')
        feedback.innerText = "Debe tener menos  de 124 caracteres"
        return feedback
    }
    feedback.classList.add('success')
    feedback.innerText = "Campo valido"
    return feedback
})
