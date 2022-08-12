import React from 'react'
import {Box, Center, Divider, Heading, HStack, Text} from '@chakra-ui/layout'
import Image from 'next/image'
import { Button, ButtonGroup } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm'

import useSWR from 'swr'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';


// import MarkdownPreview from '@uiw/react-markdown-preview';

// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";
// import dynamic from "next/dynamic";

// import Markdown from "marked-react";

// const MDEditor = dynamic(
//     () => import("@uiw/react-md-editor"),
//     { ssr: false }
//   );
// import { MDXRemote } from 'next-mdx-remote';

// import MarkdownGithub from 'react-markdown-github'



export default function ProjectEditor({res,passVal}) {

  

    // async function render(res) {
    //     return (await fetch('https://api.github.com/markdown', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({'mode': 'markdown', 'text': res})
    //     })).text()
    // }

  
    // const { data, error } = useSWR(res, render);

   
  


    
   
    
 
  return (
    <Box color='white' paddingX={{base:'10px',md:'75px'}} paddingY='3px'>
        <Box marginTop={{base:'15px',sm:'15px',md:'0',xl:'0'}} display='flex' flexDirection={{base:'column', sm:'row',md:'row'}}>
            <Center flexBasis={{base:'50%',sm:'60%',xl:'10%'}}>
            {/* <Image height='130px' width='130px'   src={require('../../public/' +
        passVal.imgval +
        '.png').default}  alt='l'   /> */}
             {  <Image height='130px' width='130px' src={passVal[0]?.imgval}/> }
            </Center>
            <Box marginLeft='20px' display='flex' flexDirection='column'>
                <HStack>
            <Text  fontSize='30px' >{passVal[0]?.name}</Text>
            <Text fontSize='12px' backgroundColor='grey' style={{ padding:'0'}}>v1.0.0</Text>
            </HStack>
                <Text>
                    {passVal[0]?.at}
                </Text>
                <Text>
               {passVal[0]?.about}
                </Text>
                <HStack >
                {passVal[0].githubLink &&<a target="_blank" rel="noopener noreferrer"  href={passVal[0]?.githubLink}>   <Box  fontSize='14px' borderRadius='0' padding='1' backgroundColor='blue.600'>Github</Box></a>}
                {passVal[0].liveLink && <a target="_blank" rel="noopener noreferrer"  href={passVal[0]?.liveLink}>   <Box  fontSize='14px' borderRadius='0' padding='1' backgroundColor='blue.600'>Live</Box></a>}
               
                </HStack>
                <Text>
                    {passVal[0]?.tech}
                </Text>
            </Box>

        </Box>
<Box>
    <Text >Readme</Text>
    <Divider marginBottom={5}/>
   

   
   {res?<div>  <ReactMarkdown components={ChakraUIRenderer()}    remarkPlugins={[remarkGfm] } skipHtml >{res}</ReactMarkdown></div>:<><h1>No Data</h1></>}
  
   
   
    <Divider/>
</Box>
    </Box>
  )
}
