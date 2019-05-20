const express = require('express');
const MealPlan = require('../model/mealPlan');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/plans', auth, async (req, res) => {
    //const plan = new MealPlan(req.body);
    const plan = new MealPlan({
        ...req.body,
        owner: req.user._id
    });

    try {
        await plan.save();
        res.status(201).send(plan);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/plans', auth, async (req, res) => {
    try {
        //const plans = await MealPlan.find({owner: req.user._id});
        await req.user.populate('plans').execPopulate();
        res.send(req.user.plans);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/plans/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        //const plan = await MealPlan.find(_id);
        const plan = await MealPlan.findOne({_id, owner: req.user._id});
        
        if(!plan) {
            return res.status(404).send();
        }
        res.send(plan);
    } catch (e) {
        res.status(500).send(e);
    }
});


router.patch('/plans/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['desc'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'});
    }
    
    try {
        //const plan = await MealPlan.find(req.params.id);
        const plan = await MealPlan.findOne({_id: req.params.id, owner: req.user._id});

        if(!plan) {
            return res.status(404).send();
        }

        updates.forEach((update) => plan[update] = req.body[update]);
        await plan.save();
        res.send(plan);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete('/plans/:id', auth, async (req, res) => {
    try {
        //const plan = await MealPlan.findByIdAndDelete(req.params.id);
        const plan = await MealPlan.findByIdAndDelete({_id: req.params.id, owner: req.user._id});
        if(!plan) {
            return res.status(404).send();
        }
        res.send(plan);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;