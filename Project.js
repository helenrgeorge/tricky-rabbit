
const firButton = document.getElementById("firButton")
const secButton = document.getElementById("secButton")
const thirButton = document.getElementById("thirButton")

let userOnescore = 0
let userTwoscore = 0

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
    if (userOnescore >= MaxScore) { 
        .style.color = "red"
        userOnescore.style.color = "green"
        alert("User One Wins!") 
    }
})

secButton.addEventListener("click", function() {
    userTwoscore = userTwoscore + 1
    H1.innerText = userOnescore + " to " + userTwoscore
    if (userTwoscore >= MaxScore) { 
        userTwoscore.style.color = "red"
        userOnescore.style.color = "green"
        alert("User One Wins!") 
    }
    })

thiButton.addEventListener("click", function() {
    userTwoscore = 0
    userOnescore = 0
    H1.innerText = userOnescore + " to " + userTwoscore
    })    

