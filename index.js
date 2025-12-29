const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEvenetListener("click", () => {
 const inputValue = inputNumber.ariaValueMax.trim();

 if (inputValue === "") {
    output.textContent = "Please enter a valid number";
    output.classList.remove("hidden");
    return;
 }
const num = parseInt(inputValue, 10)

})