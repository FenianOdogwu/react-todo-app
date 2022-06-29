import React from 'react'; // import react from node_modules

const Form = ({setInputText, inputText,todos, setTodos, setStatus}) => {

    //Write JavaScript code and functions here

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText('');

        if (setInputText === '') {
          console.log('error');
        }
    }

    const statusHandler = (e) => {
      setStatus(e.target.value); // targets the value of the select dropdown ('all', 'completed', 'uncompleted')
    }
    return (
        <div>
            <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    <div className="todo-container"></div>
        </div>

    );
}

export default Form;

//value={inputText} to allow for code to handle the data of text typed by user