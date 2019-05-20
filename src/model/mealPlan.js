const mongoose = require('mongoose');

const MealPlan = mongoose.model('MealPlan', {
    desc: {
        type: String,
        required: true,
        trim: true
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = MealPlan;