const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { NextWeek } = require('@material-ui/icons');
const stripe = require('stripe')('sk_test_51JYEXdBXcG2jvy6vDpFcVpJAygDUYW6gySynJx9rnJI9LeTI04pFhwPCwe4w8uRx1Z3PEuJ4z7Fo3KNVi2zLfFrg00B0HE7u6f');

// API

// - App config
const app = express();

// - Middlewares, cors is a security
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world!'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received Boom!!!', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd'
  })
  // ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })

})


// - Listen commands
exports.api = functions.https.onRequest(app)


//Example endpoint
// http://localhost:5001/clone-a2bb3/us-central1/api