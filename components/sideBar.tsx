import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { IconMenu } from "./sideBorder";



const Sidebar = ({selected}) => {

    
    return (
        <Box position='absolute' left='50px' top='0' width='200px'
        >
            <Box width='100%' height='calc(100vh - 20px)' bg='sidebar.bg'>
                <Box paddingY='2px' paddingX='20px' height='100%' color='sidebar.text'>
                    <Box display='flex' justifyContent='space-between'
                    >
                      {selected}

                    </Box>
                    
                    
                    
                    </Box>
            </Box>
        </Box>
    )
};

export default Sidebar;