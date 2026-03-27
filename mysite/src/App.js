import { useEffect, useState } from 'react';
import './App.css'
import Card from './Card';



function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersFromBackend = async () => {

      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error("Failed To fetch users : ", error);
      }
    }
    getUsersFromBackend();
  }, [])

  const handleEditUser = (indexToEdit, newName, newAge) => {
    const updatedUsers = [...users];
    updatedUsers[indexToEdit] = { UserId: newName, UserAge: newAge };
    setUsers(updatedUsers);
  }

  const [name, setName] = useState("");
  const [age, setAge] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();

    if (name === "" || age === 0 || age === "") return;

    // The package we want to send
    const newUser = { UserId: name, UserAge: age };

    try {
      // 1. Send the data to the Express server
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST', // Tell fetch we are SENDING data, not getting it
        headers: {
          'Content-Type': 'application/json' // Tell the server "Hey, expect JSON formatted data!"
        },
        body: JSON.stringify(newUser) // Convert our React object into a JSON string for the trip
      });

      // 2. Check if the server accepted it
      if (response.ok) {
        // Optional: Read the success message from the server
        const result = await response.json();
        console.log(result.message);

        // 3. The server saved it! Now update the React screen
        setUsers([...users, newUser]);

        // 4. Clear the input boxes
        setName('');
        setAge('');
      } else {
        console.error("Something went wrong on the server!");
      }

    } catch (error) {
      console.error("Could not connect to the server:", error);
    }
  }

  return (
    <div className="App">
      <div className="form-container">
        <h2>Adaugă un utilizator nou</h2>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            placeholder="Numele..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Vârsta..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">Adaugă în listă</button>
        </form>
      </div>

      {/*
      Card component
      */}
      <div className='cards-component'>
        {users.map((user, index) => (
          <Card
            key={index}
            index={index}
            UserId={user.UserId}
            UserAge={user.UserAge}
            onEdit={handleEditUser}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
