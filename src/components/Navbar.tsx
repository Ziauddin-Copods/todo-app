import React from 'react';
import {
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import logoWhite from '../logo-white.png';
import logoBlack from '../logo-black.png';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container width='100%' maxW='100%' mb='4'>
      <HStack m='2'>
        <Image
          src={colorMode === 'light' ? logoBlack : logoWhite}
          alt='Logo'
          boxSize='60px'
          objectFit='contain'
        />
        <Spacer />
        <Heading
          size='lg'
          fontSize='36px'
          bgGradient='Linear(to-r, green.300, green.400, green.500)'
          bgClip='text'
        >
          Todo List
        </Heading>
        <Spacer />
        <IconButton
          aria-label='Toogle Theme'
          icon={<FaSun />}
          isRound={true}
          onClick={toggleColorMode}
        />
      </HStack>
    </Container>
  );
}

export default Navbar;
