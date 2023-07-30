const miFormulario = document.querySelector('#acceder-form');
const mensajeUsuarioRegistrado = document.querySelector('#mensajeUsuarioRegistrado')


const url = ( window.location.hostname.includes('localhost') )
            ? process.env.URLDES
            : process.env.URLPROD;



miFormulario.addEventListener('submit', ev => {
    ev.preventDefault();
    const formData = {};

    for (let el of miFormulario.elements) {
        if (el.name.length > 0)
            formData[el.name] = el.value
    }


    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json' // Especificamos que estamos enviando datos en formato JSON
        },
        body: JSON.stringify(formData) // Convertimos el objeto a una cadena JSON para enviarlo en el cuerpo
    };





    fetch(url + 'in/entrar', requestOptions)
        .then(resp => resp.json())
        .then(({ ok }) => {
            

         


        })
        .catch(err => {
            console.log(err)
        })

});