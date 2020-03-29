'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todo object.
 */
let TodoSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the title of the task'
  },
  description: {
    type: String,
    required: 'Kindly enter the desription of the task'
  },
  dueDate: {
    type: Date,
    required: "Enter the due date"
  },
  Complete: {
    type: String,
    default: "Incomplete"
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  modifiedDate : {
    type: Date,
    default: Date.now
  }
},
{
    versionKey: false
});
// Duplicating the _id field to id
TodoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// serializing virtual fields
TodoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todo', TodoSchema);