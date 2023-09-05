import React, {useEffect,useState} from "react";

const App = () => {

    const [name, setName]        = useState(0)
    const [age, setAge]          = useState(1)
    const [picture, setPicture]  = useState(2)

    const syncName = () => {
        setName (Piti)
    }

    const syncAge = () => {
        setAge (20)
    }
    
    const syncPicture = () => {
        setPicture 

    }

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
      };

      const handleAgeChange = (event) => {
        const newAge = event.target.value;
        setAge(newAge);
      };


    const handlePictureChange = (event) => {
        const newPicture = event.target.value;
        setPicture(newPicture);
      };
    
      useEffect (syncName, [])
      useEffect (syncAge, [])
      useEffect (syncPicture, [])

return (
    <div>


        <input type="text" value={name} onChange={handleNameChange} />
        <input type="number" value={age} onChange={handleAgeChange} />
        <input type="image" value={picture} onChange={handlePictureChange} />
        <button onClick={syncName}>Name</button>
        <button onClick={syncAge}>Age</button>
        <button onClick={syncPicture}>Picture</button>


    </div>
) 

}

export default App;