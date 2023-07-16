import { useState, useEffect } from "react";

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
            <th>Admin Id</th>
            <th>Admin First-name</th>
            <th>Admin Last-name</th>
            <th>Admin User-name</th>
            <th>Admin Password</th>
          </tr>
        </thead>
        <tbody>
          {adminsDB.map((adminstrators) => (
            <tr key={adminstrators.id} className="admins-item">
              <td>{adminstrators.id}</td>
              <td>{adminstrators.fname}</td>
              <td>{adminstrators.lame}</td>
              <td>{adminstrators.user_name}</td>
              <td>{adminstrators.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

