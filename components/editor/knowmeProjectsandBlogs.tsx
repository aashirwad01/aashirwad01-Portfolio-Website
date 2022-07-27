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

} from '@chakra-ui/react'
import React from 'react';

const Projects =[
    {
        id:1,
        image:'/codeditor.png',
        heading:'CodeEditor',
        line:'React based CodeEditor with design using Figma and implemented using MUIv5 incorporating theme changeand other design principles.Used Monacio Editor by Microsoft to implement code editor features and incorportated 5 languages with intellisense support in Javascript.Using Axios to fetch results from Judge0 server API for code review and code compilation.',
        lineCurrent:'React,Material UI, Axios,Judge0, Monaco Editor',
        timeline:'',
        tag:''

    },
    {
        id:2,
        image:'/shopify_icon.png',
        heading:'Shopify Project',
        line:'Managed and Collaborated on Shopify E Commerce WebApp for client incorporating UI/UX practices and E-Commerce features.',
        lineCurrent:'Shopify,Liquid,HTML,CSS and UI/UX Design Principles',
        timeline:'',
        tag:'Shopify,Liquid,HTML,CSS and UI/UX Design Principles',

    },
    
    
]

const Blogs =[
   
     {
        id:1,
        image:'/webpack.png',
        heading:"What is WebPack?",
        line:'WebPack, Modules, Javascript ',
        lineCurrent:"Why WebPack?🕸️\nWhat problem does it solve?🧐\nIn its broadest definition: WebPack is a bundler, a module bundler. 😼\nWhat it basically does is bundles all assets and files. 💪\nTo understand why WebPack is necessary, it is important to know How was Ja...",
        timeline:"2022-07-27T07:44:26.565Z",
        tag:''

    },
    {
        id:2,
        image:'/theming.png',
        heading:"Theming in MUI v5",
        line:'MUI, React',
        lineCurrent:"Material-UI is now MUI! 🤩\nIf you are following Frontend for some time you might already know the migration of Material UI brand to MUI.\nAnd Yes! I am copying the direct heading from the announcement made by the team behind MUI on 16 Sept 2021 of a n...",
        timeline:"2022-07-27T07:44:26.565Z",
        tag:''

    },
    
]





const KnowMeProjectsandBlogs = () => {
    return (
        <>
       <AllProjectandBlogsKnowMe sectionName='Project' value={Projects} />
       <AllProjectandBlogsKnowMe sectionName='Blog'value={Blogs} />
       </>
    )
}


const AllProjectandBlogsKnowMe =  ({sectionName,value}) => {
    return (

<Box paddingX='6vw'>

    <Heading textAlign='center' mb='3vh'  fontSize={{base:'40px',lg:'60px'} }  fontFamily={'body'} color='red.400'>{sectionName}s</Heading>
        <Box  display='flex' flexWrap='wrap' flexDirection={{ base: 'row' , sm:'column' , md:'row' , lg:'row' }} justifyContent='center'>
{value.map((menu)=> (
     <Box
     marginX='2vh'
     key={menu.id}
     maxW={'300px'}
     w={'full'}
     bg='gray.900'
     boxShadow={'2xl'}
     rounded={'md'}
     p={6}
     overflow={'hidden'}>
     <Box
       h={'210px'}
       bg={'gray.100'}
       mt={-6}
       mx={-6}
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
         color={'green.500'}
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
         Boost your conversion rate
       </Heading>
       <Text color={'gray.500'}>
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
         erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
         et ea rebum.
       </Text>
     </Stack>
     <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
       <Avatar
         src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
         alt={'Author'}
       />
       <Stack direction={'column'} spacing={0} fontSize={'sm'}>
         <Text fontWeight={600}>Achim Rolle</Text>
         <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
       </Stack>
     </Stack>
   </Box>
   

)
)}
    </Box>  
    </Box>   

    )
}


export default KnowMeProjectsandBlogs;