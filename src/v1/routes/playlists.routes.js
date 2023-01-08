const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/playlists.controller');

router
    .get('/', workoutController.getAllPlaylists)
    .get('/:playlistId', workoutController.getOnePlaylist)
    .post('/', workoutController.createNewPlaylist)
    .patch('/:playlistId', workoutController.updateOnePlaylist)
    .delete('/:playlistId', workoutController.deleteOnePlaylist)

module.exports = router;



// index de routes
// router.route('/').get((req, res) => {
//     res.send(`<h1>req.baseUrl = ${req.baseUrl}</h1>`)
// });

// module.exports = router;