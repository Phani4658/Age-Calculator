let dayInput = document.getElementById("dayInput");
let dayValidationError = document.getElementById("dayValidationError");
let dayInputHeading = document.getElementById("dayInputHeading");
let dayInputValue = parseInt(dayInput.value);

let monthInput = document.getElementById("monthInput");
let monthValidationError = document.getElementById("monthValidationError");
let monthInputHeading = document.getElementById("monthInputHeading");
let monthInputValue = parseInt(monthInput.value);

let yearInput = document.getElementById("yearInput");
let yearValidationError = document.getElementById("yearValidationError");
let yearInputHeading = document.getElementById("yearInputHeading");
let yearInputValue = parseInt(yearInput.value);

const todaysDate = new Date();

let submitBtn = document.getElementById("submitBtn");


dayInput.addEventListener("change", () => {
    dayInputValue = parseInt(dayInput.value);
    console.log(dayInputValue);
})

monthInput.addEventListener("change",() => {
    monthInputValue = monthInput.value;
    console.log(monthInputValue);
})


yearInput.addEventListener("change",() => {
    yearInputValue = yearInput.value;
    console.log(yearInputValue);
})

dayInput.addEventListener("blur",() => {
    if(dayInput.value === ""){
        dayValidationError.textContent="This field is required";
        dayInput.classList.add("wrong-input-box");
        dayInputHeading.classList.add("wrong-input-heading");

    } else if(parseInt(dayInput.value) < 1 || parseInt(dayInput.value) > 31){
        dayValidationError.textContent = "Must be a valid day";
        dayInput.classList.add("wrong-input-box");
        dayInputHeading.classList.add("wrong-input-heading");
    } else{
        dayValidationError.textContent = "";
        dayInput.classList.remove("wrong-input-box");
        dayInputHeading.classList.remove("wrong-input-heading");
    }
})


monthInput.addEventListener("blur",() => {
    if(monthInput.value === ""){
        monthValidationError.textContent="This field is required";
        monthInput.classList.add("wrong-input-box");
        monthInputHeading.classList.add("wrong-input-heading");

    } else if(parseInt(monthInput.value) < 1 || parseInt(monthInput.value) > 12){
        monthValidationError.textContent = "Must be a valid month";
        monthInput.classList.add("wrong-input-box");
        monthInputHeading.classList.add("wrong-input-heading");
    } else{
        monthValidationError.textContent = "";
        monthInput.classList.remove("wrong-input-box");
        monthInputHeading.classList.remove("wrong-input-heading");
    }
})


yearInput.addEventListener("blur",() => {
    if(yearInput.value === ""){
        yearValidationError.textContent="This field is required";
        yearInput.classList.add("wrong-input-box");
        yearInputHeading.classList.add("wrong-input-heading");

    } else if(parseInt(yearInput.value) > todaysDate.getFullYear()){
        yearValidationError.textContent = "Must be a valid year";
        yearInput.classList.add("wrong-input-box");
        yearInputHeading.classList.add("wrong-input-heading");
    } else{
        yearValidationError.textContent = "";
        yearInput.classList.remove("wrong-input-box");
        yearInputHeading.classList.remove("wrong-input-heading");
    }
})


submitBtn.addEventListener("submit",() => {
    
})