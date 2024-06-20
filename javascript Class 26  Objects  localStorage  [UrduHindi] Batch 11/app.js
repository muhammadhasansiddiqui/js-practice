// var aboutMactcs = [
//   // box = 1
//   {
//     detail: {
//       Eight: "Super Eight . T20 43 of 55",
//       time: "Today",
//     },
//     team1: {
//       teamFlag: "./images/Afghanistan.png",
//       teamName: "Afghanistan",
//     },
//     team2: {
//       teamFlag: "./images/India.png",
//       teamName: "India",
//     },
//     result: {
//       resultTitle: " Starts at 7:30pm ",
//       matchImage: "./images/Afghanandpa.png", // Corrected the file extension
//     },
//   },
//   // box = 2
//   {
//     detail: {
//       Eight: "Super Eight . T20 44 of 55",
//       time: "Tomorrow",
//     },
//     team1: {
//       teamFlag: "./images/Australia.png",
//       teamName: "Australia",
//     },
//     team2: {
//       teamFlag: "./images/Bangladesh.png",
//       teamName: "Bangladesh",
//     },
//     result: {
//       resultTitle: " Starts at 5:30am ",
//       matchImage: "./images/afghanandpa.png", // Corrected the file extension
//     },
//   },
//   // box = 3
//   {
//     detail: {
//       Eight: "Super Eight . T20 45 of 55",
//       time: "Tomorrow",
//     },
//     team1: {
//       teamFlag: "./images/England.png",
//       teamName: "England",
//     },
//     team2: {
//       teamFlag: "./images/SouthAfrica.png",
//       teamName: "South Africa",
//     },
//     result: {
//       resultTitle: " Starts at 7:30pm ",
//       matchImage: "./images/afghanandpa.png", // Corrected the file extension
//     },
//   },
//   // box = 4
//   {
//     detail: {
//       Eight: "Super Eight . T20 42 of 55",
//       time: "Today",
//     },
//     team1: {
//       teamFlag: "./images/Westindes.png",
//       teamName: "West indies",
//       score: "180/4 (20)",
//     },
//     team2: {
//       teamFlag: "./images/England.png",
//       teamName: "England",
//       score: "181/2 (17.3)",
//     },
//     result: {
//       resultTitle: " Eng won by 8 wk ( 15 balls left) ",
//       matchImage: "./images/afghanandpa.png", // Corrected the file extension
//     },
//   },
//   // box = 5
//   {
//     detail: {
//       Eight: "Super Eight . T20 41 of 55",
//       time: "yesterday",
//     },
//     team1: {
//       teamFlag: "./images/SouthAfrica.png",
//       teamName: "South Africa",
//       score: "194/4 (20)",
//     },
//     team2: {
//       teamFlag: "./images/UnitedStates.png",
//       teamName: "United States",
//       score: "176/6 (20)",
//     },
//     result: {
//       resultTitle: " SA won by 18 runs ",
//       matchImage: "./images/afghanandpa.png", // Corrected the file extension
//     },
//   },
//   // box = 6
//   {
//     detail: {
//       Eight: "Super Eight . T20 40 of 55",
//       time: "Tue, 18 jun",
//     },
//     team1: {
//       teamFlag: "./images/Westindes.png",
//       teamName: "West indies",
//       score: "218/5 (20)",
//     },
//     team2: {
//       teamFlag: "./images/Afghanistan.png",
//       teamName: "Afghanistan",
//       score: "114 (16)",
//     },
//     result: {
//       resultTitle: " WI won by 104 runs ",
//       matchImage: "./images/afghanandpa.png", // Corrected the file extension
//     },
//   },
// ];

// var boxcontainer = document.getElementById("box-container");

// boxcontainer.innerHTML = aboutMactcs
//   .map(function (box) {
//     return `
//       <div class="box">
//         <div class="detail">
//           <div class="eight">${box.detail.Eight}</div>
//           <div class="time">${box.detail.time}</div>
//         </div>
//         <div class="teams">
//           <div class="team1">
//             <img src="${box.team1.teamFlag}" alt="">
//             <div class="team-name">${box.team1.teamName}</div>
//             <div class="score">${box.team1.score || ""}</div>
//           </div>
//           <div class="team2">
//             <img src="${box.team2.teamFlag}" alt="">
//             <div class="team-name">${box.team2.teamName}</div>
//             <div class="score">${box.team2.score || ""}</div>
//           </div>
//         </div>
//         <div class="result">
//           <div class="result-title">${box.result.resultTitle}</div>
//           <img src="${box.result.matchImage}" alt="">
//         </div>
//       </div>
//     `;
//   })
//   .join("");

// console.log(aboutMactcs);
