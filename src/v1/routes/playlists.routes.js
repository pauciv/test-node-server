const express = require('express');
const router = express.Router();
const { 
    getAllPlaylists, 
    getOnePlaylist, 
    createNewPlaylist, 
    updateOnePlaylist, 
    deleteOnePlaylist 
} = require('../../controllers/playlists.controller');

router
    .get('/', getAllPlaylists)
    .get('/:playlistId', getOnePlaylist)
    .post('/', createNewPlaylist)
    .patch('/:playlistId', updateOnePlaylist)
    .delete('/:playlistId', deleteOnePlaylist)

module.exports = router;



// index de routes
// router.route('/').get((req, res) => {
//     res.send(`<h1>req.baseUrl = ${req.baseUrl}</h1>`)
// });

// module.exports = router;