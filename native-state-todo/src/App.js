import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputText = e.target["task"].value;
    const nextid = idCounter + 1;
    setIdCounter(nextid);
    setTodos([...todos, { id: nextid, task: inputText, checked: false }]);
  };

  const handleChangeCheckBox = (id) => {
    const changedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(changedTodos);
  };

  const handleClickDeleteButton = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="task" />
        <button>登録</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className={todo.checked ? "checked" : ""}>
            <input
              type="checkbox"
              onChange={() => handleChangeCheckBox(todo.id)}
            />
            {todo.task}
            <button onClick={() => handleClickDeleteButton(todo.id)}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
