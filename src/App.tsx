import React from 'react';

import { VStack } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Charts from './components/charts/Charts';
import GraphComponent from './components/graph/GraphComponent';

function App() {
  return (
    <VStack align='center' justify='center'>
      <Navbar />
      <TodoList />
      <AddTodo />
      <Charts />
      <GraphComponent />
    </VStack>
  );
}

export default App;
