const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
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
    active: {
        type: Boolean,
        default: true
    }
    
}, {
    timestamps: true
})

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

module.exports = MealPlan;