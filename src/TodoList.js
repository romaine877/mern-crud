import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems } from "./api";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItems();
      setTodos(data);
    };

    fetchItems();
  }, []);
  console.log(todos);
  return todos ? (
    <div className="container">
      <h3>TodoList</h3>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td>{todo.text}</td>
              <td>
                <Link to={`/edit/${todo._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default TodoList;
