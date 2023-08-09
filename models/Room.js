const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    no: Number,
    typeRoom: String,
    max_cap: Number,
    price: Number,
    hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'}
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;