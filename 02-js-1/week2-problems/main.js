
// const getAgeFromUser = () => {
//     const age = prompt("What is your current age?");
//     return age;
// }

// const calculateAgeIn2050 = () => {
//     const currAge = Number(getAgeFromUser());
//     const futureAge = currAge + 29;
//     alert(`In 2050, you will be ${futureAge} years old!`);
// }

// calculateAgeIn2050();

// const calculateAgeInYear = (futureYear) => {
//     const currAge = Number(getAgeFromUser());
//     const currYear = new Date().getFullYear();
//     const yearDiff = futureYear - currYear;
//     const futureAge = currAge + yearDiff;
//     alert(`In ${futureYear}, you will be ${futureAge} years old`);
// }

// const inputYear = prompt("For what year do you want to calculate your age?");
// calculateAgeInYear(inputYear);



const calcHandler = (e) => {
    e.preventDefault();
    const currAge = Number(document.querySelector("#getAge").value);
    const targetYear = Number(document.querySelector("#getTargetYear").value);

    const currYear = new Date().getFullYear();
    const yearDiff = targetYear - currYear;
    const futureAge = currAge + yearDiff;

    const result = document.querySelector("#result");
    result.innerHTML = `In <strong>${targetYear}</strong>, you will be <strong>${futureAge}</strong> years old.`
    document.querySelector(".result-container").style.display = "block";
}

const calcBtn = document.querySelector('#calculate');
calcBtn.addEventListener('click', calcHandler)

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    document.querySelector("#myForm").reset();
    document.querySelector(".result-container").style.display = "none";
})