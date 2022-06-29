import React from 'react';


const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        // remove item if the id of the element clicked on matches the id of the todo item

        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = (e) => {
        setTodos(todos.map((item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed //modifies the item.completed to the opposite value
                }
            }
            return item // if condition not met, return the item.completed to where it was
        })))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
                </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
                </button>
        </div>
    );
}



//<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li> toggles css element based on data fed into the HTML
//Use {text} to render text already set in the "Todo Array item", the text in the item is from the Form's InputText, check the setTodos in Form.js
export default Todo;