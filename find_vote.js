function personVote(){
    let voterAge=10;
    if(voterAge>=18){
        return "You are eligible for vote";
    }
    else{
        return "You are not Eligible for vote";
    }
}
// console.log(personVote())


function vote(age){
    if(age>=18){
        return "You are eligible for vote";
    }
    else{
        return "You are not eligible for vote"
    }
}
console.log(vote(17))
console.log(vote(87))

