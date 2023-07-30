const { validationResult } = require("express-validator");
const Usuario = require(`../models/userAdmin`);

const validarCampos = (req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    next();

}

const requiereLogin = async(req, res, next) => {
  const {user} = req.body;
  const {usuario, autorizado} = req.session;

  const usuarios = await Usuario.findOne({ user });

  
    
    if (autorizado  === true  ) {
      // El usuario ha iniciado sesión, permitir acceso a la siguiente ruta
      next();
    } else {
      res.redirect('../login'); // Redireccionar al usuario a la página de inicio de sesión
    }
  }


module.exports = {
    validarCampos,
    requiereLogin
}