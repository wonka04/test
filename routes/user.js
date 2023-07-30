const { Router } = require(`express`);
const { check } = require("express-validator");

const {
    postUsuario, getLogins

} = require("../controllers/logincontrollers");



const router = Router();


router.post('/', postUsuario);
router.get('/red', getLogins);











module.exports = router;