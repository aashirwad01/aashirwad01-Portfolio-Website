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
        route:'/'

},
{
    name:"made with Love by aashirwad01",
    icon:VscHeart,
    route:'/'

},

]

const BottomNav2 = [
    {
        name:'Running on Typescript Next JS',
        icon:VscSymbolNamespace,
        route:'/'
    },
    {
        name:'Live At Here',
        icon:VscBroadcast,
        route:'/'
    },
    {
        name:'Prettier',
        icon:VscCheckAll,
        route:'/'
    },

]

const BottomBar = () => {
    return (
        <Box height='20px' bg='bottombar.bg' width="100vw">
            <Box display='flex' flexDirection='row' justifyContent='space-between'  paddingX='10px'> 
            <Box>
                <Center>
                    <List  >
                        <HStack spacing={1}>
                        {BottomNav.map(menu => (
                            <ListItem    _hover={{bg:'bottombar.bgsel'}}  key={menu.name} fontSize='13px' >
                              <LinkBox>
                             
                              <NextLink href={menu.route} passHref>
                                <LinkOverlay noOfLines={1}   color='bottombar.text' >
                               
                                <ListIcon as={menu.icon} color ="currentcolor" />
                               {menu.name}
                                </LinkOverlay>
                              </NextLink>
                            
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
                              <NextLink href={menu.route} passHref>
                                <LinkOverlay noOfLines={1}  color='bottombar.text' >
                               
                                <ListIcon as={menu.icon} color ="currentcolor" />
                               {menu.name}
                                </LinkOverlay>
                              </NextLink>
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