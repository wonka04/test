const miFormulario = document.querySelector('#new-account');

const url = ( window.location.hostname.includes('localhost') )
            ? process.env.URLDES
            : process.env.URLPROD;


miFormulario.addEventListener('submit', ev => {
    ev.preventDefault();
    const formData = {};

    for( let el of miFormulario.elements ) {
        if ( el.name.length > 0 ) 
            formData[el.name] = el.value
    }


    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json' // Especificamos que estamos enviando datos en formato JSON
        },
        body: JSON.stringify(formData) // Convertimos el objeto a una cadena JSON para enviarlo en el cuerpo
      };

    

    

      fetch( url + 'up/newaccount' , requestOptions)
      .then( resp => resp.json() )
      .then( ({errores}) => {
        console.error(errores)
        
          if( errores ){
            return window.location = "../login"
          }
          alert("Usuario registrado correctamente")
          window.location = "../login"  
          
      })
      .catch( err => {
          console.log(err)
      })
    
});