
// const getAgeFromUser = () => {
//     const age = prompt("The age I'll turn this year:");
//     return age;
// }

// const calculateAgeIn2050 = () => {
//     const currAge = Number(getAgeFromUser());
//     const futureAge = currAge + 29;
//     alert(`In 2050, you will turn ${futureAge}!`);
// }

// calculateAgeIn2050();

// const calculateAgeInYear = (futureYear) => {
//     const currAge = Number(getAgeFromUser());
//     const currYear = new Date().getFullYear();
//     const yearDiff = futureYear - currYear;
//     const futureAge = currAge + yearDiff;
//     alert(`In ${futureYear}, you will turn ${futureAge}.`);
// }

// const inputYear = prompt("Calculate my age in the year:");
// calculateAgeInYear(inputYear);

const currYear = new Date().getFullYear();
document.querySelector('#currYear').innerHTML = String(currYear);

const calcHandler = (e) => {
    e.preventDefault();
    const currAge = Number(document.querySelector("#getAge").value);
    const targetYear = Number(document.querySelector("#getTargetYear").value);
    
    const yearDiff = targetYear - currYear;
    const futureAge = currAge + yearDiff;

    const result = document.querySelector("#result");
    result.innerHTML = `In <strong>${targetYear}</strong>, you will turn <strong>${futureAge}</strong>.`
    document.querySelector(".result-container").style.display = "block";
}

// also works
// const calcBtn = document.querySelector('#calculate');
// calcBtn.addEventListener('click', calcHandler)

const form = document.querySelector('form');
form.addEventListener('submit', calcHandler);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    document.querySelector("#myForm").reset();
    document.querySelector(".result-container").style.display = "none";
})