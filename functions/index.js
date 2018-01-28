const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const watson = require('./helpers/test.js')

// middleware
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.post('/message', (req, res) => {
    console.log('made it here');
    const message = req.body;
    const key = admin.database().ref('/Users/').child(message.user).child('/conversations/')
        .child('uniquekey/').child('messages/').push().key;
    return admin.database().ref('/Users/').child(message.user).child('/conversation/')
        .child('messages/').child(key).set(message).then(()=>{
            return res.status(200).end();
        });
});
app.post('/startConvo', (req, res) => {
    watson.startConversation()
        .then( watMessage => {
            res.status(200).json({reply:watMessage});
        });
});
app.post('/handleReply', (req, res_) => {
    watson.handleReply(req.body.message)
        .then( watMessage => {
            res.status(200).json({reply:watMessage});
        });
});

exports.app = functions.https.onRequest(app);
