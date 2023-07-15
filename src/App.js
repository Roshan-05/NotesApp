import { useState } from "react";
import AddNote from "./AddNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
// import notes from "./notes";


const App = () => {
  const [notes, setNotes] = useState([])
  const handleAddNote = (note)=>{    
    setNotes(prevValue=>{
      return [
        ...prevValue, note
      ]

    })
  }
  const handleDelete = (id)=>{
    setNotes(prevValue=>{
      return prevValue.filter(note => note.id !== id)
    })
    
  }
  return (
    <div className="app">
      <Header />
      <div className="AddNote">
        <AddNote handleAddNote={handleAddNote}/>
      </div>
      <div className="content">
        <Note notes={notes} handleDelete={handleDelete}/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
