import { Badge, Box, Center, Heading, LinkOverlay, Text  } from '@chakra-ui/layout'
import React from 'react'
import { ImGithub } from 'react-icons/im'
import NextLink from 'next/link'
import { Button, cssVar } from '@chakra-ui/react'
import Image from 'next/image'
import { useMediaQuery } from "@chakra-ui/react"



const cover = `I am Aashirwad Kumar, a Full Stack Developer at Fastenal IDC with a Mathematics and Computing background from BIT Mesra. With over 2 years of professional experience, I specialize in developing and optimizing enterprise-scale applications using microservices architecture.
In my current role, I've demonstrated strong technical leadership by spearheading the development of critical B2B e-commerce platform components, achieving significant performance improvements through optimization, and implementing secure authentication systems. I've successfully reduced page load times by 92% through SQL query optimization and API call minimization, directly improving client satisfaction and system efficiency.
My expertise spans both backend development with Spring Boot and Java, and frontend development with React and modern web technologies. I've played a key role in transitioning our application to a micro-frontend architecture using Webpack 5 and Module Federation, improving maintainability and scalability within our distributed microservices ecosystem.
Beyond technical skills, I excel in cross-functional collaboration, mentoring new team members, and conducting thorough code reviews. I have a proven track record of troubleshooting production issues, implementing robust debugging processes, and maintaining high-quality code standards. My experience includes managing international deployments and implementing complex business logic while ensuring optimal performance and security.
I am passionate about continuous learning and staying current with industry best practices. As a core member of the CSR team, I've demonstrated strong leadership and organizational skills by coordinating cultural events and community initiatives. My analytical background in Mathematics, combined with practical software engineering experience, allows me to approach problems with both technical precision and creative solutions.
I thrive in challenging environments that require adaptability, quick learning, and effective communication. My commitment to excellence has been recognized through achievements like the Spot Award in Q1 2024 and successful delivery of critical business applications.`

const Resume = ({selected,setSelected}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)") 

  
  return (
    <>
    <Box overflow='auto' paddingY='5%' paddingX='10%' display='flex' flexDirection={{base:'column',md:'column'}} color='white' height='calc(100vh - 22px)' bg='editor.bgiBlog'>
      {/* <Box>
        <Heading>Resume Image</Heading>
      <Center marginTop='50px'   marginBottom='10px' paddingY='10px' >
      
      <Image height={900} width={800} src='/CV.jpg' />
      </Center>
      </Box> */}
    
      <Box>
      <Heading>Cover Letter</Heading>
      <Text>{cover}</Text>
      <Box  marginTop='30px' marginBottom='30px' >
      <NextLink  href='/projects'>
<Button
  flex={1}
  onClick={()=>setSelected('PROJECTS')}
  fontSize={'sm'}
  rounded={'full'}
  bg={'blue.400'}
  color={'white'}
  boxShadow={
    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
  }
  _hover={{
    bg: 'blue.500',
  }}
  _focus={{
    bg: 'blue.500',
  }}>
 All Projects
</Button>
</NextLink>
</Box>
      </Box>
      <Box height='100%' width='100%'>
    <Heading>Resume</Heading>
    {!isMobile?<iframe width='100%' height='300%'  src= 'CV.pdf' />: <Image height={900} width={800} src='/CV.jpg' /> }
    
      
      </Box>
      
      
      </Box>


</>
  )
}

export default Resume;