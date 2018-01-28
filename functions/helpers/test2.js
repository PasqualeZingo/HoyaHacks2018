// Example 4: implements app actions.

var prompt = require('prompt-sync')();
var watson = require('watson-developer-cloud');

// Set up Conversation service.
let conversation = new watson.conversation({
    username: '9029fab6-cdb7-457c-b98a-443e612c85bb',
    password: 'kkpIv5XeLijl',
    version: 'v1',
    version_date: '2017-05-26'
  });  

// Start conversation with empty message.
conversation.message({workspace_id : '5ccf293c-d157-4894-bf69-c5306003eccf'}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
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
    if (response.output.text.length != 0) {
        return(response.output.text[0]);
    }
  }

  // If we're not done, prompt for the next round of input.
  if (!endConversation) {
    var newMessageFromUser = prompt('>> ');
    conversation.message({
        workspace_id : '5ccf293c-d157-4894-bf69-c5306003eccf',
      input: { text: newMessageFromUser },
      // Send back the context to maintain state.
      context : response.context,
    }, processResponse)
  }
}