import {React,useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ToDoItem(props) {
  const [completed,setCompleted] = useState(false);

  const handleCompleted = () =>{
    setCompleted(!completed);
  }
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {/* {props.item}  */}
      <span   style={{ cursor: 'pointer' }} onClick={handleCompleted}>{props.item}</span>
      <div className="button-container">

        <button className="cmlbtn" 
           onClick={() => {
            props.edit(props.id);
          }}>
          <EditIcon color="secondary"/>
        </button>

        <button className="dltbtn" 
          onClick={() => {
            props.del(props.id);
          }}>
          <DeleteIcon color="secondary"/>
        </button>

      </div>
    </li>
  );
}

export default ToDoItem;
