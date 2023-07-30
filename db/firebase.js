var admin = require("firebase-admin");

var serviceAccount = require('../controllers/curso-nodejs-392817-firebase-adminsdk-wjzcd-8371b609b2.json');
let dbfirebase;
let dbfirestone;

try {

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://curso-nodejs-392817-default-rtdb.firebaseio.com"
    });

    dbfirebase = admin.database();
    dbfirestone = admin.firestore();



} catch (error) {


}


module.exports = {
    dbfirebase,
    dbfirestone
    

}
