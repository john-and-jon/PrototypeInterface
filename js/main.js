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
  { id: 0,name: "Push Ups", sets: 4, reps: 8, complete: false},
  { id: 1,name: "Air Squats", sets: 3, reps: 8, complete: true},
  { id: 2,name: "Triceps Dips", sets: 3, reps: 10, complete: true},
  { id: 3,name: "McGill Crunches", sets: 4, reps: 6, complete: false},
  { id: 4,name: "Bird-Dogs", sets: 5, reps: 6, complete: true},
]
//`<label>
//<input type="checkbox" name="exercise${ex.id}">
//</li>`

console.log(exercises);
document.getElementById('finished').innerHTML = exercises.map(ex => `<li class="task"><label>
<input type="checkbox" name="exercise${ex.id}">
${ex.name}, ${ex.sets} sets, ${ex.reps} reps</li>`).join('');

//let complete;
//(complete) ? 'complete' : '';
//(complete) ? 'checked' : '';
