//assert module is use for making assertions about tests
//checks if one value is equal to another value
const assert = require('assert');

//ganache cli for serving as a local ethereum test network
const ganache = require('ganache-cli');

//web3 module where Web3 is a constructor and web3 is instance
const Web3 = require('web3');

//creating web3 instance
const web3 = new Web3(ganache.provider());

//creating interface and bytecode for compiling sol code
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {    
    //Note: every function in web3 library is async ie it's going to return some
    //promises

    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();
        
    //Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)) //Teaches web3 about what methods an inbox contrcat has
        .deploy({ data: bytecode, arguments: ['Hi there! This is Roshan'] }) //tells web3 that we want to deploy a new copy of this contract
        .send({ from: accounts[0], gas: '1000000' });//instructs web3 to send out a transaction that creates this contract

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});












//**************** Testing with mocha ********************
// About Mocha: 
// It is a test running framework for testing javascript code. It's a genral purpose testing framework with limited set of functions.

// Mocha Functions:
// it : Run a test and make an assertion.
// describe : Groups together 'it' functions.
// beforeEach : Execute some general code setup.

// class Car{
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }

// //it is used to prevent the common code repeptions
// let car;

// beforeEach(() => {
//     car = new Car();
// });

// describe('Car', () => {
//     it('can park', () => {
//         // const car = new Car();
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         // const car = new Car();
//         assert.equal(car.drive(), 'vroom');
//     });
// });