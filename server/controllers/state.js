const State = require("./../../database/index");

const getOne = (req, res) => {
  const id = req.params.id;
  State.findOne({ id })
    .then((data) => {
      console.log("find one data", data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log("get one state err", err);
      res.status(500).send();
    });
};

module.exports = { getOne };
