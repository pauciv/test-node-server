const { v5: uuid } = require('uuid');
console.log(uuid)
const playlistModel = require('../database/playlist.model');

const getAllPlaylists = () => {
    const allPlaylists = playlistModel.getAllPlaylists();
    return allPlaylists;
}

const getOnePlaylist = (id) => {
    return playlistModel.getOnePlaylist(id);
}

const createNewPlaylist = (newPlaylist) => {
    const playlistToCreate = {
        ...newPlaylist,
        id: uuid(),
        createdAt: new Date().toLocaleString('en-US', { timezone: 'UTC' }),
        updatedAt: new Date().toLocaleString('en-US', { timezone: 'UTC' })
    }

    const createdPlaylist = playlistModel.createNewPlaylist(playlistToCreate);
    return createdPlaylist;
}

const updateOnePlaylist = () => {
    return;
}

const deleteOnePlaylist = () => {
    return;
}

module.exports = {
    getAllPlaylists,
    getOnePlaylist,
    createNewPlaylist,
    updateOnePlaylist,
    deleteOnePlaylist
}