const db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
        });
    });

    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
        .then((data) => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
        });
    });
}