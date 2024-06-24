/*9. Write a JavaScript program that creates a class called Bank with properties for
bank names and branches. Include methods to add a branch, remove a branch, and display
all branches. Create an instance of the Bank class and perform operations to add and
remove branches. */

class Bank {
    constructor(name, branch) {
        this.name =''
        this.branches =[]

    }
    addBranch(branch) {
        this.branches.push(branch)
        console.log(`${branch} added successfully`)

    }

    removeBranch(branch) {
        const index=this.branches.indexOf(branch);
        if(index !== -1){
            this.branches.splice(index,1);
            console.log("branch",branch, "remove branch successfully")
        }

        else{
            console.log(`branch ${branch} does not exist`)

        }
        

    }

    displayAllBranch() {
        if(this.branches.length===0){
            console.log("No branched available !")
        }
        else{
            console.log("list of branches :")
            this.branches.forEach((branch,index)=>{
                console.log(`${index + 1}.${branch}`)
            })
        }

    }
}

const bankObj = new Bank();
bankObj.addBranch("branch A")
bankObj.addBranch("branch B")
bankObj.addBranch("branch C")
bankObj.displayAllBranch();

bankObj.removeBranch("branch B");
bankObj.displayAllBranch();
