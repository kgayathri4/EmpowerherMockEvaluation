function createWallet(){
    let balance=0;
    return{
        addMoney(amount){
            balance+=amount;
        },
        checkBalance(){
            return balance;
        }
    }
}

let myWallet=createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
console.log(myWallet.checkBalance());