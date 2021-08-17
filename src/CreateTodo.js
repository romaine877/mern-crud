import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postItem } from "./api";
import TodoForm from "./TodoForm";

const CreateTodo = () => {
  const history = useHistory();

  const handleSubmit = async (data) => {
    await postItem(data);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo</h3>
        <TodoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateTodo;
