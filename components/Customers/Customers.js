import { useState, useEffect } from "react";
import "./Customers.css";

export default function Customers() {
  const [CustomersDB, setCustomersDB] = useState([]);

  const getCustomers = () => {
    fetch("http://localhost:4000/api/customers/getAllCustomers")
      .then((response) => response.json())
      .then((data) => {
        setCustomersDB(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getCustomers();
  }, []);
  
  const handleDelete = (customerId) => {
    const confirmed = window.confirm("Are you sure you want to delete this customer?");
    if (confirmed) {
      fetch(`http://localhost:4000/api/customers/deleteCustomer/${customerId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          // After deleting, update the customer list
          getCustomers();
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };





  

  return (
    <div>
      <h2>Customers List</h2>
      <table className="Customers-table">
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer First-name</th>
            <th>Customer Last-name</th>
            <th>Customer Address</th>
            <th>Customer Phone Number</th>
            <th>Customer Credit Card Number</th>
            <th>Customer User Name</th>
            <th>Customer Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {CustomersDB.map((customer) => (
            <tr key={customer.id} className="Customers-item">
              <td>{customer.id}</td>
              <td>{customer.fname}</td>
              <td>{customer.lname}</td>
              <td>{customer.address}</td>
              <td>{customer.phone_no}</td>
              <td>{customer.credit_card_no}</td>
              <td>{customer.user_name}</td>
              <td>{customer.password}</td>
              <td>
                <button
                  className="Delete-button"
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

