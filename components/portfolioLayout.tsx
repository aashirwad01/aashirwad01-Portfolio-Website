import React, { useState } from 'react'
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import Sidebar from './sideBar';
import BottomBar from './bottomBar';
import SideBorder from '../components/sideBorder'



const PortfolioLayout = ({children,selectedProject,setSelectedProject}) => {
   const [selected, setSelected] = useState('');
  
    return (
        <Box width='100vw' height='100vh'>
            <Box position='absolute' top='0' width='50px' left='0'>
                <Box position='absolute' top='0' width='50px' >
                 <SideBorder selected={selected} setSelected={setSelected} />
                 {selected && <Sidebar selectedProject={selectedProject} setSelectedProject={setSelectedProject} selected={selected} />}
                </Box>
                
                
            </Box>
            <Box marginLeft={selected?'250px':'50px'} marginBottom='22px'>
                 {children}

                </Box>
        <Box position="absolute" left="0" bottom="0">
            <BottomBar/>
        </Box>
        </Box>
    )
}

export default PortfolioLayout;