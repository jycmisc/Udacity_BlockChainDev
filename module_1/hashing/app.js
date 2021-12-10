// Import sha256 library from crypto-js module
var SHA256 = require("crypto-js/sha256");

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

function generateHash(obj) {
	return SHA256(JSON.stringify(obj).toString())
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);