import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { getItem, patchItem } from './api'
import TodoForm from './TodoForm'



const EditTodo = () => {
    const history = useHistory()
    const match = useRouteMatch()
    const [todo, setTodo] = useState()
    useEffect(()=>{
       
        const fetchItem = async () =>{
            const data = await getItem(match.params.id)
            setTodo(data)
        }
        
        fetchItem()
        
    },[])
    
    const handleSubmit = async (data)=>{
        await patchItem(match.params.id, data)
        history.push("/")

    }
    

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Edit Todo Item</h3>
                {todo && <TodoForm todo={todo} onSubmit={handleSubmit} />}
            </div>
        </div>
    )
}

export default EditTodo;
