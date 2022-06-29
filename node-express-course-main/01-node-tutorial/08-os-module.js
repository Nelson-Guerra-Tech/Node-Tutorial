// os is built into node, it is a module
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const minutes = (uptime) => {
  return uptime / 60;
};

console.log(
  `The system has been running for ${minutes(Math.floor(os.uptime()))} minutes.`
);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
