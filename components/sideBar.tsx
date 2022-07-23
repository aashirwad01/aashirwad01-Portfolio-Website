import { Box, Center, Text } from "@chakra-ui/layout";
import { useEffect } from "react";
import { IconMenu } from "./sideBorder";
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import KnowMe from './sidebar/knowme'
import GettoKnowMe from "./sidebar/knowme";
import ResumeSidebar from './sidebar/resumeSidebar'
import ProjectsSidebar from './sidebar/resumeSidebar'
import BlogsSideBar from './sidebar/blogsSidebar'
import GithubStatsSidebar from './sidebar/githubStatsSidebar'



const Sidebar = ({selected}) => {

    const toViwewinSidebar = (selected) => {
        if(selected=='KNOW ME')
        return (
            <GettoKnowMe/>
        )
        else if(selected =='RESUME'){
            return (
                <ResumeSidebar/>
            )
        }
        
        else if (selected =='PROJECTS'){
            return (
                <ProjectsSidebar/>
            )
        }
        else if (selected =='GITHUB STATS'){
            return (
                <GithubStatsSidebar/>
            )
        }
        else if (selected =='BLOGS'){
            return (
                <BlogsSideBar/>
            )
        }
    }
    
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
                        
                     {toViwewinSidebar(selected)}

                      </Box>
                    
                    </Box>
                    
            </Box>
        </Box>
    )
};

export default Sidebar;