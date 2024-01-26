import { createStore } from 'redux';

// action constants 
const Deposit = 'Deposit';
const WithDraw = 'WithDraw';
const checkBalance = 'checkBalance';

const store = createStore(reducer);

// reducer
function reducer(state = { amount: 1000 }, action) {
    if (action.type === Deposit) {
        return { amount: state.amount + action.payload }
    }
    if (action.type === WithDraw) {
        return { amount: state.amount - action.payload }
    }
    return state;
}
console.log(store.getState());
// Action Creators
function DepositAction(value) {
    return { type: 'Deposit', payload: value }
}

function WithDrawAction(value) {
    return { type: 'WithDraw', payload: value }
}

store.subscribe(()=>{
    console.log(store.getState());
});
// 
// console.log('Deposit');
store.dispatch(DepositAction(200));
// console.log(store.getState());
// 
// console.log('WithDraw');
store.dispatch(WithDrawAction(300));
// console.log(store.getState());