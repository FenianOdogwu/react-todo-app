import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) =>{

    // console.log(todos);
return(
    <div>
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map((todo) => ( //map the overall filtered todos rather than ALL of the todos, this allows for UI to update and show todos based on status
                <Todo 
                setTodos={setTodos}
                todos={todos}
                key={todo.id}
                todo={todo} 
                text={todo.text} 
                />
            ))}
            </ul>
        </div>
    </div>
);
}

export default TodoList;