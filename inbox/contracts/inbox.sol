pragma solidity ^0.4.17;

contract Inbox{
    string public message;
    
    function Inbox(string msg) public {
        message = msg;
    }
    
    function setMessage(string newMsg) public {
        message = newMsg;
    }
}


// Transaction object has following members:
/*
nonce : How many times the sender has sent a Transaction
to : Address of account this money is going to
data : Compiled bytecode of the contract
value : Amount of "Wei" to send to the target Address
gasPrice : Amount of Wei the sender is willing to pay per unit gas to get this Transaction
processed
startGas/gasLimit : Units of gas thar this transaction can consume
v, r, s : Cryptographic pieces of data that can be used to generate the senders account address.
Genereated from the sender's privaate key.

Moka test librabry to test our contract

*/

