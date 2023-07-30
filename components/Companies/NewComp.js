import React, { useState } from 'react';
import "./NewComp.css";

export default function NewComp() {
  const [companyData, setCompanyData] = useState({
    company_name: '',
    company_id: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addAirlineCompany = (company) => {
    fetch("http://localhost:4000/api/addAirlineCompany", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(company),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Company added", data);
    })
    .catch((error) => {
      console.log("error", error);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAirlineCompany(companyData);
  };

  return (
    <div>
      <h1>Add New Airline Company</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="company_name"
            value={companyData.company_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Company ID:</label>
          <input
            type="text"
            name="company_id"
            value={companyData.company_id}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
}
