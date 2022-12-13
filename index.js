

let convertBtn=document.getElementById("convert-btn")

convertBtn.addEventListener("click" ,function(){
    let number = document.getElementById("input").value
    document.getElementById("lengthconversion").textContent=`${number} meters = ${((number*3.28084).toFixed(3) )} feet | ${number} feet = ${((number*0.304).toFixed(3))} meters`
    document.getElementById("volumeconversion").textContent=`${number} liters = ${((number*0.264172).toFixed(3))} gallons | ${number} gallons = ${((number*3.78541).toFixed(3))} liters`
    document.getElementById("massconversion").textContent=`${number} kilos = ${((number*2.20462).toFixed(3))} pounds | ${number} pounds = ${((number*0.453592).toFixed(3))} kilos`
})

