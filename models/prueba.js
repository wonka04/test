
const params = {
    AttributeDefinitions: [
        {
            AttributeName: 'Id',
            AttributeType: 'S',
        },
        {
            AttributeName: 'Nombre',
            AttributeType: 'S',
        },
    ],
    KeySchema: [
        {
            AttributeName: 'Id',
            KeyType: 'HASH',
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5, // Unidades de lectura por segundo
        WriteCapacityUnits: 5, // Unidades de escritura por segundo
    },
    TableName: 'EjemploTabla',
};

dynamoDB.createTable(params, (err, data) => {
    if (err) {
        console.error('Error al crear la tabla:', err);
    } else {
        console.log('Tabla creada correctamente:', data);
    }
});
