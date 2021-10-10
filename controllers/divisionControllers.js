const Division = require("../models/Division");

exports.fetchAllDivision = async (req, res, next) => {
  try {
    let allDivision = await Division.find(
      {},
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );
    res.json(allDivision);
  } catch (error) {
    next(error);
  }
};

exports.createDivision = async (req, res, next) => {
  try {
    const newDivision = await Division.create(req.body);

    res.status(201).json(newDivision);
  } catch (error) {
    next(error);
  }
};
