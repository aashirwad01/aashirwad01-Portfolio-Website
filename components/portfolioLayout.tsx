import React from 'react'
import { Box } from '@chakra-ui/layout';
import SideBorder from './sideBorder';
import Sidebar from './sideBar';
import BottomBar from './bottomBar';

const PortfolioLayout = ({children}) => {
    return (
        <Box width='100vw' height='100vh'>
            <Box position='absolute' top='0' width='50px' left='0'>
                <Box position='absolute' top='0' width='50px' >
                 <SideBorder/>
                </Box>
                
                
            </Box>
            <Box marginLeft='50px' marginBottom='20px'>
                    {children}

                </Box>
        <Box position="absolute" left="0" bottom="0">
            <BottomBar/>
        </Box>
        </Box>
    )
}

export default PortfolioLayout;