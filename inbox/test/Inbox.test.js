//assert module is use for making assertions about tests
const assert = require('assert');

//ganache cli for serving as a local ethereum test network
const ganache = require('ganache-cli');

//web3 module where Web3 is a constructor and web3 is instance
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());