import React from 'react'
import { useForm } from "react-hook-form";

const TodoForm = ({onSubmit, todo}) => {
    const { register, handleSubmit } = useForm({
        defaultValues:{text: todo ? todo.text : ""}
    });
    
    const submitHandler = handleSubmit((data) => {
      onSubmit(data)
     
    });
    
    return (
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <input {...register("text")} className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mt-3">
              create Todo
            </button>
          </div>
        </form>)
}

export default TodoForm
