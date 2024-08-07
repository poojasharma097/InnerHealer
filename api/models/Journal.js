const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    content: String,
});

const JournalModel = mongoose.model('Journal', journalSchema);

module.exports = JournalModel;