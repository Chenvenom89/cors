import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./Adminstrators.css"

export default function Adminstrators() {
  const [adminsDB, setAdminsDB] = useState([]);
  console.log("administrators table");
  console.log(adminsDB);

  const getAdmins = () => {
    fetch("http://localhost:4000/api/adminstrators/getAllAdmins")
      .then((response) => response.json())
      .then((data) => {
        setAdminsDB(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getAdmins();
  }, []);
  

  return (
    <div>
        
      <table className="admins-table">
        <thead>
          <tr>
            <th> Admin Id</th>
            <th> First-name</th>
            <th> Last-name</th>
            <th> User name</th>
            <th> Password</th>
          </tr>
        </thead>
        <tbody>
          {adminsDB.map((adminstrators) => (
            <tr key={adminstrators.id} className="admins-item">
              <td>{adminstrators.id}</td>
              <td>{adminstrators.fname}</td>
              <td>{adminstrators.lname}</td>
              <td>{adminstrators.user_name}</td>
              <td>{adminstrators.password}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <Link to = "/Customers" className="linkStyle">Customers  </Link>
      <Link to ="/Flights" className = "linkStyle">Flights table </Link>
      <Link to ="/Countries"className = "linkStyle">Countries</Link>
      <Link to ="/Companies"className = "linkStyle">Airline-Companies</Link>
    </div>
  );
}

