import React from 'react';

import { VStack } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <VStack>
      <Navbar />
      <TodoList />
      <AddTodo />
    </VStack>
  );
}

export default App;
