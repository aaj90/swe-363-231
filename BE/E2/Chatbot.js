process.stdin.setEncoding('utf8');


const predefinedResponses = {
  "how are you?": "I am fine, thank you!",
  "what is your name?": "I am a simple chatbot.",
  "what the capital of saudi arabia": "Riyadh",
  "how many airports in saudi arabia": "35",
  "how many airports in Riyadh": "2",
  "how many regions in Saudi Srabia": "13",
  Exit: "Goodbye! Have a great day.",
};


let isExiting = false;

function getResponse(input) {
  return predefinedResponses[input.toLowerCase()] || 'I do not understand. Can you please ask a different question?';
}


process.stdin.on('data', function (data) {
  const userInput = data.trim();

  if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
    console.log('Goodbye! Have a great day.');
    isExiting = true;
    process.stdin.pause(); 
  } else {
    const response = getResponse(userInput);
    console.log('Chatbot:', response);
  }
});


process.stdin.on('end', function () {
  if (!isExiting) {
    console.log('End of input. Goodbye!');
  }
});


console.log('Chatbot: Hello! I am a simple chatbot ask me a question. Type "exit" or "quit" to end the conversation.');



process.stdin.resume();