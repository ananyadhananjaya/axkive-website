import { Container, Box, Heading, useColorModeValue, Image, Spacer} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}  >
        <motion.div animate={{y: 100}} transition={{delay: 1, duration: 2}} >
        <Box flexGrow={1}>
          <Heading as="h2" size='xl'>
            Ananya Dhananjaya
          </Heading>
          <p>Web developer</p>
        </Box>
        </motion.div>
        <Box m="3" alignContent={"center"} w="100px" h="100px" borderColor="whiteAlpha.400" borderWidth={3} borderStyle="solid" borderRadius={'full'} display="inline-block" >
          <Image borderRadius={'full'} w="100%" h="100%" src="/images/ananya.jpg" alt="Profile Image" />
      </Box>
      </Box>    
      <motion.div animate={{y: 100}} transition={{delay: 1, duration: 2}} >
      <Box>
          Ananya is a developer based in Mysore, India with a passion for building digital services/stuff she wants.
          She likes to build websites to help business run better.
          She has around two years in web development and is currently working for Infosys. 
      </Box>
      </motion.div>
      
    </Container>
  )
}

export default Page
