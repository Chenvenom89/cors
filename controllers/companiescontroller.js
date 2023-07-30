const companiesDBfunctions = require("../model/companiesDB");

//ge company by ID
const getCompById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await companiesDBfunctions.getCompById(id);
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
// add company
const addAirlineCompany = async (req, res) => {
  const newCompany = req.body;
  const result = await companiesDBfunctions.addAirlineCompany(newCompany);
  res.json(result);
};

//remove copany
const removeCompany = async (id) => {
  try {
    const result = await companiesDBfunctions.removeComapny("airline_companies") .where({ Id: id }).del();
    res.json(result);
  } catch (error) {
    console.error("Error removing airline company:", error);
    throw new Error("Failed to remove airline company.");
  }
};

//update the list
const updateAirlineCompany = async (company) => {
  try {
    const result = await companiesDBfunctions
      .updateAirlineCompany("airline_companies")
      .where({ Id: company.Id })
      .update(company);
    res.json(result);
  } catch (error) {
    console.error("Error updating airline company:", error);
    throw new Error("Failed to update airline company.");
  }
};

//get all companies
const getAllCompanies = async (req, res) => {
  try {
    const result = await companiesDBfunctions.getAllCompanies();
    res.json(result);
  } catch (error) {
    console.error("Error retrieving airline companies:", error);
    res.status(500).json({ error: "Failed to retrieve airline companies" });
  }
};

module.exports = {
  getAllCompanies,
  updateAirlineCompany,
  removeCompany,
  addAirlineCompany,
  getCompById,
};
