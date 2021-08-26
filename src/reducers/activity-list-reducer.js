import Blockchain from '../back_end_logic/Blockchain.js';
import Transaction from '../back_end_logic/Transaction.js';

//reducer with embedded block-chain logic
export default (state = new Blockchain(), action) => {
  let newState;
  const { fromAcc, toAcc, money, id, acc} = action;

  switch (action.type) {
  case 'ADD_ACTIVITY':
    state.createTransaction(new Transaction(fromAcc, toAcc, money));
    return state;
  case 'MINE_PENDING_TRANSACTION':
    state.minePendingTransaction(acc);
    return state;
  default:
    return state;
  }
};