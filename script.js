//Same Function

let input = document.getElementById("input")

let sameMeters = document.getElementById("same-meters")
let sameFeet = document.getElementById("same-feet2")

let sameLiters = document.getElementById("same-liters")
let sameGallons = document.getElementById("same-gallons2")

let sameKilograms = document.getElementById("same-kilograms")
let samePounds = document.getElementById("same-pounds2")



input.addEventListener("keyup", same)
input.addEventListener("keyup", convert)

function same(){
    sameMeters.innerText = input.value
    sameFeet.innerText = input.value
    
    sameLiters.innerText = input.value
    sameGallons.innerText = input.value
    
    sameKilograms.innerText = input.value
    samePounds.innerText = input.value
    
    console.log(input.value)
}

same()


// Convert Function (.toFixed(3))

const measures = [3.280, 0.3048, 0.264, 3.785, 2.205, 0.453
];

let resultInFeet = document.getElementById("result-in-feet")
let resultInMeters = document.getElementById("result-in-meters")

let resultInGallons = document.getElementById("result-in-gallons")
let resultInLiters = document.getElementById("result-in-liters")

let resultInKilograms = document.getElementById("result-in-kilograms")
let resultInPounds = document.getElementById("result-in-pounds")


function convert(){
    resultInFeet.innerText = (input.value * measures[0]).toFixed(3)
    resultInMeters.innerText = (input.value * measures[1]).toFixed(3)
    
    resultInGallons.innerText = (input.value * measures[2]).toFixed(3)
    resultInLiters.innerText = (input.value * measures[3]).toFixed(3)
    
    sameKilograms.innerText = (input.value * measures[4]).toFixed(3)
    samePounds.innerText = (input.value * measures[5]).toFixed(3)
    
    //console.log(input.value * 3.280)
}