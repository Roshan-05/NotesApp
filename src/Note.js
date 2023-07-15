import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ notes, handleDelete }) => {
 

  return (
    <div className="note-list">
      {/* <h1>{title}</h1> */}
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <button onClick={()=> handleDelete(note.id)}><DeleteIcon/></button>
        </div>
      ))}
    </div>
  );
};

export default Note;
