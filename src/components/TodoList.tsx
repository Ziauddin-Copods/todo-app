import React, { useContext } from 'react';

import { TodosContext } from '../context/todo-context';

import { Badge, StackDivider, Text, VStack } from '@chakra-ui/react';

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const removeHandler = (id: string) => {
    todoCtx.removeTodo(id);
  };

  if (todoCtx.items.length === 0) {
    return (
      <Badge colorScheme='green' px='4' py='2' borderRadius='4'>
        Yippe!!! Nothing to do &nbsp; &#128512;
      </Badge>
    );
  }

  return (
    <VStack
      margin='10px'
      divider={<StackDivider borderColor='gray.200' />}
      borderWidth='2px'
      borderColor='gray.200'
      borderRadius='lg'
      p='4'
      width='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '60vw' }}
    >
      {todoCtx.items.map((todo) => (
        <Text
          key={todo.id}
          onClick={removeHandler.bind(null, todo.id)}
          cursor='pointer'
        >
          {todo.text}
        </Text>
      ))}
    </VStack>
  );
};

export default TodoList;
