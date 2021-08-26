import Block from './Block.js';
import Transaction from './Transaction.js';

export default class Blockchain {
  constructor(){
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
    this.difficulty = 1;
    this.minedReward = 100;
  }

  createGenesisBlock(){
    return new Block(Date.now(), [], '0')
  }

  getLastBlock(){
    return this.chain[this.chain.length-1];
  }

  minePendingTransaction(minerAddress){
    let block = new Block(Date.now(), this.pendingTransactions, this.getLastBlock().hash)

    block.mineBlock(this.difficulty)
    console.log("block succssfully mined");

    this.chain.push(block)

    this.pendingTransactions = [new Transaction(null, minerAddress, this.minedReward)]
  }

  createTransaction(transaction){
    this.pendingTransactions.push(transaction)
  }

  getBalanceOfAddress(address){
    let balance = 0;

    for (const block of this.chain){
      for (const trans of block.transactions){
        if (trans.fromAddress === address){
          balance -= trans.amount;
        }
        if (trans.toAddress === address){
          balance+= trans.amount;
        }
      }
    }
  }

  //simple security alogrithm
  isChainValid(){
    var i = 1;
    while (i<this.chain.length){
      let currentBlock = this.chain[i];
      let previousBlock = this.chain[i-1];

      if (currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
      i++
    }
    return true
  }
}
