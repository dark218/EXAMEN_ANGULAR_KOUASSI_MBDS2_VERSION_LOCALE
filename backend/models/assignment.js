const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({

    nomdevoir: { type: String, require: true },
    nomeleve: { type: String, require: true },
    datederendu: { type: String, require: true },
    nommatiere: { type: String, require: true },
    nomprof: { type: String, require: true },
    avatar1: { type: String, require: true },
    note: { type: String, require: true },
    remarque: { type: String, require: true },
})

module.exports = mongoose.model('Assignment', assignmentSchema);