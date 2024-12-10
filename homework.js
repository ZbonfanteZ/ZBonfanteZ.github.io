let currentInterview = 1
let interview1El = document.getElementById("interview1")
let interview2El = document.getElementById("interview2")
function switchInterview() {
    if (currentInterview == 1) {
        interview1El.hidden = true
        interview2El.hidden = false
        currentInterview = 2
    }
    else {
        interview2El.hidden = true
        interview1El.hidden = false
        currentInterview = 1
    }
}