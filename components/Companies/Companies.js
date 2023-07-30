import React from "react"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Companies.css";


export default function Companies() {
const [companiesDB,setCompaniesDB]=useState([]);
console.log("Companies table");
console.log(companiesDB);

const getAllCompanies = () => {
  fetch("http://localhost:4000/api/airline_companies/getAllCompanies")
    .then((response) => response.json())
    .then((data) => { 
      setCompaniesDB(data);
      console.log(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
useEffect(()=>{
  getAllCompanies();
},[])

const airlineCompById = (id)=> {
fetch(`https://localhost:4000/api/airline_companies/getCompById/${id}`)
.then((response)=>response.json())
.then((data)=>{
  setCompaniesDB(data)
  console.log(data);
})
.catch((error)=>{
  console.log("error",error);
});
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
    setCompaniesDB(data);
    console.log("Company added", data);
  })
  .catch((error) => {
    console.log("error", error);
  });
};
const removeCompany = (id) => {
  fetch(`http://localhost:4000/api/airline_companies/removeCompany/${id}`, {
    method: 'DELETE',
  })

  .then((response)=>response.json())
  .then((data)=>{
    setCompaniesDB(data)
    console.log(data);
  })
.catch((error)=>{
  console.log("error removing a country",error);
});
};

const updateAirlineCompany =()=>{
  fetch("http://localhost:4000/api/airline_companies/updateAirlineCompany")
  .then((response)=>response.jason())
  .then((data)=>{
    setCompaniesDB();
    console.log(data);
  })
  .catch((error)=>{
    console.log("error updating a company",error);
  })
}
useEffect(()=>{
  updateAirlineCompany()
  removeCompany ()
  addAirlineCompany()
  airlineCompById()
  getAllCompanies()
},[]);


return (
  <div>
    <h1 className="head-line">Companies Table</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Country ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {companiesDB.map((company) => (
          <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.company_name}</td>
            <td>{company.country_id}</td>
            <td>
            
              <button onClick={() => removeCompany(company.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="buttons-container">
    <Link to="/NewComp">
  <button>Add New Company</button>
</Link>
      <button onClick={() => updateAirlineCompany()}>Update Companies</button>
    </div>
  </div>
);
}


