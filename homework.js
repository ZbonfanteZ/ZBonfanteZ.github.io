let currentInterview = 1
let interview1El = document.getElementById
let interview2El = document.getElementById
function switchInterview (){
if (currentInterview ==1)
{
interview1El.hidden = true
interview2El.hidden = false
currentInterview = 2
}
} else { if (currentInterview ==1)
    interview2El.hidden = true
    interview1El.hidden = false
    currentInterview = 1
}
