const express = require('express')
const User = require('../models/user')
const Page = require('../models/page')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const router = express.Router()

router.post('/user', (req, res) => {
    User.find()
    .then( (users) => {
        userExist = users.filter( (user) => {
            return user.userID == req.body.userID
        })
        if (Object.keys(userExist).length == 1){
            res.send({url:"/home"})
        } else {
            res.send({
                url: "/newuser"
            })
        }
    })
})

router.post('/check-user', (req, res) => {
    User.find()
    .then( (users) => {
        userExist = users.filter( (user) => {
            return user.userID == req.body.userID
        })
        if (Object.keys(userExist).length == 1){
            res.send({alreadyExist:true})
        } else {
            res.send({alreadyExist:false})
        }
    })
})

router.post("/stripe-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [{
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'Developer_IO Space',
                        images: ['https://www.explaincode.app/static/media/coding.829f9161.png'],
                    },
                    unit_amount: 100000,
                },
                quantity: 1,
            }],
            success_url: `${process.env.CLIENT_URL}/dbentry/${req.body.userID}`,
            cancel_url: `${process.env.CLIENT_URL}/`
        })
        res.json({ url: session.url })
    } 
    catch (e) {
        res.status(500).json({ error: e.message })
    }
})


router.post('/dbentry', (req, res) => {
    const user = new User(req.body)
    user.save()
    .then((data) => {
        res.send({created:true})
    })
})

router.get('/page', (req, res) => {
    Page.find()
    .then((data) => {
        res.send(data)
    })
})

router.get('/page/:id', (req, res) => {
    Page.find()
    .then((pages) => {
        matchpage = pages.filter((page) => {
            return page._id.toString() == String(req.params.id)
        })
        res.send(matchpage[0])
    })
})


router.post('/page', (req, res) => {
    const page = new Page(req.body)
    page.save()
    .then((data) => {
        res.send(data)
    })
})

module.exports = router