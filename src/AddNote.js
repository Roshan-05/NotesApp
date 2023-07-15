import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const AddNote = (props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [addNote, setAddNote] = useState({
    title: "",
    content: "",
    id: 0,
  });
  const handleChange = (event) => {
    const inputTitle = event.target.name;
    const newValue = event.target.value;
    setAddNote((prevValue) => {
      return {
        ...prevValue,
        [inputTitle]: newValue,
      };
    });
  };

  const onAdd = (event) => {
    setAddNote((prevValue) => {
      return {
        ...prevValue,
        id: Date.now(),
      };
    });
    props.handleAddNote(addNote);
    setAddNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div className="add-note">
      <form className="create-note">
        {isExpanded && <input
          onChange={handleChange}
          placeholder="Title"
          name="title"
          value={addNote.title}
        />}
        <textarea
        onClick={()=> setIsExpanded(true)}
          onChange={handleChange}
          placeholder="Take a note..."
          name="content"
          value={addNote.content}
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={onAdd}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default AddNote;
