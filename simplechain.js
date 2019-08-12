const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(data) {
        this.hash = '';
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousblockhash = '';
    }
}


class Blockchain {

    constructor() {
        this.chain = [];
        this.addBlockToChain(new Block('our Gensis block'))   //we add a new chain to our block once initialised
    }

    addBlockToChain(newBlock) {
        newBlock.height = this.chain.length;
        newBlock.time = new Date().getTime().toString().slice(0,-3) //set verifiable time
        //if there are already block in the chain, get the hash of the  block to assign as previousblock hash to the new block
        if (this.chain.length > 0) {
            newBlock.previousblockhash = this.chain[this.chain.length - 1].hash
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }

}

//let blockchain = new Blockchain()
//blockchain.addchain(new Block('the new block body')) // add the new chain
//blockchain.chain //returns the new blockchain.