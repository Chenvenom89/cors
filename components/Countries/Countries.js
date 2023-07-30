import React, { useState, useEffect } from "react";
import "./Countries.css"; 


export default function Countries() {
  const [countriesDB, setCountriesDB] = useState([]);
  console.log("Countries table");
  console.log(countriesDB);

const getCountryById = (id) => {
  fetch(`http://localhost:4000/api/countries/getCountriesById/${id}`)
    .then((response) => response.json())
    .then((data) => {
      
      console.log("Country by ID", data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
const getCountries = () => {
  fetch("http://localhost:4000/api/countries/getCountries")
    .then((response) => response.json())
    .then((data) => {
      setCountriesDB(data);
      console.log(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
}; 
const removeCountry = ()=>{
  fetch('http://localhost:4000/api/countries/removeCountry')
  .then ((response)=> response.json())
  .then((data)=>{
    setCountriesDB();
  })
  .catch((error) => {
    console.log("error", error);
  });
}
const addCountry = (country)=>{
  fetch('https://localhost:4000/api/countries/addCountry')
  .then((response)=> response.json())
  .then((data)=>{
    setCountriesDB();
  })
  .catch((error)=>{
    console.log("error",error);
  })

}


useEffect(() => {
  removeCountry();
  getCountries();
  getCountryById();
  addCountry();
}, []);

const handleUpdate = (countryId) => {
  console.log(`Update flight with ID ${countryId}`);
};
const handleaddedCountry = (countryId)=>{
  console.log(`country added ${countryId}`);
}

const handleDelete = (countryId) => {
  const confirmed = window.confirm("Are you sure you want to delete this flight?");
  if (confirmed) {
    fetch(`http://localhost:4000/api/countries/removeCountry/${countryId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
         //after deleting update the list
        getCountries();
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
};

return (
  <div>
    <table className="Flights-table">
      <thead>
        <h1>Countries - table</h1>
        <tr>
          <th>Country Id</th>
          <th>Country Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {countriesDB.map((country) => (
          <tr key={country.id} className="Countries-items">
            <td>{country.id}</td>
            <td>{country.country_name}</td>
            
            <td>
              <button
                className="update-button"
                onClick={() => handleUpdate(country.id)}>update</button>
              <button className="delete-button"
                onClick={() => handleDelete(country.id)} >delete</button>
                <button className = "add country"
                onClick={()=> handleaddedCountry(country.id)}>change country</button>
            </td>
          </tr>
        ))}
      </tbody>
      
    </table>
    
  </div>
);
        }