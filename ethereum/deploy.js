const Web3 = require('web3');
const compiledFactory = require('./build/Dchat.json');
const interface = compiledFactory.interface;
const bytecode = compiledFactory.bytecode;

if (typeof web3 != 'undefined'){
	web3 = new Web3(web3.currentProvider);
}
else {
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account', accounts[0]);
	const result = awaitnew web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode }).send({ gas:'3000000', from: accounts[0]});

	console.log(interface);
	console.log('Contract deployed to', result.options.address);	
};
deploy();