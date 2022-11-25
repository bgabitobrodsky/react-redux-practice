import { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './store/apis'

export const TodoApp = () => {

    //const { data: todos = [], isLoading } = useGetTodosQuery(); 
    const [ todoId, setTodoId ] = useState(1);   
    const { data: todo, isLoading } = useGetTodoQuery(todoId); 
    
    const nextTodo = () => {
        setTodoId( todoId + 1);
    }

    const prevTodo = () => {
        if( todoId === 1) return;
        setTodoId( todoId - 1);
    }

    return (
        <>
            <h1>Todo List con RKT Query</h1>
            <hr/>
            <h4>isLoading { isLoading? 'True': 'False' }</h4>
            <pre>
                {JSON.stringify(todo)}
            </pre>

            <button onClick={prevTodo}>
                Prev
            </button>
            <button onClick={nextTodo}>
                Next
            </button>

            {/*<ul>
                {todos.map( ({ id, title, completed }) => (
                    <li key={ id }>
                        <strong>
                            { completed? 'Done ': 'Pending '}
                        </strong>
                        { title }
                    </li>
                ))}
                </ul>*/}

            
        </>
    )
}
