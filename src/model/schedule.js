const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status: {
        type: Boolean,
        default: true
    }
    
}, {
    timestamps: true
})

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;