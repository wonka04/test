const { response, request } = require(`express`);

const axios = require('axios');
const { guardarArchivo, LeerArchivo } = require('../helpers/guardararchivo');



const postUser = async (req = request, res = response) => {

    const { user, pass } = req.body;
    let valor;

    try {

             

        // valor = await usuario.save()

        res.status(200).json({
            ok: true,
            msg: 'Registro exitoso',

        });

    } catch (error) {
        res.status(409).json({
            ok: false,
            msg: 'no se pudo registral',
            error,
            errores: true
        });

    }


}


const loginUser = async (req, res) => {

    const { user, pass } = req.body;





    try {

     


        if (!usuario) {

            return res.status(404).json({
                msg: 'Usuario / Password no son correctos - correo',
                ok: false

            });

        }


        if (pass != usuario.pass) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password',
                ok: false
            });
        }



        req.session.usuario = usuario.id;
        req.session.autorizado = true;



        axios.get('http://localhost:8080/in/content')
        .then(response1 => {
            // Respuesta del primer servidor
            
            res.status(200).json({
                ok: true
            })
        
        })




    } catch (error) {

        res.status(400).json({
            ok: true,
            msg: 'No se puede encontrar',
            error

        })

    }
}

const userLogueado = (req, res) => {


    res.redirect('../datos');


}

const userOff = (req, res) => {

    req.session.destroy();
    
    res.redirect('../login');


}







module.exports = {
    postUser,
    loginUser,
    userLogueado,
    userOff

}