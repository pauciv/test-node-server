// sería el model de mongoose
// aquí treaemos los datos de la database, que será MongoDB.

const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

// findAll en mongoose
const getAllPlaylists = /* podríamos simular delay haciéndolo una una promesa */ () => {
    return DB.playlists;
}

const getOnePlaylist = (playlistId) => {
    const playlist = DB.playlists.find((playlist) => playlist.id === playlistId);
    if (!playlist) return;
    return playlist;
}

const createNewPlaylist = (newPlaylist) => {
    const isAlreadyAdded = DB.playlists.findIndex((playlist) => playlist.name === newPlaylist.name) > -1;
    if (isAlreadyAdded) return;

    DB.playlists.push(newPlaylist);
    saveToDatabase(DB);
    return newPlaylist;
}

const updateOnePlaylist = (playlistId, changes) => {
    const indexToUpdate = DB.playlists.findIndex((playlist) => playlist.id === playlistId);

    if (indexToUpdate === -1) return;

    const updatedWorkout = {
        ...DB.playlists[indexToUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString('en-US', { timezone: 'UTC' })
    }

    DB.playlists[indexToUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
}

const deleteOnePlaylist = (playlistId) => {
    const indexToDelete = DB.playlists.findIndex((playlist) => playlist.id === playlistId);

    if (indexToDelete === -1) return;

    DB.playlists.splice(indexToDelete, 1);
    saveToDatabase(DB);
}

module.exports = {
    getAllPlaylists,
    getOnePlaylist,
    createNewPlaylist,
    updateOnePlaylist,
    deleteOnePlaylist
};
