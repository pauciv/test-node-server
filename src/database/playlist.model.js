// sería el model de mongoose
// aquí treaemos los datos de la database, que será MongoDB.

const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

// findAll en mongoose
const getAllPlaylists = /* podríamos simular delay haciéndolo una una promesa */ () => {
    return DB.playlists;
}

const getOnePlaylist = (id) => {
    return DB.playlists.find((playlist) => playlist.id === id);
}

const createNewPlaylist = (newPlaylist) => {
    const isAlreadyAdded = DB.playlists.findIndex((playlist) => playlist.name === newPlaylist.name);

    if (isAlreadyAdded) return;

    DB.playlists.push(newPlaylist);
    saveToDatabase(DB);
}

module.exports = {
    getAllPlaylists,
    getOnePlaylist,
    createNewPlaylist
};
