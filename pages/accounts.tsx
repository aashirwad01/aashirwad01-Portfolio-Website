import { Badge, Box, Center, Heading, LinkBox, LinkOverlay, Stack } from '@chakra-ui/layout'
import React from 'react'
import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im'


const Accounts=()=> {
  return (

    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center' justifyContent='center' color='white' height='calc(100vh - 22px)' bg={'editor.bgiProject'} overflowY='auto'>
     <Center marginBottom={5}> <Heading fontSize='3rem'>Connect with Me <span style={{color:'orange'}}> @aashirwad01</span></Heading></Center>
<Stack align={'center'} justify={'center'} spacing='50px' direction='row' mt={5}>
        <LinkBox>
        <a
         href='https://github.com/aashirwad01' target="_blank" rel="noopener noreferrer" >
          <LinkOverlay>
          
          <Badge
            px={2}
            py={1}
            bg= 'blue.400'
            fontSize='40px'
            fontWeight={'400'}>
            <ImGithub/>
          </Badge>
       </LinkOverlay>
       </a>
      </LinkBox>
      <LinkBox>
        <a
         href='https://twitter.com/aashirwad_01' target="_blank" rel="noopener noreferrer" >
          <LinkOverlay>
          
          <Badge
            px={2}
            py={1}
            bg= 'red.400'
            fontSize='40px'
            fontWeight={'400'}>
            <ImTwitter/>
          </Badge>
       </LinkOverlay>
       </a>
      </LinkBox>
      <LinkBox>
        <a
         href='https://www.linkedin.com/in/aashirwadkumar159/' target="_blank" rel="noopener noreferrer" >
          <LinkOverlay>
          
          <Badge
            px={2}
            py={1}
            bg= 'green.400'
            fontSize='40px'
            fontWeight={'400'}>
           <ImLinkedin/>
          </Badge>
       </LinkOverlay>
       </a>
      </LinkBox>
        </Stack>

    </Box>
   
  )
}

export default Accounts;
