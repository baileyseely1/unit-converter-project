const inputEl = document.getElementById("input-field")
const convertBtnEl = document.getElementById("convert-btn-el")
const lengthEl = document.getElementById("length-paragraph")
const volumeEl = document.getElementById("volume-paragraph")
const massEl = document.getElementById("mass-paragraph")

 convertBtnEl.addEventListener("click", function renderConversions() {
    // grab value in input field and define conversion calculations
    const input = inputEl.value
    const meterToFeet = input * 3.281 
    const feetToMeter = input / 3.281
    const litersToGallons = input * 0.264
    const gallonsToLiters = input / 0.264
    const kilosToPounds = input * 2.204
    const poundsToKilos = input / 2.204

    // manipulate dom to reflect conversions and round to 2 decimal places
    lengthEl.textContent = 
    `${input} meters = ${meterToFeet.toFixed(2)} feet 
    |
     ${input} feet = ${feetToMeter.toFixed(2)} meters`

    volumeEl.textContent = 
    `${input} liters = ${litersToGallons.toFixed(2)} gallons 
    |
     ${input} gallons = ${gallonsToLiters.toFixed(2)} liters`
     
     massEl.textContent = 
     `${input} kilos = ${kilosToPounds.toFixed(2)} pounds
     |
      ${input} pounds = ${poundsToKilos.toFixed(2)} kilos`

})



