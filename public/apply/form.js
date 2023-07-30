const miFormulario = document.getElementById('login-form');

miFormulario.addEventListener('submit', ev => {

    const formData = new FormData(miFormulario);

    axios.post('/auth/appl',formData).then(response => {
        const {ok} = response.data
        console.info(ok);
        
    }).catch(error => {
        console.error('Error' , error)
    })
   
    
   
});
