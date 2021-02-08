/* FRENCH CALCULATOR */

// function frenchCalculator() {
//   const userAge = prompt('How old are you?');
//   const crushAge = prompt('How old is your crush?');

//   function rejMsg(rejReason) {
//     console.log(`Sorry, you're too ${rejReason} for them. 😬`);
//   }
//   const okMsg = console.log(`Go for it! 😍`);

//   if (crushAge > 2 * userAge - 7) {
//     rejMsg('young');
//   } else if (crushAge < userAge / 2 + 7) {
//     rejMsg('old');
//   } else {
//     okMsg();
//   }
// }

// frenchCalculator();

/* MARIO */

// multiple console.logs:
// function mario() {
//   for (let i = 7; i >= 0; i--) {
//     let line = ' '.repeat(i);
//     line += '#'.repeat(8 - i);
//     console.log(line);
//   }
// }

// single console.log, multiple lines:
// function mario() {
//   let result = '';
//   for (let i = 7; i >= 0; i--) {
//     let line = ' '.repeat(i);
//     line += '#'.repeat(8 - i);
//     line += '\n';
//     result += line;
//   }
//   console.log(result);
// }

// mario();

// user specifies height; single console.log, multiple lines:
function buildPyramid() {
  let height = prompt('How tall do you want your pyramid?');
  if (height < 1 || height > 20) {
    alert('please enter a number from 1 to 20');
  } else {
    let result = '';
    for (let i = height - 1; i >= 0; i--) {
      let line = ' '.repeat(i);
      line += '#'.repeat(height - i);
      line += '\n';
      result += line;
    }
    console.log(result);
  }
}

while (true) {
  buildPyramid();
}
