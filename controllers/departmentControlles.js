const Department = require("../models/Department");

exports.fetchAllDepartment = async (req, res, next) => {
  try {
    let allDepartment = await Department.find(
      {},
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );
    res.json(allDepartment);
  } catch (error) {
    next(error);
  }
};

exports.createDepartment = async (req, res, next) => {
  try {
    const newDepartment = await Department.create(req.body);

    res.status(201).json(newDepartment);
  } catch (error) {
    next(error);
  }
};
