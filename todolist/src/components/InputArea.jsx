import React from "react";

function InputArea(props) {
  function handleChange(event) {
    const val = event.target.value;
    props.setAdd(val);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={props.add} className="in" />
      <button onClick={props.click}>
        {props.editId !== null ? <span>Edit</span> : <span>Add</span> }
      </button>
    </div>
  );
}

export default InputArea;
