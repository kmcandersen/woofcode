// console.log("Hello World");

const celsiusToFahrenheit = (c) => {
    return c * 1.8 + 32;
}

const f = celsiusToFahrenheit(100);
console.log(f);

const currYear = new Date().getFullYear();

const getAgeFromUser = () => {
    const age = prompt(`The age I'll turn in ${currYear}:`);
    return age;
}

// const calculateAgeIn2050 = () => {
//     const currAge = Number(getAgeFromUser());
//     const futureAge = currAge + 29;
//     alert(`In 2050, you will turn ${futureAge}!`);
// }

// calculateAgeIn2050();

const calculateAgeInYear = (futureYear) => {
    const currAge = Number(getAgeFromUser());
    // futureYear (prompt input) cast as Number:
    const yearDiff = futureYear - currYear;
    const futureAge = currAge + yearDiff;
    alert(`In ${futureYear}, you will turn ${futureAge}!`);
}

const inputYear = prompt("Calculate my age in the year:");
calculateAgeInYear(inputYear);