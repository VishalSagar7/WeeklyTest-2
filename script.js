let dateInput = document.querySelector('.data-input');
let btn = document.querySelector('.button');
let span = document.querySelector('.span-tag');
let resultHeading = document.getElementById('result'); 

btn.addEventListener('click', function () {
    let birthDate = new Date(dateInput.value);
    let currDate = new Date();

 
    if (isNaN(birthDate.getTime()) || birthDate > currDate) {
        resultHeading.innerText = "Enter a valid date";
        return;
    }

    let yearDiff = currDate.getFullYear() - birthDate.getFullYear();


    if (currDate.getMonth() < birthDate.getMonth() ||
        (currDate.getMonth() === birthDate.getMonth() && currDate.getDate() < birthDate.getDate())) {
        yearDiff--;
    }

    span.innerText = yearDiff;
});
