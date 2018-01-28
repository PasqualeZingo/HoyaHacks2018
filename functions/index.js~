const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const watson = require('./helpers/test.js')

// middleware
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.post('/message', (req, res) => {
        console.log('made it here');
        const message = req.body;
        const key = admin.database().ref('/Users/').child(message.user).child('/conversations/').child('uniquekey/').child('messages/').push().key;
        return admin.database().ref('/Users/').child(message.user).child('/conversation/').child('messages/').child(key).set(message).then(()=>{
                var tone_analyzer = new ToneAnalyzerV3({
                        username: '3b4be1ed-7fb7-4df0-9642-dd12906ee300',
                        password: 'pBbC6UECVqIO',
                        version_date: '2017-09-21'
                    });
                var params = {
                    'tone_input': {"text" : req.body.message},
                    'content_type': 'application/json'
                };
		console.log("here comes tone");
                return tone_analyzer.tone(params, function(error, response) {
                        if (error)
			    {    console.log('error:', error);
				return error;
			    }
                        else
			    {
				console.log(JSON.stringify(response, null, 2));
				return JSON.stringify(response, null, 2);
			    }
                    });
            }, err =>{
		console.log(err);
            }).then((watson)=>{
                    return res.status(200).end();
	    });
});


app.post('/startConvo', (req, res) => {
    let processResponse = (err, response) => {
        if (err) {
          console.error(err); // something went wrong
          return res.status(500).send(err);
        }
      
        var endConversation = false;
      
        // Check for action flags.
        if (response.output.action === 'display_time') {
          // User asked what time it is, so we output the local system time.
          console.log('The current time is ' + new Date().toLocaleTimeString());
        } else if (response.output.action === 'end_conversation') {
          // User said goodbye, so we're done.
          console.log(response.output.text[0]);
          endConversation = true;
        } else {
          // Display the output from dialog, if any.
          if (!!response.output.text.length != 0) {
            return res.send(response.output.text[0]);
          }
        }
      }
    return (watson.startConversation(processResponse));
});
app.post('/handleReply', (req, res) => {
    //res.send("hi :c");
    
    let processResponse = (err, response) => {
        if (err) {
          console.error(err); // something went wrong
          return res.status(500).send(err);
        }
        var endConversation = false;
      
        // Check for action flags.
        if (response.output.action === 'display_time') {
          // User asked what time it is, so we output the local system time.
          console.log('The current time is ' + new Date().toLocaleTimeString());
        } else if (response.output.action === 'end_conversation') {
          // User said goodbye, so we're done.
          console.log(response.output.text[0]);
          endConversation = true;
        } else {
          // Display the output from dialog, if any.
          if (!!response.output.text.length != 0) {
            return res.send(response.output.text[0]);
        }
        }
      }
    return watson.handleReply(processResponse, req.body.message);
});

exports.app = functions.https.onRequest(app);
