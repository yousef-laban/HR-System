const router = require("express").Router();
const {
  fetchAllDivision,
  createDivision,
} = require("../controllers/divisionControllers");

router.get("/divisions", fetchAllDivision);
router.post("/division", createDivision);

module.exports = router;
