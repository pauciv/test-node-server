const { config } = require('dotenv');
const express = require('express');
const v1PlaylistsRouter = require('./v1/routes/playlists.routes');
// const { default: helmet } = require('helmet');
const { PORT } = require('./config/config');

const app = express();

app.use(express.json()); // express.json() es un middleware para que podamos parsear la petición.

app.use('/api/v1/playlists', v1PlaylistsRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    // config.logger.info((`Info: Server listening on port ${PORT}`));
})
