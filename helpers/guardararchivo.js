const fs = require('fs');
const currentDate = new Date();
const timestamp = currentDate.toDateString();

// Función para generar un ID único
function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Generar el nombre del archivo con un ID único
const uniqueId = generateUniqueId();

//const namefile = fileName;

const guardarArchivo = async (data, fileName) => {


    await fs.writeFileSync(fileName, JSON.stringify(data));
}




module.exports = {
    guardarArchivo
    

}