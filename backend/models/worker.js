const mongoose = require('mongoose');
const User = require('./User');

const workerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: [{
    type: String,
    trim: true
  }],
  experience: {
    type: String,
    enum: ['entry', 'intermediate', 'expert'],
    default: 'entry'
  },
  hourlyRate: {
    type: Number,
    min: 0,
    required: true
  },
  availability: {
    type: String,
    enum: ['full-time', 'part-time', 'on-demand'],
    default: 'on-demand'
  },
  documents: [{
    type: {
      type: String,
      enum: ['id', 'certification', 'license', 'other'],
      required: true
    },
    url: String,
    verified: {
      type: Boolean,
      default: false
    }
  }],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  totalJobs: {
    type: Number,
    default: 0
  },
  completedJobs: {
    type: Number,
    default: 0
  },
  activeJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

workerSchema.index({ 'user': 1 }, { unique: true });

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker; 