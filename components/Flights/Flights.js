import React, { useState, useEffect } from "react";
import "./Flights.css"; 

export default function Flights() {
  const [flightsDB, setFlightsDB] = useState([]);
  const [countriesDB, setCountriesDB] = useState({});
  const [airlineCompaniesDB, setAirlineCompaniesDB] = useState({});


  console.log("Flights table");
  console.log(flightsDB);

  const getFlights = () => {
    fetch("http://localhost:4000/api/flights/getAllFlights")
      .then((response) => response.json())
      .then((data) => {
        setFlightsDB(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getFlights();
  }, []);
  
  const handleUpdate = (flightId) => {
    console.log(`Update flight with ID ${flightId}`);
    fetch(`http://localhost:4000/api/flights/updateFlight/${flightId}`,{
      method:"PUT",
    })
    .then((response)=> response.jason())
    .then(()=>{
      getFlights();
    })
    .catch((error)=>{
      console.log("error updating",error);
    })
  };
 

  const handleDelete = (flightId) => {
    const confirmed = window.confirm("Are you sure you want to delete this flight?");
    if (confirmed) {
      fetch(`http://localhost:4000/api/flights/removeFlight/${flightId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
           //after deleting update the list
          getFlights();
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  const getCountryById = (id) => {
    fetch(`http://localhost:4000/api/countries/getCountriesById/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCountriesDB((prevMap) => ({ ...prevMap, [id]: data }));
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const airlineCompById = (id) => {
    fetch(`http://localhost:4000/api/airline_companies/getCompById/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAirlineCompaniesDB((prevMap) => ({ ...prevMap, [id]: data }));
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    flightsDB.forEach((flight) => {
      if (!countriesDB[flight.origin_country_id]) {
        getCountryById(flight.origin_country_id);
      }
      if (!countriesDB[flight.destination_country_id]) {
        getCountryById(flight.destination_country_id);
      }
      if (!airlineCompaniesDB[flight.airline_company_id]) {
        airlineCompById(flight.airline_company_id);
      }
    });
  }, [flightsDB, countriesDB, airlineCompaniesDB]); //dependencies here





  return (
    <div>
      <table className="Flights-table">
        <thead>
          <h1>Flights - table</h1>
          <tr>
            <th>Flight Id</th>
            <th>Airline company</th>
            <th>Origin country</th>
            <th>Destination country</th>
            <th>Departure time</th>
            <th>Landing time</th>
            <th>Remaining tickets</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flightsDB.map((flight) => (
            <tr key={flight.id} className="Flights-items">
              <td>{flight.id}</td>
              <td>{airlineCompaniesDB[flight.airline_company_id]?.company_name || "Loading..."}</td>
              <td>{countriesDB[flight.origin_country_id]?.country_name || "Loading..."}</td>
              <td>{countriesDB[flight.destination_country_id]?.country_name || "Loading..."}</td>
              <td>{flight.departure_time}</td>
              <td>{flight.landing_time}</td>
              <td>{flight.remaining_tickets}</td>
              <td>
                <button
                  className="update-button"
                  onClick={() => handleUpdate(flight.id)}>update</button>
                <button className="delete-button"
                  onClick={() => handleDelete(flight.id)} >delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
