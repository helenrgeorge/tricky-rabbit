
const firButton = document.getElementById("firButton")
const secButton = document.getElementById("secButton")
const thirButton = document.getElementById("thirButton")

let userOnescore = 0
let userTwoscore = 0
const H1 = document.getElementById("buttons")

H1.innerText = userOnescore + " to " + userTwoscore

firButton.addEventListener("click", function() {
    userOnescore = userOnescore + 1
    H1.innerText = userOnescore + " to " + userTwoscore
})

secButton.addEventListener("click", function() {
    userTwoscore = userTwoscore + 1
    H1.innerText = userOnescore + " to " + userTwoscore
    if (userTwoscore > 4) { 
        let userTwoscore = userTwoscore.style.color = "green"
    }
    })

thiButton.addEventListener("click", function() {
    userTwoscore = 0
    userOnescore = 0
    H1.innerText = userOnescore + " to " + userTwoscore
    })    

