import { Badge, Box, Center, Heading, LinkOverlay, Text  } from '@chakra-ui/layout'
import React from 'react'
import { ImGithub } from 'react-icons/im'
import NextLink from 'next/link'
import { Button, cssVar } from '@chakra-ui/react'
import Image from 'next/image'
import { useMediaQuery } from "@chakra-ui/react"



const cover = `I am Aashirwad Kumar , Mathematics and Computing major student from BIT Mesra , with keen love for developing tech for business,operations and services. I am fascinated by patterns , designs and structure of tech and this love has motivated me to work in the Software Development industry.
I have expertise and hands-on experience in developing applications in Javascript and React for  Websites and Server handling using Node Js.I have worked in Python for developing Image Processing and Computer Vision applications.My biggest strength is to switch between domains and work on different skill sets and technologies which is apparent from projects I have made , whether it is Software for Covid Social Distancing using Image Processing during my internship or  Software to organize Todo Lists.
For past 6 months i have been associated with Floxus and am developing Frontend Components for Floxus using React components, CSS Flexbox, and Material UI, utilizing APIs in middleware to handle operations on the Floxus Main site and Unbound Site.
Also i am assisting team in Product Development of Floxus Unbound Website.I have also worked on Webflow (No Code Tool) to develop website for clients of Floxus. I have also worked on Shopify for developing E-Commerce Website working in Floxus.
I enjoy challenging tasks and engaging with projects and teams which require me to work outside my comfort and acquire new knowledge and newer development techniques for the success of the organization.
I am highly skilled in Data Structures and Algorithms and implementing them in development practices.I have also experience in troubleshooting and have conceptual understanding of software design principles .`

const Resume = () => {
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