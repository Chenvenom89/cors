import React, { useState, useEffect } from 'react';

 export default function AdminById({ match }) {
  const [adminstratorsID, setAdminID] = useState([]);

  const getAdminsID = () => {
    fetch(`http://localhost:4000/api/adminstrators/getAdminById/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setAdminID(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAdminsID();
  }, [match.params.id]);

  if (adminstratorsID.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Admin Details</h2>
      {adminstratorsID.map((adminstrators) => (
        <div key={adminstrators.id} className="admins-item">
          <p>Admin Id: {adminstrators.id}</p>
          <p>Admin First Name: {adminstrators.fname}</p>
          <p>Admin Last Name: {adminstrators.lname}</p>
          <p>Admin User Name: {adminstrators.user_name}</p>
          <p>Admin Password: {adminstrators.password}</p>
        </div>
      ))}
    </div>
  );
}

