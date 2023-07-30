import React, { useState, useEffect } from 'react';
import './Tickets.css';
export default function Tickets () {

    
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    id: '',
    title: '',
    description: '',
  });

 const getAllTickets = () => {
  console.log('Fetching all tickets...');
  fetch('http://localhost:4000/api/tickets/getAllTickets')
    .then((response) => {
      console.log('Response:', response);
      return response.json();
    })
    .then((data) => {
      console.log('Tickets data:', data);
      setTickets(data);
    })
    .catch((error) => console.error('Error fetching tickets:', error));
};

  const getTicketById = (id) => {
    fetch(`http://localhost:4000/api/tickets/getTicketById/${id}`)
      .then((response) => response.json())
      .then((data) => console.log('Ticket by ID:', data))
      .catch((error) => console.error('Error fetching ticket by ID:', error));
  };

  const updateTicket = () => {
    fetch("https://localhost:4000/api/tickets/updateTicket", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTicket),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error updating ticket');
        }
        console.log('Ticket updated successfully');
      })
      .catch((error) => console.error(error));
  };

  const addTicket = () => {
    fetch("https://localhost:4000/api/tickets/addTicket", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTicket),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error adding ticket');
        }
        console.log('Ticket added successfully');
      })
      .catch((error) => console.error(error));
  };

  const deleteTicket = () => {
    fetch("https://localhost:4000/api/tikets/deleteTicket", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: newTicket.id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error deleting ticket');
        }
        console.log('Ticket deleted successfully');
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllTickets();
  }, []);

  return (
    <div className="tickets-container">
      {/* Display the list of tickets */}
      <h2 className="tickets-header">Tickets please</h2>
      <ul className="ticket-list">
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.title} - {ticket.description}
          </li>
        ))}
      </ul>

      {/* Input fields for adding/updating tickets */}
      <h2 className="tickets-header">Add/Update Ticket</h2>
      <div className="add-update-section">
        <label>
          ID:
          <input
            className="input-field"
            type="text"
            value={newTicket.id}
            onChange={(e) =>
              setNewTicket({ ...newTicket, id: e.target.value })
            }
          />
        </label>
        <label>
          Title:
          <input
            className="input-field"
            type="text"
            value={newTicket.title}
            onChange={(e) =>
              setNewTicket({ ...newTicket, title: e.target.value })
            }
          />
        </label>
        <label>
          Description:
          <input
            className="input-field"
            type="text"
            value={newTicket.description}
            onChange={(e) =>
              setNewTicket({ ...newTicket, description: e.target.value })
            }
          />
        </label>
      </div>

      {/* Buttons to perform CRUD operations */}
      <div className="button-container">
        <button className="action-button" onClick={updateTicket}>
          Update Ticket
        </button>
        <button className="action-button" onClick={addTicket}>
          Add Ticket
        </button>
        <button className="action-button" onClick={deleteTicket}>
          Delete Ticket
        </button>
      </div>

      {/* Input field for fetching ticket by ID */}
      <h2 className="tickets-header">Get Ticket by ID</h2>
      <div className="get-ticket-section">
        <label>
          Ticket ID:
          <input
            className="input-field"
            type="text"
            onChange={(e) => getTicketById(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

  