import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    VStack,
    useBreakpointValue,
    keyframes,
    HStack
  } from '@chakra-ui/react';
  import NextLink from 'next/link'
 import Image from 'next/image'
  const workingAt=
{
    heading:'Working At',
    line:'Floxus.Co',
    lineCurrent:'Student Developer',
    timeline:'Feb 2022-Current',
    tag:'Web Development, Shopify Development, Automation, Blog Writing',
   
}
const internAt=
{
 
  heading:'Interned At',
  company1:'SNTI, TATA Steel',
  company2:'IIT Indore',
  timeline:'',
  tag:'',
  // companyicon:'/favicon_floxus.png'
}

 

const KnowmeEditor = () =>  {
  return (
    <Box paddingX='5vw'>
      <Box>
    <Box flexDirection={{ base: 'column', md: 'row' }}  paddingTop='10vh' paddingX='10vw' display='flex' alignItems='center' justifyContent='center'    >

      <Box marginRight='2vw' >
      <Heading color='blue.400' fontSize='70px'  fontFamily={'body'}>
          Who Am I
        </Heading>
        <Text color='white' fontSize='35px' fontWeight={600}  mb={1}>
          Aashirwad Kumar
        </Text>
        <Text
         fontSize='25px'
          color='gray.400'
         >
          An Abnormaly Curious Guy.
        </Text>
        
        
        <HStack>
          <Avatar
          size={'sm'}
          src={
            '/mesra.png'
          }
          alt={'Avatar Alt'}
         
          pos={'relative'}
          
        />
        <Box>
        <Text
         fontSize='20px'
          color='gray.400'
         >
          Studying Imsc Mathematics and Computing at BIT Mesra,Ranchi
        </Text>
        <Text
         fontSize='18px'
          color='gray.400'
         >
          2018-Current
        </Text>
        </Box>
        

       
        
        
        </HStack>

        <Box marginTop={2} >
            <Text color='green.400' fontSize='30px' fontWeight={600}  mb={1}>
         {workingAt.heading}:
        </Text>
        <HStack>
          <Image src='/favicon_floxus.png' width={20} height={20}/>
        <Text color='white' fontSize='25px' fontWeight={600}  mb={1}>
         {workingAt.line} 
        </Text>
        </HStack>
        <Text
         fontSize='18px'
          color='gray.400'
         >
          {workingAt.lineCurrent}
        </Text>
        <Text color='white' fontSize='15px'   mb={1}>
         {workingAt.timeline} 
        </Text>
        
        <Stack   direction={'row'} mt={2}>
          <Badge
            px={2}
            py={1}
            bg= 'green.200'
            fontWeight={'400'}>
            Web Development
          </Badge>
          <Badge
            px={2}
            py={1}
            bg= 'red.200'
            fontWeight={'400'}>
           Automation
          </Badge>
          
          <Badge
            px={2}
            py={1}
            bg= 'blue.200'
            fontWeight={'400'}>
           Blog Writing
          </Badge>
          <Badge
            px={2}
            py={1}
            bg= 'yellow.200'
            fontWeight={'400'}>
           Shopify Development
          </Badge>
        </Stack>
            </Box>
            <Box marginTop={2} >
            <Text color='yellow.400' fontSize='30px' fontWeight={600}  mb={1}>
         {internAt.heading}:
        </Text>
        <HStack>
          <Image src='/prashikshan_logo.png' width={20} height={20}/>
        <Text color='white' fontSize='25px' fontWeight={600}  mb={1}>
         {internAt.company1} 
        </Text>
        </HStack>
        <Stack   direction={'row'} mt={2}>
          <Badge
            px={2}
            py={1}
            bg= 'green.200'
            fontWeight={'400'}>
            Video Analysis
          </Badge>
          <Badge
            px={2}
            py={1}
            bg= 'red.200'
            fontWeight={'400'}>
          Python
          </Badge>
          
          <Badge
            px={2}
            py={1}
            bg= 'blue.200'
            fontWeight={'400'}>
           OpenCV
          </Badge>
          
        </Stack>
        
        <HStack mt={5}>
          <Image src='/iitindore.png' width={20} height={20}/>
        <Text color='white' fontSize='25px' fontWeight={600}  mb={1}>
         {internAt.company2} 
        </Text>
        </HStack>
        <Stack   direction={'row'} mt={2}>
          <Badge
            px={2}
            py={1}
            bg= 'red.200'
           
            fontWeight={'400'}>
            Kalman Filtering
          </Badge>
          <Badge
            px={2}
            py={1}
            bg= 'green.200'
            fontWeight={'400'}>
          Matlab
          </Badge>
          
         
          
        </Stack>
        
        
            </Box>
        
        
      </Box>
   
     
      <Box
        maxW={'520px'}
       
        bg='gray.900'
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        
        >
        
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
  
        {/*  */}
        <Heading color='white' fontSize={'2xl'} fontFamily={'body'}>
         @aashirwad01
        </Heading>
        
        <Text
          textAlign={'center'}
          color='gray.400'
          px={3}>
          Web Developer, Analyst, Coder, Technical Content Writer.{' '}
          
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg= 'gray.100'
            fontWeight={'400'}>
            #webd
          </Badge>
          <Badge
            px={2}
            py={1}
            bg= 'gray.100'
            fontWeight={'400'}>
            #analysis
          </Badge>
          <Badge
            px={2}
            py={1}
            bg= 'gray.100'
            fontWeight={'400'}>
            #coding
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <NextLink href='/projects'>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            
            _focus={{
              bg: 'gray.200',
            }}>
            All Blogs
          </Button>
          </NextLink>
          <NextLink href='/blogs'>
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
        </Stack>
      </Box>
      </Box>

      
            
            </Box>
      </Box>

      


  )
}

export default KnowmeEditor;


