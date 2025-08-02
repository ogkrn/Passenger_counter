// document.getElementById("count").innerText=5

//initialize count from 0
//listen for click on increment button
//increase the count when button is clicked (consol
// e.log it)
// change the count value in the html to reflect it
let counted = 0
let counting = document.getElementById("count")

function increase(){
    console.log("Button clicked");
    counted = counted+1
    counting.innerText=counted
    console.log(counted)
}
