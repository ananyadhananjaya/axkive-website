import { Container, Box, Heading, Image} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <Container mt={20}>
      <Box display={{ md: 'flex' }}  >
        <motion.div initial={{opacity: 0}} exit={{opacity: 0}} animate={{y: 15, opacity: 1}} transition={{delay: 0.5, duration: 2}} >
        <Box >
          <Heading as="h2" size='xl'>
            Ananya Dhananjaya
          </Heading>
          <p>Web developer</p>
        </Box>
        </motion.div>
        <Box m="3" mt={{sm: 10, md: 10, lg: 0}} w="100px" h="100px" borderColor="whiteAlpha.400" borderWidth={3} borderStyle="solid" borderRadius={'full'} display="flex-end" >
          <Image borderRadius={'full'} w="100%" h="100%" src="/images/ananya.jpg" alt="Profile Image" />
      </Box>
      </Box>
          
      <motion.div animate={{y: 40}} transition={{delay: 0.7, duration: 1}} >
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
