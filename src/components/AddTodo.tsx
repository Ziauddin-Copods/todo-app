import React, { useContext, useRef } from 'react';

import { TodosContext } from '../context/todo-context';

import { Button, HStack, Input, toast, useToast } from '@chakra-ui/react';

const AddTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      toast({
        title: 'Add text to your TODO',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <HStack mt='4'>
        <Input variant='filled' placeholder='Add todo' ref={todoTextInputRef} />
        <Button px='8' backgroundColor='red.500' color='white' type='submit'>
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
