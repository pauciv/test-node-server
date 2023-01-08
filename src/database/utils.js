// esto con la base de datos no hay que hacerlo

const fs = require('fs');

const saveToDatabase = (DB) => {
    fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), {
        encoding: 'utf8'
    });
}

module.exports = { saveToDatabase };