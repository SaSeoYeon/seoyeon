import { useState } from "react";
import styled from 'styled-components';

const TodoContainer = styled.div`
    font-family: Arial, sans-serif;
   
`;

const TodoInput = styled.input`
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    
`;

const TodoButton = styled.button`
    padding: 10px;
    font-size: 16px;
    margin-left: 10px;
    border: none;
    
`;

const TodoItem = styled.li`
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:black;
`;

const TodoList = styled.ul`
    margin-top: 20px;
    padding-left: 0;
    
`;

const DeleteButton = styled.button`
    padding: 5px;
    font-size: 12px;
    cursor: pointer;
    background-color: #ff6347;
    border: none;
    color: white;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddTodo() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  }

  return (
    <TodoContainer>
      <h1>Todo List</h1>
      <div>
        <TodoInput 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Enter a new todo" 
        />
        <TodoButton onClick={handleAddTodo}>Add Todo</TodoButton>
      </div>
      <TodoList>
        {todos.map((item, index) => (
          <TodoItem key={index}>
            {item}
            <DeleteButton onClick={() => handleDeleteTodo(index)}>Delete</DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  );
}

export default App;