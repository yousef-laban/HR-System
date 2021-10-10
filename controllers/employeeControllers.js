const Employee = require("../models/Employee");

exports.fetchAllEmployees = async (req, res, next) => {
  try {
    let allEmployees = await Employee.find(
      {},
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );

    res.json(allEmployees);
  } catch (error) {
    next(error);
  }
};

exports.createEmployee = async (req, res, next) => {
  try {
    const newEmployee = await Employee.create(req.body);

    res.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
};
