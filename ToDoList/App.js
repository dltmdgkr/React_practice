import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {setToDo(event.target.value)};
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currArray) => [toDo, ...currArray]);
    setToDo("");
  };
  return ( 
    <div>      
      <h2>ToDoList ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do ..."
        />
        <button>add</button>
      </form>
      <hr />
      {toDos.map((todo, index) => <li key={index}>{todo}</li>)}
    </div>
  );
}

export default App;
