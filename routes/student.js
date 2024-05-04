const Student = require("../models/student");
// create a router instance/object to define our routes
const router = require("express").Router();

// get all students
router.get("/students", function (req, res) {
  //   get students from the database
  Student.findAll()
    .then((students) => {
      res.send(students);
    })
    .catch((error) => {
      console.log(error, 500);
    });
});

// get a student by id
router.get("/students/:id", function (req, res) {
  // find the student with given id
  Student.findByPk(parseInt(req.params.id))
    .then((result) => {
      // if the result is a truthy value
      if (result) {
        res.send(result);
      } else {
        res.send("Student not found.", 404);
      }
    })
    .catch((error) => {
      console.log(error, 500); // internal server error
    });
});

// create student data to the database
router.post("/students", function (req, res) {
  // create a new student object
  const newStudent = {
    name: req.body.name,
    grade: req.body.grade,
    age: req.body.age,
  };
  // create a new student record in the database
  Student.create(newStudent)
    .then((student) => {
      res.send(student);
    })
    .catch((error) => {
      console.log(error, 500);
    });
});

router.patch("/students/:id", function (req, res) {
  // find the student with given id
  // select * from students where id = *
  Student.findByPk(parseInt(req.params.id))
    .then((student) => {
      student.name = req.body.name;
      student.grade = req.body.grade;
      student.age = req.body.age;
      student.level = req.body.level;
      // save the updates
      student.save();
      req.send(student);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/students/:id", function (req, res) {
  // find the student with given id
  // select * from students where id = *
  Student.findByPk(parseInt(req.params.id))
    .then((student) => {
      // if the student is a truthy value
      if (student) {
        // delete the student from the database
        student.destroy();
        res.send(student);
      } else {
        res.send("Student not found.", 404);
      }
    })
    .catch((error) => {
      console.log(error, 500);
    });
});

// use this in router.js
module.exports = router;
