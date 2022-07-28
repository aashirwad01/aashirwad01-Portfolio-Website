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

const Projects =[
    {
        id:1,
        image:'/codeditor.png',
        url:'https://codeeditor-aashirwad01.vercel.app/',
        urlG:'https://github.com/aashirwad01/codeeditor',
        heading:'CodeEditor',
        line:'React based CodeEditor with design using Figma and implemented using MUIv5 incorporating theme changeand other design principles.Used Monacio Editor by Microsoft to implement code editor features and incorportated 5 languages with intellisense support in Javascript.Using Axios to fetch results from Judge0 server API for code review and code compilation.',
        lineCurrent:'React,Material UI, Axios,Judge0, Monaco Editor',
        timeline:'',
        tag:''

    },
    {
        id:2,
        image:'/shopify_icon.png',
        url:'https://www.getclassyhippie.com/',
        urlG:'https://www.getclassyhippie.com/',
        heading:'Classie Hippie Shopify Project for Client',
        line:'Managed and Collaborated on Shopify E Commerce WebApp for client incorporating UI/UX practices and E-Commerce features.Developed features using Shopify Liquid and explored Hydrogen Framework. Used Shopify Apps to add option to wholesale discounts and create new theme. ',
        lineCurrent:'Shopify,Liquid,HTML,CSS and UI/UX Design Principles',
        timeline:'',
        tag:'Shopify,Liquid,HTML,CSS and UI/UX Design Principles',

    },
    {
      id:3,
        heading:'CricNews Telegram Bot',
        url:'https://cric-newsupdate.netlify.app/',
        urlG:'https://github.com/aashirwad01/telegrambot_live_cricketscores',
        image:'/cric.png',
        timeline:"",
        tag:'',
        lineCurrent:'Javascript, NodeJS, Telegraf',
        line:'Created Telegram Bot Server using Telegraf and NodeJs to handle APIs using axios and created bot commands for Telegram using Telegraf to fetch daily Cricket updates.Implemented FlexBox CSS and fetch , async , await and DOM Manipulation to make a Dynamic Website to daily update Cricket News from around the world fetched from API hosted on Rapid API.'
  },

    
    
]

const Blogs =[
   
     {
        id:1,
        image:'/webpack.png',
        url:'https://aashirwad01.hashnode.dev/what-is-webpack-and-what-are-modules',
        heading:"What is WebPack?",
        lineCurrent:'WebPack, Modules, Javascript ',
        line:"Why WebPack?🕸️\nWhat problem does it solve?🧐\nIn its broadest definition: WebPack is a bundler, a module bundler. 😼\nWhat it basically does is bundles all assets and files. 💪\nTo understand why WebPack is necessary, it is important to know How was Ja...",
        timeline:"2022-07-27T07:44:26.565Z",
        tag:''

    },
    {
        id:2,
        image:'/theming.png',
        url:'https://aashirwad01.hashnode.dev/theming-in-mui-v5',
        heading:"Theming in MUI v5",
        lineCurrent:'MUI, React',
        line:"Material-UI is now MUI! 🤩\nIf you are following Frontend for some time you might already know the migration of Material UI brand to MUI.\nAnd Yes! I am copying the direct heading from the announcement made by the team behind MUI on 16 Sept 2021 of a n...",
        timeline:"2022-07-27T07:44:26.565Z",
        tag:''

    },
    
]





const KnowMeProjectsandBlogs = () => {
    return (
        <>
       <AllProjectandBlogsKnowMe sectionName='Project' value={Projects} />
       <Center marginY={10}>
       <NextLink href='/projects'>
          <Button
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
         src='/myimg.png'
         alt={'Author'}
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