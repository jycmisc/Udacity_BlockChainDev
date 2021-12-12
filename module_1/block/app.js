const BlockClass = require('./block.js');

const block = new BlockClass.Block("My first block");

block.generateHash().then((result) => {
	console.log(`Block Hash: ${result.hash}`);
	console.log(`Block: ${JSON.stringify(result)}`);
}).catch((error) => {console.log(error)});