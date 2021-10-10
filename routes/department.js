const router = require("express").Router();

const {
  fetchAllDepartment,
  createDepartment,
} = require("../controllers/departmentControlles");

router.get("/departments", fetchAllDepartment);
router.post("/department", createDepartment);

module.exports = router;
