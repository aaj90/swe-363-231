var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on('userLoggedIn', (userId, timestamp) => {
    console.log(`${timestamp}: USER_${userId} logged in`);
});


eventEmitter.on('userLoggedOut', (userId, timestamp) => {
    console.log(`${timestamp}: USER_${userId} logged out`);
});


function startSimulation() {
  const userId = Math.floor(Math.random() * 1000) + 1; 
  let timestamp = new Date().toLocaleString();
  eventEmitter.emit('userLoggedIn', userId, timestamp);

  const randomDelay = Math.random() * (2 - 0.1) + 0.1; 
  setTimeout(() => {
    let timestamp = new Date().toLocaleString();
    eventEmitter.emit('userLoggedOut', userId, timestamp);
    startSimulation(); 
  }, randomDelay * 1000);
}


console.log('Simulation started...');
startSimulation();
