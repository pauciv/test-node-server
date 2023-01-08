const playlistsService = require('../services/playlists.service');

// const getAllPlaylists = async (req, res, next) => {
//     const allPlaylists = playlistsService.getAllPlaylists();
//     res.send({ status: 'ok', data: 'get all playlists'});
// }

// const getOnePlaylist = async (req, res, next) => {
//     const { id } = req.params;   
//     const playlist = playlistsService.getOnePlaylist(id);
//     res.send({ status: 'ok', data: `get playlist ${id}`});
// }

const getAllPlaylists = async (req, res, next) => {
    const allPlaylists = playlistsService.getAllPlaylists();

    try {
        res.status(200).send({ status: 'OK', data: allPlaylists });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILDED", data: { error: error?.message || error } });
    }
}

const getOnePlaylist = async (req, res, next) => {
    const {
        params: { playlistId }
    } = req;

    if (!playlistId) return;

    try {
        const playlist = playlistsService.getOnePlaylist(playlistId);
        res.status(200).send({ status: 'OK', data: playlist });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILDED", data: { error: error?.message || error } });
    }
}

const createNewPlaylist = async (req, res, next) => {
    const { body } = req;

    if (
        !body.name ||
        !body.description ||
        !body.img ||
        !body.tracks ||
        !body.owner
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
              error:
                "One of the following keys is missing or is empty in request body: 'name', 'description', 'img', 'tracks', 'owner'"
            },
        });
    }

    const newPlaylist = {
        name: body.name,
        description: body.description,
        img: body.img,
        tracks: body.tracks,
        followers: body.followers,
        genres: body.genres,
        moods: body.moods,
        owner: body.owner
    };

    try {
        const createdPlaylist = playlistsService.createNewPlaylist(newPlaylist); // en el service deberíamos añadir el id, la fecha de creación y la de acualización (en este caso será la misma) 
        res.status(201).send({ status: "OK", data: createdPlaylist });

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILDED", data: { error: error?.message || error } });
    }
}

const updateOnePlaylist = async (req, res, next) => {
    const {
        body,
        params: { playlistId }
    } = req;

    if (!playlistId) return;

    try {
        const updatedPlaylist = playlistsService.updateOnePlaylist(playlistId, body);
        res.send({ status: "OK", data: updatedPlaylist });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILDED", data: { error: error?.message || error } });
    }
}

const deleteOnePlaylist = async (req, res, next) => {
    const {
        params: { playlistId }
    } = req;

    if (!playlistId) return;

    try {
        playlistsService.deleteOnePlaylist(playlistId);
        res.status(204).send({ status: 'OK' });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILDED", data: { error: error?.message || error } });
    }

    playlistsService.deleteOnePlaylist(req.params.playlistId);
}


module.exports = {
    getAllPlaylists,
    getOnePlaylist,
    createNewPlaylist,
    updateOnePlaylist,
    deleteOnePlaylist
}
