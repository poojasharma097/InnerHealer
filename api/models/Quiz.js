const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [Number],
  totalScore: Number,
  anxietyLevel: String,
});

const QuizModel = mongoose.model("Quiz", quizSchema);

module.exports = QuizModel;
