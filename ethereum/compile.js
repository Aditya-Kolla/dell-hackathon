const path = require('path');
const solc = require('solc');
const fs = require('fx-extra');

const buildPath = path.resolve(_dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(_dirname,'Dchat.sol');
const source = fs.readFileSync(campaignPath,'utf8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output){
	fs.outputJsonSync(
		path.resolve(buildPath,contract.replace((':'),'')+'.json'),
		output[contract]
		);

}