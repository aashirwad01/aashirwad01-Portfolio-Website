import { Box, Center, Text } from "@chakra-ui/layout";
import { useEffect } from "react";
import { IconMenu } from "./sideBorder";
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import KnowMe from './sidebar/knowme'
import GettoKnowMe from "./sidebar/knowme";



const Sidebar = ({selected}) => {

    
    return (
        <Box position='absolute' left='50px' top='0' width='200px'
        >
            <Box width='100%' height='calc(100vh - 22px)' color='sidebar.text' bg='sidebar.bg'>
                <Box  paddingY='2px' paddingX='3px'  height='100%' color='sidebar.text'>
                    <Box paddingX='15px'   display='flex' justifyContent='space-between'
                    >
                        
                      <Text fontSize='13px'> {selected}</Text>
                      
                      <HiOutlineDotsHorizontal/>               
                     

                    </Box>
                    
                    <Box  paddingY='10px'>
                      <GettoKnowMe/>

                      </Box>
                    
                    </Box>
                    
            </Box>
        </Box>
    )
};

export default Sidebar;