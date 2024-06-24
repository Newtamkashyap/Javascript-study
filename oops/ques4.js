/*4. Write a JavaScript program that creates a class called "BankAccount" with 
properties for account number and balance. Include methods to deposit and withdraw 
money from the account.Create some instances of the "BankAccount" class, deposit some 
money, and withdraw a portion of it. */

class BankAccount{
    constructor(number,balance){
        this.number=number;
        this.balance=balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log("Deposite",amount);

    }
    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrwan ${amount}`)
        }
        else{
            console.log("want to withdrwan",amount)
            console.log('insufficient balance')
        }

    }
    displayBalance(){
        console.log("account balance",this.balance)
    }
}
const obj=new BankAccount("SbiNoo23",200)
console.log("deposite money")
obj.deposit(500)
obj.withdraw(600)
obj.displayBalance();

