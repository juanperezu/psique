import React, { useState, useEffect, useRef } from "react";
import "./Diario.css";
import Note from "./Components/Nota";
import Nav from "/src/Components/Navbar.js";

const App = () => {
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, [isEditing]);

  const updateNoteText = event => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (!inputValue.replace(/\s/, "").length) {
      return;
    }

    const newNotesArray = [...notes, inputValue];
    setNotes(newNotesArray);
    setInputValue("");
  };

  const deleteTask = index => {
    const notesArray = [...notes];
    notesArray.splice(index, 1);
    setNotes(notesArray);
  };

  return (
    <div>
      <Nav />
 <div className="Diario">
      <div className="titulo">
        <b>Mi Diario</b>
      </div>
      <div className="Notas">
      <div className="Añadir" type="button" onClick={addTask}>+</div>
      <input
          ref={inputRef}
          type="text"
          className="textInput"
          value={inputValue}
          onChange={updateNoteText}
          onKeyPress={handleKeyPress}
        />
        {notes.map((item, index) => (
          
          <Note
            item={item}
            onClick={() => deleteTask(index)}
            key={`task${index}`}
          />
        ))}
        
      </div>
      <div className="footer"></div>
    </div>
      
      <div className="container">
       
      </div>
    </div>
  );
};

export default App;

