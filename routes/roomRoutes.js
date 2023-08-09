const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
const Hotel = require('../models/Hotel');

// Crear una nueva habitación y asociarla a un hotel
router.post('/', async (req, res) => {
  try {
    const { hotelId, ...roomData } = req.body;
    
    // Verificar si el hotel existe
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel no encontrado' });
    }

    const newRoom = new Room({ ...roomData, hotel: hotelId });
    await newRoom.save();

    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener todas las habitaciones de un hotel específico
router.get('/hotel/:hotelId', async (req, res) => {
  try {
    const rooms = await Room.find({ hotel: req.params.hotelId });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;

