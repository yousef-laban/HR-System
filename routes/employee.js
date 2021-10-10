const router = require("express").Router();

const {
  fetchAllEmployees,
  createEmployee,
} = require("../controllers/employeeControllers");

router.get("/Employees", fetchAllEmployees);
router.post("/Employee", createEmployee);

module.exports = router;
