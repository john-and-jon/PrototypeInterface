// let name{
//   first: null;
//   Last: null;
// }
//
// let date{
//   month: null;
//   day: null;
//   year: null;
// }


//let person_a = {[


//  startingDate = { month: 06;,
//                   day: 7;,
//                   year: 1991}

//  name = { first: null;,
//        last: null;
//      },
  //date = { month: null;,
  //       day: null;,
  //       year: null;
//       },
//];}

  var exercises = [
  { name: "Push Ups", sets: 4, reps: 8 },
  { name: "Air Squats", sets: 3, reps: 8},
  { name: "Triceps Dips", sets: 3, reps: 10},
  { name: "McGill Crunches", sets: 4, reps: 6},
  { name: "Bird-Dogs", sets: 5, reps: 6},
]




console.log(exercises);
document.getElementById('finished').innerHTML = exercises.map(ex => `<li>${ex.name}, ${ex.sets} sets, ${ex.reps} reps</li>`).join('');
