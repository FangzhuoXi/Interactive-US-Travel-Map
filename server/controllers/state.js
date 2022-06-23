const State = require("./../../database/index");

const getOne = (req, res) => {
  let id = req.params.id;
  State.findOne({ id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log("get one state err", err);
      res.status(500).send();
    });
};

const editOne = (req, res) => {
  let id = req.params.id;
  State.findOneAndUpdate({ id }, req.body)
    .then((data) => {
      // this data is one step slower
      res.status(200).send();
    })
    .catch((err) => {
      console.log("update one state err", err);
      res.status(500).send();
    });
};

const getAllWishList = (req, res) => {
  State.find({ wish: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log("get wish list err", err);
    });
};

const getAllBeenToList = (req, res) => {
  State.find({ BeenTo: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log("get beentoo list err", err);
    });
};

module.exports = { getOne, editOne, getAllWishList, getAllBeenToList };
