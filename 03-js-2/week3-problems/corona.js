const data = [
  {
    // allergies
    name: 'John Smith',
    short_breath: false,
    temperature: 37.2,
    runny_nose: false,
    itchy_eyes: true,
  },
  {
    // corona
    name: 'Jane Doe',
    short_breath: true,
    temperature: 38.6,
    runny_nose: false,
    itchy_eyes: false,
  },
  {
    // cold
    name: 'Jim Johnson',
    short_breath: false,
    temperature: 36.3,
    runny_nose: true,
    itchy_eyes: false,
  },
  {
    // corona
    name: 'Ginny Roberts',
    short_breath: true,
    temperature: 39.2,
    runny_nose: false,
    itchy_eyes: false,
  },
  {
    // healthy
    name: 'Tina Chapman',
    short_breath: false,
    temperature: 36.4,
    runny_nose: false,
    itchy_eyes: false,
  },
  {
    // corona
    name: 'Dan Powers',
    short_breath: true,
    temperature: 38.0,
    runny_nose: false,
    itchy_eyes: true,
  },
];

// uses If/Else:
function coronavirusScreening(clients) {
  for (let i = 0; i < clients.length; i++) {
    let firstName = clients[i].name.split(' ')[0];
    let msg = `${firstName}, you `;

    // fever
    if (clients[i].temperature >= 38) {
      //fever && shortness of breath
      if (clients[i].short_breath) {
        msg += 'might have coronavirus. STAY AWAY!!';
      }
      // fever but no shortness of breath
      else {
        //FLU
        msg += 'might have the flu. WEAR A MASK!!';
      }
    }
    //no fever
    else {
      // no fever but itchy eyes
      if (clients[i].itchy_eyes) {
        //ALLERGIES
        msg += 'might have allergies. But COME ON IN!!';
      }
      // no fever, no itchy eyes
      else {
        // no fever, no itchy eyes but runny nose
        if (clients[i].runny_nose) {
          // COLD
          msg += 'might have a cold. WEAR A MASK!!';
        }
        // no fever, no itchy eyes, no runny nose
        else {
          // HEALTHY
          msg += 'seem healthy. COME ON IN!!';
        }
      }
    }
    console.log(msg);
  }
}

// uses Switch:
// function coronavirusScreening(clients) {
//   for (let i = 0; i < clients.length; i++) {
//     let firstName = clients[i].name.split(' ')[0];
//     let msg = `${firstName}, you `;

//     switch (true) {
//       case clients[i].temperature >= 38 && clients[i].short_breath:
//         msg += `might have coronavirus. Please STAY AWAY!!`;
//         break;
//       case clients[i].temperature >= 38 && !clients[i].short_breath:
//         msg += `might have the flu. Please WEAR A MASK!!!`;
//         break;
//       case clients[i].temperature < 38 && clients[i].itchy_eyes:
//         msg += `might have allergies. But COME ON IN!!`;
//         break;
//       case clients[i].temperature < 38 && clients[i].runny_nose:
//         msg += `might have a cold. Please WEAR A MASK!!!`;
//         break;
//       default:
//         msg += `seem healthy. COME ON IN!!`;
//     }
//     console.log(msg);
//   }
// }

coronavirusScreening(data); // should make logs
