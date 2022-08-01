import { Box } from '@chakra-ui/layout';
import React, { useEffect } from 'react'
import BlogsEditor from '../components/editor/blogsEditor'


const BlogsVal = [
  {
    id: "62e0ecda657a4fae5a0e67e4",
    coverImage: '/webpack.png',
    slug: "what-is-webpack-and-what-are-modules",
    link:'https://aashirwad01.hashnode.dev/what-is-webpack-and-what-are-modules',
    title: "What is WebPack and What are Modules?",
    brief: "Why WebPack?🕸️\nWhat problem does it solve?🧐\nIn its broadest definition: WebPack is a bundler, a module bundler. 😼\nWhat it basically does is bundles all assets and files. 💪\nTo understand why WebPack is necessary, it is important to know How was Ja...",
    dateAdded: "2022-07-27T07:44:26.565Z",
    dateUpdated: null
  },
  {
    id: "62e0eab8657a4fae5a0e678f",
    coverImage: "theming.png",
    slug: "theming-in-mui-v5",
    link:'https://aashirwad01.hashnode.dev/theming-in-mui-v5',
    title: "Theming in MUI v5",
    brief: "Material-UI is now MUI! 🤩\nIf you are following Frontend for some time you might already know the migration of Material UI brand to MUI.\nAnd Yes! I am copying the direct heading from the announcement made by the team behind MUI on 16 Sept 2021 of a n...",
    dateAdded: "2022-07-27T07:35:20.198Z",
    dateUpdated: "2022-07-27T07:35:59.240Z"
  },
  {
    id: "62e0e6437d685aae7f94e227",
    coverImage: "jsarray.png",
    slug: "javascript-array-methods-detailed-review-of-foreach-map-filter-and-reduce",
    link:'https://aashirwad01.hashnode.dev/javascript-array-methods-detailed-review-of-foreach-map-filter-and-reduce',
    title: "Javascript Array Methods         Detailed Review of forEach() ,map , filter() and reduce()",
    brief: "Let’s first understand 🤔 What is an Array?\nQuoting from MDN directly.\n\nThe Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name and has members for performing common...",
    dateAdded: "2022-07-27T07:16:19.753Z",
    dateUpdated: "2022-07-27T07:36:57.217Z"
  }
]

const Blogs= ({selectedBlog}) => {

  const [passVal,setPassVal] = React.useState([BlogsVal[0]])


useEffect(() => {

  setPassVal(BlogsVal.filter(e => e.title.toLowerCase().includes(selectedBlog.toLowerCase())))
 
  
 }, [selectedBlog])

  console.log(selectedBlog)
  return (
    <Box color='white' height='calc(100vh - 22px)' bg={'editor.bgiBlog'} overflowY='auto'>
   <BlogsEditor passVal={passVal}/>
          
        </Box>
  )
}
export default Blogs;