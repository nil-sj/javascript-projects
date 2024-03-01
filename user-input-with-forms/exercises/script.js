// //Code Your Solution Below
// window.addEventListener("load", function () {
//     let form = document.querySelector("#simulation-form");

//     let inpTestName = form.querySelector("input[name='testName']");
//     let inpTestDate = form.querySelector("input[name='testDate']");
//     let inpRocketType = form.querySelector("select[name='rocketType']");
//     let inpBoosterCount = form.querySelector("input[name='boosterCount']");
//     let inpWindRating = form.querySelector("input[name='windRating']:checked");
//     let inpProductionServers = form.querySelector("input[name='productionServers']");

//     let inputs = [
//         inpTestName,
//         inpTestDate,
//         inpRocketType,
//         inpBoosterCount,
//         inpWindRating,
//         inpProductionServers
//     ];

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         // alert("reached 1");
//         let values = [];
//         inputs.forEach(input => {
//             values.push(input.value);
//         });
//         let atLeastOneEmpty = false;
//         let valueString = '';
//         values.forEach((value, index) => {
//             if (value == '') {
//                 atLeastOneEmpty = true;
//             }
//             valueString += `${index}.) value = ${value}\n`;
//         });
//         if (atLeastOneEmpty) {
//             alert("reached2")
//             alert(`Entered values are:\n${valueString}\nOne or more values are empty! Please fill out all fields and try again.`);
//             event.preventDefault();
//         } else {
//             console.log("yes")
//             alert(`Entered values are:\n${valueString}\nAll values have been provided!`);
//         }
//         alert(values);
//     });
// });
