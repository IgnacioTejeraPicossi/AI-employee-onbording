const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'active', 'completed'],
        default: 'pending'
    },
    onboardingProgress: {
        type: Number,
        default: 0
    },
    documents: [{
        name: String,
        url: String,
        uploadedAt: Date,
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        }
    }],
    tasks: [{
        title: String,
        description: String,
        dueDate: Date,
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed'],
            default: 'pending'
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema); 