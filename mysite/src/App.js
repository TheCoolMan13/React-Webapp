import { useState } from 'react';
import './App.css'
import Card from './Card';



function App() {

  const [users, setUsers] = useState([
    { UserId: 'Mom', UserAge: 23 },
    { UserId: 'Dad', UserAge: 25 },
    { UserId: 'Bob', UserAge: 30 },
  ]);


  const [name, setName] = useState("");
  const [age, setAge] = useState('');

  const handleAddUser = (e) => {
    e.preventDefault();

    if (name === "" || age === 0) return;
    const newUser = { UserId: name, UserAge: age };
    setUsers([...users, newUser]);
    setName('');
    setAge('');
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
            UserId={user.UserId}
            UserAge={user.UserAge}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
