import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  { text: 'Cortar', completed: true },
  { text: 'Tomar', completed: false },
  { text: 'Llorar', completed: false },
  { text: 'Saludar', completed: true }
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter  completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>
      

      <CreateTodoButton/>
    </React.Fragment>
  );
}



export default App;
