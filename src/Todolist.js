import React from 'react'
import Todo from './Todo'

const Todolist =({todos, setTodos, filteredTodos}) =>{
    return (
        <div className="todos_wrap">
            <ul className="todos_list">
            {filteredTodos.map((todo)=>
            (<Todo 
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
                todo={todo}
                text={todo.text}  />)
            )}
            </ul>
        </div>
    )
}

export default Todolist 
