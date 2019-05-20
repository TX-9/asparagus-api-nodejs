const mongoose = require('mongoose');

const MealPlan = mongoose.model('MealPlan', {
    desc: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = MealPlan;