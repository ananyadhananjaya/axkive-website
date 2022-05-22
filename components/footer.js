import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion";

const Footer = () => {
    return(
        <motion.div initial={{y:50}} animate={{y: 70}}>
            <Box align="center" opacity={0.4} fontSize="sm">
           &copy; {new Date().getFullYear()} Ananya Dhananjaya. All Rights Reserved.
        </Box>
        </motion.div>
    )
}

export default Footer;