import { Container, Box, Heading, useColorModeValue, Image} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
        css={{backdropFilter: 'blur(10px)'}}
      >
        Hello, I&apos;m a frontend developer based in India!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant={'page-title'}>
            Ananya Dhananjaya
          </Heading>
          <p>Digital craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box w="100px" h="100px" borderColor="whiteAlpha.400" borderWidth={3} borderStyle="solid" borderRadius={'full'} display="inline-block" >
          <Image borderRadius={'full'} w="100%" h="100%" src="/images/ananya.jpg" alt="Profile Image" />
      </Box>
      </Box>
      
    </Container>
  )
}

export default Page
