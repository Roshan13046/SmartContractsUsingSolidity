//assert module is use for making assertions about tests
//checks if one value is equal to another value
const assert = require('assert');

//ganache cli for serving as a local ethereum test network
const ganache = require('ganache-cli');

//web3 module where Web3 is a constructor and web3 is instance
const Web3 = require('web3');

//creating web3 instance
const web3 = new Web3(ganache.provider());

//Testing with mocha
// About Mocha: 
// It is a test running framewwork for testing javascript code. It's a genral purpose testing framework with limited set of functions.

// Mocha Functions:
// it : Run a test and make an assertion.
// describe : Groups together 'it' functions.
// beforeEach : Execute some general code setup.

class Car{
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

//it is used to prevent the common code repeptions
let car;

beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        // const car = new Car();
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () => {
        // const car = new Car();
        assert.equal(car.drive(), 'vroom');
    });
});