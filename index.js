const meterDivFeet = 3.281;
const literDivGallon = 0.264;
const kiloDivPound = 2.204;

lengthEl = document.querySelector(".length>p")
volumeEl = document.querySelector(".volume>p")
massEl = document.querySelector(".mass>p")

document.querySelector("button").addEventListener("click", function () {
    let convertNum = Number(document.querySelector("input").value)
    lengthEl.textContent = `${convertNum} meters = 
        ${(convertNum * meterDivFeet).toFixed(3)} feet | ${convertNum} feet = 
        ${(convertNum / meterDivFeet).toFixed(3)} meters`
    volumeEl.textContent = `${convertNum} liters = 
        ${(convertNum * literDivGallon).toFixed(3)} gallons | ${convertNum} gallons = 
        ${(convertNum / literDivGallon).toFixed(3)} liters`
    massEl.textContent = `${convertNum} kilos = 
        ${(convertNum * kiloDivPound).toFixed(3)} pounds | ${convertNum} pounds = 
        ${(convertNum / kiloDivPound).toFixed(3)} kilos`
})