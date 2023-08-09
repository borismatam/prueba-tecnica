const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    documentType: String,
    documentNo: Number,
    celphone: Number,
    gender: String
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;