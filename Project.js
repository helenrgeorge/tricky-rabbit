const firButton = document.getElementById("firButton")
const secButton = document.getElementById("secButton")
const thirButton = document.getElementById("thirButton")

let userOnescore = 0
let userTwoscore = 0

function findWinner (userOnescore, userTwoscore, MaxScore) {
    if ( userTwoscore >= MaxScore) {
        alert("User Two is the winner")
    }
    if( userOnescore >= MaxScore) {
        alert("User One is the winner")
    }
}

const H1 = document.getElementById("buttons")

H1.innerText = userOnescore + " to " + userTwoscore


let numb = document.getElementById("list")

let MaxScore = document.getElementById("list").value

numb.addEventListener("change", function (e) {
    
    MaxScore = document.getElementById("list").value
    console.log(MaxScore)

})

firButton.addEventListener("click", function() {
    userOnescore = userOnescore + 1
    H1.innerText = userOnescore + " to " + userTwoscore
    if (userOnescore || userTwoscore > MaxScore) {
        findWinner(userOnescore, userTwoscore, MaxScore)
    }

})

secButton.addEventListener("click", function() {
   
    userTwoscore = userTwoscore + 1
    H1.innerText = userOnescore + " to " + userTwoscore
    if (userOnescore || userTwoscore > MaxScore) {
    findWinner(userOnescore, userTwoscore, MaxScore)
    }
    })

thiButton.addEventListener("click", function() {
    userTwoscore = 0
    userOnescore = 0
    H1.innerText = userOnescore + " to " + userTwoscore
    })    

