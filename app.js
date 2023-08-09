const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());


const http = require('mongodb://localhost:27017', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const personRoutes = require('./routes/personRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const roomRoutes = require('./routes/roomRoutes')

app.use('/persons', personRoutes);
app.use('/hotels', hotelRoutes);
app.use('/rooms', roomRoutes);





const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});