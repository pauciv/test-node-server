const { v4: uuid } = require('uuid');
const playlistModel = require('../database/playlist.model');

const getAllPlaylists = () => {
    const allPlaylists = playlistModel.getAllPlaylists();
    return allPlaylists;
}

const getOnePlaylist = (playlistId) => {
    const playlist = playlistModel.getOnePlaylist(playlistId);
    return playlist;
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

const updateOnePlaylist = (playlistId, changes) => {
    const updatedPlaylist = playlistModel.updateOnePlaylist(playlistId, changes);
    return updatedPlaylist;
}

const deleteOnePlaylist = (playlistId) => {
    playlistModel.deleteOnePlaylist(playlistId);
}

module.exports = {
    getAllPlaylists,
    getOnePlaylist,
    createNewPlaylist,
    updateOnePlaylist,
    deleteOnePlaylist
}