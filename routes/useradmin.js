const { Router } = require(`express`);
const { check } = require("express-validator");
const { loginUser, postUser, userLogueado, userOff } = require("../controllers/accederController");
const { requiereLogin } = require("../middlewares/validar-campos");




const router = Router();


// router.post('/',[

//     check('password',`El password no es valido`).isLength({min:6}),
//     check('correo',`El correo no es valido`).isEmail(),
//     //check('rol',`El correo no es valido`).isIn([`ADMIN_ROLE`,`USER_ROLE`]),
//     validarCampos
// ], postUsuario);

router.post('/entrar',loginUser);
// Get content endpoint
router.get('/content',[requiereLogin], userLogueado);

router.post('/logout',userOff);

router.post('/newaccount', postUser);



    








module.exports = router;