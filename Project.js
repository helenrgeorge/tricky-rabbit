
const firButton = document.getElementById("firButton")
const secButton = document.getElementById("secButton")
const thirButton = document.getElementById("thirButton")

let userOnescore = 0
let userTwoscore = 0

function findWinner (userOnescore, userTwoscore, MaxScore) {

    if (MaxScore > userOnescore) {
        if ( MaxScore > userTwoscore) {
            userOnescore = userOnescore + 1
    H1.innerText = userOnescore + " to " + userTwoscore

        }}
        else{
            if (userTwoscore > userOnescore) {
                alert("User Two is the winner!")
            }
            else {
                alert("User One is the winner!")
            }
        }
    
}
{
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
   
    if (MaxScore > userOnescore) {
        if ( MaxScore > userTwoscore) {
            userOnescore = userOnescore + 1
    H1.innerText = userOnescore + " to " + userTwoscore

        }}
        else{
            if (userTwoscore > userOnescore) {
                alert("User Two is the winner!")
            }
            else {
                alert("User One is the winner!")
            }
        }

})

secButton.addEventListener("click", function() {
    
   
    if (MaxScore > userOnescore) {
        if ( MaxScore > userTwoscore) {
            userTwoscore = userTwoscore + 1
    H1.innerText = userOnescore + " to " + userTwoscore

        }
        else{
            if (userTwoscore > userOnescore) {
                alert("User Two is the winner!")
            }
            else {
                alert("User One is the winner!")
            }}
        }
    })

thiButton.addEventListener("click", function() {
    userTwoscore = 0
    userOnescore = 0
    H1.innerText = userOnescore + " to " + userTwoscore
    })    

