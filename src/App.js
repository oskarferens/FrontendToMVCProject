import './App.css';
import PersonList from './components/PersonList';
import CreatePerson from './components/CreatePerson';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get(`https://localhost:7228/api/react`).then((result) => {
      setPeople(result.data);
    });
  }

  return (
    <div className="App">
      <PersonList myPeople={people} onButtonClick={fetchData}/>
      <CreatePerson onButtonClick={fetchData}/>
    </div>
  );
}

export default App;