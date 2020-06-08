const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TransactionSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.export('Transaction', TransactionSchema)