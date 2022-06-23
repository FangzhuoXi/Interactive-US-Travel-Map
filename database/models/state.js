const State = require("./../index");
const stateData = require("./../../public/svg/statesData");
const position = require("./../../public/svg/position");

// seed database
// State.insertMany(stateData, (err) => {
//   if (err) {
//     console.log("insert data err", err);
//   }
//   console.log("insert data success");
// });

// seed position
// let save = (repos) => {
//   return Promise.all(
//     repos.map((repo) => {
//       return State.findOneAndUpdate({ id: repo.id }, repo);
//     })
//   );
// };

// save(position)
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

State.findOneAndUpdate({ id: "PA" }, { top: 41 })
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });
