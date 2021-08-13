import React from 'react';

import { VStack } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Charts from './components/charts/Charts';

function App() {
  return (
    <VStack>
      <Navbar />
      <TodoList />
      <AddTodo />
      <Charts />
    </VStack>
  );
}

export default App;
