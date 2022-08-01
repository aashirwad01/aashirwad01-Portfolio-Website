import {  Box, Center, HStack, LinkBox, LinkOverlay, List, ListIcon, ListItem, Text } from '@chakra-ui/layout'
import {   Input } from '@chakra-ui/react'
import React from 'react'
import {
  VscChevronRight,
  VscChevronDown,
} from 'react-icons/vsc'
import NextLink from 'next/link'

import floxus from '/favicon_floxus.png';
import Image from 'next/image'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


        const postsVal = [
          {
            "_id": "62e0ecda657a4fae5a0e67e4",
            coverImage: '/webpack.png',
            "slug": "what-is-webpack-and-what-are-modules",
            title: "What is WebPack and What are Modules?",
            brief: "Why WebPack?🕸️\nWhat problem does it solve?🧐\nIn its broadest definition: WebPack is a bundler, a module bundler. 😼\nWhat it basically does is bundles all assets and files. 💪\nTo understand why WebPack is necessary, it is important to know How was Ja...",
            dateAdded: "2022-07-27T07:44:26.565Z",
            "dateUpdated": null
          },
          {
            "_id": "62e0eab8657a4fae5a0e678f",
            coverImage: "theming.png",
            "slug": "theming-in-mui-v5",
            title: "Theming in MUI v5",
            brief: "Material-UI is now MUI! 🤩\nIf you are following Frontend for some time you might already know the migration of Material UI brand to MUI.\nAnd Yes! I am copying the direct heading from the announcement made by the team behind MUI on 16 Sept 2021 of a n...",
            dateAdded: "2022-07-27T07:35:20.198Z",
            "dateUpdated": "2022-07-27T07:35:59.240Z"
          },
          {
            "_id": "62e0e6437d685aae7f94e227",
            coverImage: "jsarray.png",
            "slug": "javascript-array-methods-detailed-review-of-foreach-map-filter-and-reduce",
            title: "Javascript Array Methods         Detailed Review of forEach() ,map , filter() and reduce()",
            brief: "Let’s first understand 🤔 What is an Array?\nQuoting from MDN directly.\n\nThe Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name and has members for performing common...",
            dateAdded: "2022-07-27T07:16:19.753Z",
            "dateUpdated": "2022-07-27T07:36:57.217Z"
          }
        ]
      

// const Blogs = [
//   {
//     name:'Diary App',
//     image: VscChevronRight,
//     imgval:"diary",
//     at:'',
//     tech:'React, Redux, Javascript, Material UI, Firebase',
//     about:'Developed a CRUD Diary Webapp using React hosted on local server to update and retrieve daily entry from Firebase, implementing React Hooks, Redux State management and asynchronous data handling alongside Formik for forms in React.'

//   },
//   {
//     name:'TodoList App',
//     image: VscChevronRight,
//     imgval:"todo",
//     at:'',
//     tech:'Javascript, React, Redux, Javascript, Material UI, LocalStorage',
//     about:'Designed and developed TodoList App with completed and important sections saving progress utilizing Redux and Middlewares in LocalStorage cache '
//   },
//   {
//     name:'CodeEditor',
//     image: VscChevronRight,
//     imgval:"codeditor",
//     at:'',
//     tech:'React,Material UI, Axios,Judge0, Monaco Editor',
//     about:'React based CodeEditor with design using Figma and implemented using MUIv5 incorporating theme changeand other design principles.Used Monacio Editor by Microsoft to implement code editor features and incorportated 5 languages with intellisense support in Javascript.Using Axios to fetch results from Judge0 server API for code review and code compilation.'
//   },
//   {
//     name:'CricNews Telegram Bot and Website',
//     image: VscChevronRight,
//     imgval:"cric",
//     at:'',
//     tech:'Javascript, NodeJS, Telegraf',
//     about:'Created Telegram Bot Server using Telegraf and NodeJs to handle APIs using axios and created bot commands for Telegram using Telegraf to fetch daily Cricket updates.Implemented FlexBox CSS and fetch , async , await and DOM Manipulation to make a Dynamic Website to daily update Cricket News from around the world'
//   },
  
// ]




export default  function BlogsSidebar({ selectedBlog , setSelectedBlog }){
  // const [selectedBlog,setSelectedBlog]=React.useState('')
  const [Searchvalue, setSearchValue] = React.useState('')
  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value) 
  
  }



  const handleClick = (heading) => {
       
    setSelectedBlog(heading !== selectedBlog ? heading : "") 
  };
  var blogslooped= postsVal.filter(e => e.title.toLowerCase().includes(Searchvalue.toLowerCase()))
 
  
  
  return(
    <>
        <Input
        width='90%'
        marginLeft="15px"
       height='100%'
       paddingY='3px'
        borderRadius='0'
  paddingLeft='3px'
  bg='searchSidebar.bg'
  _hover={{bg:'searchSidebar.bg',}}
  _focus={{border:'1.5px solid #40a7ed'}}
  color='searchSidebar.text'
  _placeholder={{ color: 'searchSidebar.pholder' }}
    value={Searchvalue}
    onChange={handleChange}
    placeholder='Search Blogs'
    variant='filled'
    size='sm'
  />


        <BlogsSidebarComponent handleClick={handleClick} selectedBlog={selectedBlog} headname='BLOGS' loopVal={blogslooped} />
      
        </>
   



  )

}

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: 'https://api.hashnode.com/',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "aashirwad01") {
          publication {
            posts(page: 0) {
              _id
              coverImage
              slug
              title
              brief
            }
          }
        }
      }
    `,
  })



  return {
    props: {
      posts: data.user.publication.posts,
    },
  }


}



function BlogsSidebarComponent({handleClick,selectedBlog,headname,loopVal}) {
  
 
  return (
    <Box>
      
    <Box marginBottom='5px' paddingTop='5px' fontSize='13px'>
      <LinkBox _hover={{bg:'sidebar.texthov'}} 
   

   >
   <LinkOverlay >
   <HStack color='white' >
        {<VscChevronDown/>}<Text >{headname}</Text>
    </HStack>
   </LinkOverlay>
   </LinkBox>
      
</Box>

<Box paddingX='5px'>
<List  spacing={3}>
                        {loopVal.map((menu) => (
                            <ListItem 
                              key={menu.title} 
                              onClick={() => handleClick(menu.title)}  
                            >
                              <LinkBox border={selectedBlog == menu.title ?`1px solid #40a7ed`:""}
                              bg={selectedBlog == menu.title ?`sidebar.textsel`:""}
                              
                              _hover={{bg:`sidebar.texthov`}}  >
                             
                                <LinkOverlay _hover={{color:'white' }}  >
                               
                                <Box display='flex'  >
                                  <Box flexBasis='20%' paddingTop='5px'>
                                    {/* <Image   src={require('../../public/' +
        menu.imgval +
        '.png').default}  alt='l'   /> */}

        <img src={menu.coverImage} alt='l'/>
        </Box>
                               

                               <Box paddingLeft='10px' display='flex' flexDirection='column' flexBasis='100%' >
                                <Text noOfLines={1}  color='projectsSidebar.text' fontSize='14px'>{menu.title}</Text>
                                <Text noOfLines={2} color='projectsSidebar.text2line' fontSize='11px' >{menu.brief}</Text>
                                <Text noOfLines={1}   color='projectsSidebar.text3line' fontSize='12px'>{menu.dateAdded}</Text>
                               
                               
                                </Box>
                                </Box>
                                </LinkOverlay>
                             
                              </LinkBox>  
                            </ListItem>
                        ))}
                    </List>
</Box>

</Box>
  )
}






