import { 
    Box,
    Heading,
    Link,
    Image,
    Text,
    Stack,
    Avatar,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
    Button,
    Center

} from '@chakra-ui/react'
import React from 'react';

import NextLink from 'next/link'
import { Projects } from '../Constants/knowMeProjects';
import { Blogs } from '../Constants/knowMeBlogs';

const KnowMeProjectsandBlogs = ({selected,setSelected}) => {
    return (
        <>
       <AllProjectandBlogsKnowMe sectionName='Project' value={Projects} />
       <Center marginY={10}>
       <NextLink href='/projects'>
          <Button
           onClick={()=>setSelected('PROJECTS')}
          maxWidth='120px'
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
          </Center>
       <AllProjectandBlogsKnowMe sectionName='Blog'value={Blogs} />
       <Center marginY={10}>
       <NextLink href='/blogs'>
          <Button
          onClick={()=>setSelected('BLOGS')}
           maxWidth='120px'
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'green.400'}
            color='white'
            boxShadow={
              '0px 1px 25px -5px green, 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _focus={{
              bg: 'gray.200',
            }}>
            All Blogs
          </Button>
          </NextLink>
          </Center>
       </>
    )
}


const AllProjectandBlogsKnowMe =  ({sectionName,value}) => {
    return (

<Box  paddingX='6vw'>

    <Heading textAlign='center' mb='3vh'  fontSize={{base:'40px',lg:'60px'} }  fontFamily={'body'}
    
     color={sectionName == 'Project' ?'red.400':'green.400'}
    >{sectionName}s</Heading>
        <Box  display='flex' flexWrap='wrap' flexDirection={{ base: 'row' , sm:'column' , md:'row' , lg:'row' }} justifyContent='center'>
{value.map((menu)=> (
     <Box
     mb='5vh'
     marginX={{base:'0',md:'2vw'}}
     key={menu.id}
     maxW={'300px'}
     w={'full'}
     bg={sectionName == 'Project' ?'gray.900':'green.900'}
     
     boxShadow={'2xl'}
     rounded={'md'}
     p={6}
     overflow={'hidden'}>
     <Box
       h={'210px'}
       bg={'gray.100'}
       mt= {sectionName !== 'Project' ?-6:0}
       mx= {sectionName !== 'Project' ?-6:0}
       mb={6}
       pos={'relative'}>
       <Image
         src={
           menu.image
         }
         alt='a'
        height='100%'
        width='100%'
        
       />
     </Box>
     <Stack>
       <Text
         color={sectionName == 'Project' ?'red.400':'green.400'}
         textTransform={'uppercase'}
         fontWeight={800}
         fontSize={'sm'}
         letterSpacing={1.1}>
         {sectionName}
       </Text>
       <Heading
         color= 'white'
         fontSize={'2xl'}
         fontFamily={'body'}>
         {menu.heading}
       </Heading>
       <Text color={'gray.500'}>
         {menu.line}
       </Text>
     </Stack>
     <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
       <Avatar
         src='/myimage.png'
        
       />
       <Stack direction={'column'} spacing={0} fontSize={'sm'}>
         <Text color='gray.200' fontWeight={600}>Aashirwad Kumar</Text>
         <Text color={'gray.500'}>{menu.lineCurrent}</Text>
       </Stack>
       
     </Stack>
     <HStack marginTop={4} justifyContent='space-between'>
       <a target="_blank" rel="noopener noreferrer" href={menu.url}>
          <Button
           maxWidth='100px'
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={sectionName == 'Project' ?'gray.900':'green.400'}
            color='white'
            boxShadow={
              '0px 1px 1px 1px white, 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg:'gray.800'
            }}
            _focus={{
              bg: 'gray.800',
            }}>
             {sectionName == 'Project' ?'Live':'Read'}
          </Button>
          </a>
          {sectionName == 'Project' ?<a target="_blank" rel="noopener noreferrer"  href={menu.urlG}>
          <Button
           maxWidth='100px'
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={sectionName == 'Project' ?'gray.500':'green.400'}
            color='white'
            boxShadow={
              '0px 1px 2px 1px black, 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg:'black'
            }}
            _focus={{
              bg: 'black',
            }}>
            Github
          </Button>
          </a>:'null' 
          
          }
         
 
       </HStack>
   </Box>
   

)
)}
    </Box>  
    </Box>   

    )
}


export default KnowMeProjectsandBlogs;