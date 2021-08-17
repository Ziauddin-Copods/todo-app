import { Container, HStack, Text, Flex, Spacer, Box } from '@chakra-ui/react';
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
          Recharts
        </Text>
      </Container>
      <Flex
        w='100%'
        h='auto'
        align='center'
        direction={['column', 'column', 'row', 'row']}
      >
        <Box w={['90%', '80%', '50%', '50%']}>
          <AreaChartComponent />
        </Box>
        <Box w={['90%', '80%', '50%', '50%']}>
          <RadalChartComponent />
        </Box>
      </Flex>
      {/* <HStack width='100%'>
        <AreaChartComponent />
        <RadalChartComponent />
      </HStack> */}
      {/* <br />
      <br /> */}

      <Flex
        w={['100%', '90%', '90%', '99%']}
        h='auto'
        align='center'
        direction={['column', 'column', 'row', 'row']}
        overflowX='hidden'
      >
        <Box w={['90%', '80%', '50%', '50%']}>
          <BarChartComponent />
        </Box>
        <Box w={['90%', '80%', '50%', '50%']}>
          <LineChartComponent />
        </Box>
      </Flex>
      {/* <HStack width='100%'>
        <BarChartComponent />
        <LineChartComponent />
      </HStack> */}
    </>
  );
};

export default Charts;
