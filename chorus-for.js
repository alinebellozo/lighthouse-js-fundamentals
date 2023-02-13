// const chorus = "Let's dance!";
// for (let repeat = 0; repeat < 10; repeat++) {
//   console.log(chorus);
// }
// console.log("Until the sun comes up!");

// var i = 100;

// for (i = 100; i <= 200; i++) {
//   console.log(i);

//   let num = i + 100;

//   if (num % 3 === 0 && num % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (num % 4 === 0) {
//     console.log("Lighthouse");
//   } else if (num % 3 === 0) {
//     console.log("Loopy");
//   // } else {
//   //   console.log("wrong");
//   }
// }

for (let num = 100; num <= 200; num++) {
  let output = "";
  
  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
}