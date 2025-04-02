const mongoose = require('mongoose');
const User = require('./User');

const builderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  companyRegistrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  businessType: {
    type: String,
    enum: ['individual', 'partnership', 'company'],
    required: true
  },
  specialization: [{
    type: String,
    trim: true
  }],
  documents: [{
    type: {
      type: String,
      enum: ['registration', 'license', 'insurance', 'other'],
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
  totalProjects: {
    type: Number,
    default: 0
  },
  completedProjects: {
    type: Number,
    default: 0
  },
  activeProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  contractors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contractor'
  }],
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
});

builderSchema.index({ 'user': 1 }, { unique: true });
builderSchema.index({ 'companyRegistrationNumber': 1 }, { unique: true });

const Builder = mongoose.model('Builder', builderSchema);

module.exports = Builder; 