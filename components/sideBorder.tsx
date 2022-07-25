import { 
    Box,
    List,
    Divider,
    ListIcon,
    ListItem,
    Center,
    LinkBox,
    LinkOverlay 
} from "@chakra-ui/layout";



import {
    VscAccount,
    VscCode,
    VscExtensions,
    VscFiles,
    VscHeart,
    VscGithub,
    VscSettingsGear,
    VscSourceControl,
    VscSearch,
    VscDebugAlt

} from 'react-icons/vsc'

import NextLink from 'next/link'
import { useState } from "react";

export const IconMenu = [
    {
        name:'KNOW ME',
        icon:VscFiles,
        route:'/'
    },
    {
        name:'PROJECTS',
        icon:VscExtensions,
        route:'/projects'
    },
    {
        name:'BLOGS',
        icon:VscSearch,
        route:'/blogs'
    },
    {
        name:'GITHUB STATS',
        icon:VscSourceControl,
        route:'/githubStats'
    },
    
    {
        name:'RESUME',
        icon:VscDebugAlt,
        route:'/resume'
    },
    

]

const BottomMenu = [
    {
        name:'Connect With Me',
        icon:VscAccount,
        route:'/accounts'

    },
    {
        name:'Github Star',
        icon:VscGithub,
        route:'/'
    },
]




const SideBorder = ({selected,setSelected}) => {

    
    
   
    const handleClick = (name) => {
       
        setSelected(name !== selected ? name : "") 
      };



    return (
        <Box width='100%' height='calc(100vh - 22px)' bg='sideborder.bg'>
            <Box display='flex' flexDirection='column' justifyContent='space-between'  paddingY='10px' height='100%'>
                <Box>
                {/* <Center> */}
                    <List  spacing={3}>
                        {IconMenu.map(menu => (
                            <ListItem onClick={() => handleClick(menu.name)}  key={menu.name} fontSize='25px'    style={{borderLeft:`${selected == menu.name ?"2px solid white":""}`}}>
                              <LinkBox paddingX='8px' paddingY='5px' >
                              <NextLink href={menu.route} passHref>
                                <LinkOverlay _hover={{color:'white' }} style={{color:`${selected == menu.name ?"white":""}`}}    color='sideborder.icon' >
                               
                                <ListIcon  as={menu.icon} color ="currentcolor" />
                               
                                </LinkOverlay>
                              </NextLink>
                              </LinkBox>  
                            </ListItem>
                        ))}
                    </List>
                {/* </Center> */}
                </Box>
                <Box>
                <Center>
                    <List spacing={3}>
                        {BottomMenu.map(menu => (
                            <ListItem key={menu.name} fontSize='25px' >
                              <LinkBox>
                              <NextLink href={menu.route} passHref>
                                <LinkOverlay _hover={{color:'white' }} color='sideborder.icon' >
                               
                                <ListIcon as={menu.icon} color ="currentcolor" />
                               
                                </LinkOverlay>
                              </NextLink>
                              </LinkBox>  
                            </ListItem>
                        ))}
                    </List>
                </Center>
                </Box>

            </Box>
        </Box>
    )
};

export default SideBorder;