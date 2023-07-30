
const login = document.getElementById('login');
const appli = document.getElementById('ssn');
const off = document.getElementById('logout');


login.addEventListener('click', ev => {




    fetch('auth/login', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' // Especificamos que estamos enviando datos en formato JSON
        }
    }).then(response => response.json())
        .then((data) => {

            console.info(data)
        })
        .catch(error => {
            console.error('Error al crear el archivo:', error);
        });


});

appli.addEventListener('click', ev => {




    fetch('auth/appl ', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' // Especificamos que estamos enviando datos en formato JSON
        }
    }).then(response => response.json())
        .then((data) => {

            console.info(data)
        })
        .catch(error => {
            console.error('Error al crear el archivo:', error);
        });


});


off.addEventListener('click', ev => {




    fetch('l ', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' // Especificamos que estamos enviando datos en formato JSON
        }
    }).then(response => response.json())
        .then((data) => {

            console.info(data)
        })
        .catch(error => {
            console.error('Error al crear el archivo:', error);
        });


});





