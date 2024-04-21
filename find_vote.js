function personVote() {
    // without argument
    let voterAge = 10;
    if (voterAge >= 18) {
        return "You are eligible for vote";
    }
    else {
        return "You are not Eligible for vote";
    }
}
 console.log(personVote())


function vote(age) {
    // with argument.
    if (age >= 18) {
        return "You are eligible for vote";
    }
    else {
        return "You are not eligible for vote"
    }

}
 console.log(vote(17))
 console.log(vote(87))

function voting(age) {
    // using switch case.
    switch (true) {
        case (age >= 18 && age <= 28):
            return "They will vote in Zone2 ";


        case (age >= 29 && age <= 38):
            return "They will vote in Zone3"


        case (age >= 39 && age <= 48):
            return "They will vote in Zone4"


        case (age >= 49 && age <= 58):
            return "They will vote in Zone5"


        case (age >= 59 && age <= 68):
            return "They will vote in Zone6"


        case (age >= 69 && age <= 78):
            return "They will vote in Zone7"


        case (age >= 79 && age <= 88):
            return "They will vote in Zone8"


        case (age >= 89 && age <= 98):
            return "They will vote in Zone9"

            
        case (age <= 18):
            return "They will not vote"


        default:
            return "They will vote First Zone1"

    }
    
}
//Newtam
console.log(voting(8))
console.log(voting(18))
console.log(voting(29))
console.log(voting(40))
console.log(voting(50))
console.log(voting(60))
console.log(voting(77))
console.log(voting(88))
console.log(voting(98))
console.log(voting(100))
