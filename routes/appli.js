const { Router } = require(`express`);
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

const {
    postUsuario,
    getAppli

    } = require("../controllers/applicontrollers");



const router = Router();



router.post('/', postUsuario)

router.get('/red',getAppli);





module.exports = router;