
import './App.less';
import { Divider  } from 'antd';
import React from 'react';
import Filter from './components/Filter'
import TodoList from './components/Filter/TodoList'



function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Filter/>
      <Divider />
      <TodoList/>
    </div>
  );
}

export default App;
