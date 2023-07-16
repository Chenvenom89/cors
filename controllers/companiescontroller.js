const companiesDBfunction = require ("../model/companiesDB")




//gey company by ID
const airlineCompById = async (req, res) => {
      const id = req.params.id;
      const result = await companiesDBfunction.airlineCompById(id)
        res.json(result);
      }
      // add company
      const addAirlineCompany = async (req, res) => {
          const newCompany = req.body
          const result = await companiesDBfunction.addAirlineCompany(newCompany)
          res.json(result)
      }
      const removeCompany = async (id) => {
        try {
          const result = await companiesDBfunction.removeComapny("airline_companies").where({ Id: id }).del();
          res.json(result)
        } catch (error) {
          console.error('Error removing airline company:', error);
          throw new Error('Failed to remove airline company.');
        }
      }
      const updateAirlineCompany = async (company) => {
        try {
          const result = await companiesDBfunction.updateAirlineCompany("airline_companies").where({ Id: company.Id }).update(company);
          res.json(result)
        } catch (error) {
          console.error('Error updating airline company:', error);
          throw new Error('Failed to update airline company.');
        }
      }
      const getAllCompanies = async (req, res) => {
        try {
          const result = await companiesDBfunction.getAllCompanies();
          res.json(result);
        } catch (error) {
          console.error('Error retrieving airline companies:', error);
          res.status(500).json({ error: 'Failed to retrieve airline companies' });
        }
      };
      

      module.exports = {
        getAllCompanies,
        updateAirlineCompany,
        removeCompany,
        addAirlineCompany,
        airlineCompById
      }