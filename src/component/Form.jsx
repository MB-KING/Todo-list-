import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setstatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setstatus(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        class="todo-input"
      />
      <button onClick={submitTodoHandler} class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select onChange={statusHandler} name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
export default Form;
