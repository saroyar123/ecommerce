const {Router}=require('express');
const { userAuth } = require('../config/auth');
const { makePayment, paymentVerification, getKey } = require('../controller/paymentController');

const paymentRouter=Router();

paymentRouter.route('/payment').post(userAuth,makePayment).get(userAuth,getKey)
paymentRouter.route('/verification').post(paymentVerification);

module.exports=paymentRouter