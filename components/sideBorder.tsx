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

const IconMenu = [
    {
        name:'Know Me',
        icon:VscFiles,
        route:'/'
    },
    {
        name:'Search',
        icon:VscSearch,
        route:'/search'
    },
    {
        name:'Github Stats',
        icon:VscSourceControl,
        route:'/githubStats'
    },
    {
        name:'Running Projects',
        icon:VscDebugAlt,
        route:'/projects'
    },
    {
        name:'Blogs',
        icon:VscExtensions,
        route:'/blogs'
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

const SideBorder = () => {
    return (
        <Box width='100%' height='calc(100vh - 20px)' bg='sideborder.bg'>
            <Box display='flex' flexDirection='column' justifyContent='space-between'  paddingY='10px' height='100%'>
                <Box>
                <Center>
                    <List spacing={3}>
                        {IconMenu.map(menu => (
                            <ListItem key={menu.name} fontSize='25px' _active={{borderLeft:'2px solid white'}}>
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
                <Box>
                <Center>
                    <List spacing={3}>
                        {BottomMenu.map(menu => (
                            <ListItem key={menu.name} fontSize='25px' _active={{borderLeft:'2px solid white'}}>
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