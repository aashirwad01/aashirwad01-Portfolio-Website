import React from 'react'
import {Box, Center, Divider, Heading, HStack, Text} from '@chakra-ui/layout'
import Image from 'next/image'
import { Button, ButtonGroup } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'

 




export default function ProjectEditor({res}) {
    console.log(res)
  return (
    <Box color='white' paddingX='75px' paddingY='3px'>
        <Box marginTop={{base:'15px',sm:'15px',md:'0',xl:'0'}} display='flex' flexDirection={{base:'column', sm:'row',md:'row'}}>
            <Center flexBasis={{base:'50%',sm:'60%',xl:'10%'}}>
                <Image height='130px' width='130px' src={'/diary.png'}/>
            </Center>
            <Box marginLeft='20px' display='flex' flexDirection='column'>
                <HStack>
            <Text  fontSize='30px' >Diary App</Text>
            <Text fontSize='12px' backgroundColor='grey' style={{ padding:'0'}}>v1.0.0</Text>
            </HStack>
                <Text>
                    ssssssss
                </Text>
                <Text>
                Developed a CRUD Diary Webapp using React hosted on local server to update and retrieve daily entry from Firebase, implementing React Hooks, Redux State management and asynchronous data handling alongside Formik for forms in React.
                </Text>
                <HStack >
                <Box  fontSize='14px' borderRadius='0' padding='1' backgroundColor='blue.600'>Github</Box>
                <Box  fontSize='14px' borderRadius='0' padding='1' backgroundColor='blue.600'>Live</Box>
                </HStack>
                <Text>
                    This project is going live
                </Text>
            </Box>

        </Box>
<Box>
    <Text>Readme</Text>
    <ReactMarkdown>
        {res}
    </ReactMarkdown>
    <Divider/>
</Box>
    </Box>
  )
}
