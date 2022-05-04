import { Container, Box, Heading, useColorModeValue, Image, Spacer} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}  >
        <Box flexGrow={1}>
          <Heading as="h2" variant={'page-title'}>
            Ananya Dhananjaya
          </Heading>
          <p>Digital craftsman ( Artist / Developer / Digital Nomad )</p>
        </Box>
        <Box m="3" alignContent={"center"} w="100px" h="100px" borderColor="whiteAlpha.400" borderWidth={3} borderStyle="solid" borderRadius={'full'} display="inline-block" >
          <Image borderRadius={'full'} w="100%" h="100%" src="/images/ananya.jpg" alt="Profile Image" />
      </Box>
      </Box>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('gray.50', 'gray.500')}
        p={3}
        m={3}
        align="center"
        css={{backdropFilter: 'blur(10px)'}}
      >
        Hello, I&apos;m a frontend developer based in India!
      </Box>
      <Box>
          Ananya is a developer based in Mysore, India with a passion for building digital services/stuff she wants.
          She loves taking random pictures and hanging around in Cafes. She has around 2 years in web development and is currently working for Infosys. 
      </Box>
      
    </Container>
  )
}

export default Page
