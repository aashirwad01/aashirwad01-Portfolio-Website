import { 
    Box,
    List,
    Divider,
    ListIcon,
    ListItem,
    Center,
    LinkBox,
    LinkOverlay, 
    HStack

} from "@chakra-ui/layout";
import {
    
    VscCode,
    VscHeart,
    VscSourceControl,
    VscSymbolNamespace,
    VscCheckAll,
    VscBroadcast

   

} from 'react-icons/vsc'

import NextLink from 'next/link';

const BottomNav=[
    {
        name:"star on github",
        icon:VscSourceControl,
        route:'https://github.com/aashirwad01/aashirwad01-Portfolio-Website'

},
{
    name:"made with Love by aashirwad01",
    icon:VscHeart,
    route:'https://github.com/aashirwad01/'

},

]

const BottomNav2 = [
    {
        name:'Running on Typescript ',
        icon:VscSymbolNamespace,
        route:'https://www.typescriptlang.org/'
    },
    {
        name:'Live At Here',
        icon:VscBroadcast,
        route:'https://get.tech/'
    },
    {
        name:'Next JS',
        icon:VscCheckAll,
        route:'https://nextjs.org/'
    },

]

const BottomBar = () => {
    return (
        <Box height='22px' bg='bottombar.bg' width="100vw">
            <Box display='flex' flexDirection='row' justifyContent='space-between'  paddingX='10px'> 
            <Box>
                <Center>
                    <List  >
                        <HStack spacing={1}>
                        {BottomNav.map(menu => (
                            <ListItem    _hover={{bg:'bottombar.bgsel'}}  key={menu.name} fontSize='13px' >
                              <LinkBox>
                             
                              <a target="_blank" rel="noopener noreferrer" href={menu.route} >
                                <LinkOverlay noOfLines={1}   color='bottombar.text' >
                               
                                <ListIcon as={menu.icon} color ="currentcolor" />
                               {menu.name}
                                </LinkOverlay>
                              </a>
                            
                              </LinkBox>  
                            </ListItem>
                        ))}
                        </HStack>
                    </List>
                </Center>
                </Box>

                <Box>
                <Center>
                    <List  >
                        <HStack spacing={1}>
                        {BottomNav2.map(menu => (
                            <ListItem _hover={{bg:'bottombar.bgsel'}}  key={menu.name} fontSize='13px' >
                              <LinkBox>
                              <a target="_blank" rel="noopener noreferrer" href={menu.route} >
                                <LinkOverlay noOfLines={1}  color='bottombar.text' >
                               
                                <ListIcon as={menu.icon} color ="currentcolor" />
                               {menu.name}
                                </LinkOverlay>
                              </a>
                              </LinkBox>  
                            </ListItem>
                        ))}
                        </HStack>
                    </List>
                </Center>
                </Box>


            </Box>
        
    </Box>
    )

}

export default BottomBar;