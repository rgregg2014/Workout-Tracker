const db = require("../models");

module.exports = function (app) {
  //get all info for workouts page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  //get info for a range
  app.get("/api/workouts/range", ({}, res) => {
    db.Workout.find({})
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  //submit new completed workouts
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  //update workouts by id
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      { exercises: req.body }
    )
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
};
