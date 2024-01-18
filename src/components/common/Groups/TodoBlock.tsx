import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

interface TodoBlock {
  userId?: number;
}

const TodoBlock: React.FC<TodoBlock> = ({ userId }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoBlock;
