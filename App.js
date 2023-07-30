import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Adminstrators from "./components/adminstarators/Adminstrators";
import Flights from "./components/Flights/Flights";
import Home from "./components/Home/Home";
import AdminById from "./components/adminstarators/AdminsbyId";
import Navbar from "./components/Navbar/Navbar";
import Root from "./components/Root/Root";
import Customers from "./components/Customers/Customers";
import Members from "./components/Members/Members";
import Tickets from "./components/Tickets/Tickets";
import Adminslogin from "./components/adminstarators/Adminslogin";
import FlightsNo from "./components/Flights/FlightsNo";
import Countries from './components/Countries/Countries';
import Companies from "./components/Companies/Companies";
import NewComp from "./components/Companies/NewComp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Home/>
          </div>
        ),
      },
      {
        path:"/NewComp",
        element:<NewComp/>

      },
      {
        path:'/Members',
        element:<Members/>

      },
      {
        path:'/Countries',
        element:<Countries/>

      },
      {
        path:"/Companies",
        element:<Companies/>

      },
      {
        path:"/Adminslogin",
        element:<Adminslogin/>

      },
      {
          path:'/customers',
          element:<Customers/>
      },
     
      {
        path: "/administrators",
        element: <Adminstrators />,
      },
      {
        path: "/Flights",
        element: <Flights />,
      },
      {
        path:"/FlightsNo",
        element:<FlightsNo/>

      },
      
      {
        path: "/AdminsById",
        element: <AdminById match={{ params: { id: "admin-id" } }} />,
      },
      {
        path:"/Tickets",
        element:<Tickets/>
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

//bring up react.(port3000 and connect to port 4000 where the )
//const "any table" =  const flights = fetch (localhost:4000/get flights) use "useEffect"
//search for C.O.R.S "npm install CORS"
