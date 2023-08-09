const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.post('/', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/', async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;