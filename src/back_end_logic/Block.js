const SHA256 = require('crypto-js/sha256');

export default class Block {
  constructor(timeStap, transactions, previousHash){
    this.timeStap = timeStap;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash(){
    return SHA256(this.timeStap + this.previousHash + this.nonce + this.transactions).toString();
  }

  mineBlock(difficulty){
    while (this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
      this.nonce++;
      console.log(this.hash)
      this.hash = this.calculateHash();
    }
  }
}
