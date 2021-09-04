import React from "react";
//import components
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div class="todo-container">
      <ul class="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            filteredTodos={filteredTodos}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
