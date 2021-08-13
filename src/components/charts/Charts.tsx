import Reacr from 'react';
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import AreaChartComponent from './AreaChartComponent';
import RadalChartComponent from './RadalChartComponent';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';

const Charts = () => {
  return (
    <>
      <Container m='50px 0 !important'>
        <Text
          textAlign='center'
          size='lg'
          fontSize='32'
          bgGradient='Linear(to-r, green.300, green.400, green.500)'
          bgClip='text'
        >
          Charts
        </Text>
      </Container>
      <HStack width='100%'>
        <AreaChartComponent />
        <RadalChartComponent />
      </HStack>
      <br />
      <br />
      <HStack width='100%'>
        <BarChartComponent />
        <LineChartComponent />
      </HStack>
    </>
  );
};

export default Charts;
