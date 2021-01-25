// console.log("Hello World");

const celsiusToFahrenheit = (c) => {
    return c * 1.8 + 32;
}

const f = celsiusToFahrenheit(100);
console.log(f);

const getAgeFromUser = () => {
    const age = prompt("What is your current age?");
    return age;
}

// const calculateAgeIn2050 = () => {
//     const currAge = Number(getAgeFromUser());
//     const futureAge = currAge + 29;
//     alert(`In 2050, you will be ${futureAge} years old!`);
// }

// calculateAgeIn2050();

const calculateAgeInYear = (futureYear) => {
    const currAge = Number(getAgeFromUser());
    const currYear = new Date().getFullYear();
    // futureYear (prompt input) cast as Number:
    const yearDiff = futureYear - currYear;
    const futureAge = currAge + yearDiff;
    alert(`In ${futureYear}, you will be ${futureAge} years old`);
}

const inputYear = prompt("For what year do you want to calculate your age?");
calculateAgeInYear(inputYear);