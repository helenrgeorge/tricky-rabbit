
const firButton = document.getElementById("firButton")
const secButton = document.getElementById("secButton")
const thirButton = document.getElementById("thirButton")

let userOnescore = 0
let userTwoscore = 0

const H1 = document.getElementById("buttons")

H1.innerText = userOnescore + " to " + userTwoscore


let numb = document.getElementById("list")


numb.addEventListener("click", function (e) {
    
    let MaxScore = e.target.innerHTML


})

firButton.addEventListener("click", function() {
    userOnescore = userOnescore + 1
    H1.innerText = userOnescore + " to " + userTwoscore
    if (userOnescore >= MaxScore) { 
       /* let userTwoscore = userTwoscore.style.color = "red"
        let userOnescore = userOnescore.style.color = "green"
        alert("User One Wins!") */

        console.log("winner")
    }
})

secButton.addEventListener("click", function() {
    userTwoscore = userTwoscore + 1
    H1.innerText = userOnescore + " to " + userTwoscore
    if (userTwoscore >= MaxScore) { 
        userTwoscore.style.color = "green"
        userOnescore.style.color = "red"
        alert("User Two Wins!")
    }
    })

thiButton.addEventListener("click", function() {
    userTwoscore = 0
    userOnescore = 0
    H1.innerText = userOnescore + " to " + userTwoscore
    })    

