import React, { useEffect, useState } from 'react';

import {
    VscChevronRight,
    VscChevronDown,
} from 'react-icons/vsc'


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

} from '@chakra-ui/layout'



import Image from 'next/image'
import { Text } from '@chakra-ui/layout';

// import FloxusLogo from  '../../public/favicon_floxus.png' 

const About = [
    {
        id:1,
        heading:'Who Am I',
        line:'An Abnormly Curious Guy ',
        lineCurrent:'Studying MnC At BIT Mesra',
        timeline:'2018-Current',
        tag:['Web Developer','Analyst','Coder']

    },
    {
        id:2,
        heading:'Working At',
        line:'Floxus.Co',
        lineCurrent:'Student Developer',
        timeline:'Feb 2022-Current',
        tag:['Web Development','Shopify Development','Automation','Blog Writing'],
        // companyicon:'/favicon_floxus.png'
    },
    {
        id:3,
        heading:'Interned At',
        line:'SNTI, TATA Steel',
        lineCurrent:'IIT Indore',
        timeline:'',
        tag:'',
        // companyicon:'/favicon_floxus.png'
    },

]

const Projects =[
    {
        id:1,
        heading:'Who Am I',
        line:'An Abnormly Curious Guy ',
        lineCurrent:'Studying MnC At BIT Mesra',
        timeline:'2018-Current',
        tag:['Web Developer','Analyst','Coder']

    },
]

const Blogs =[
    {
        id:1,
        heading:'Who Am I',
        line:'An Abnormly Curious Guy ',
        lineCurrent:'Studying MnC At BIT Mesra',
        timeline:'2018-Current',
        tag:['Web Developer','Analyst','Coder']

    },
]






const GettoKnowMe = () => {




    return (
        <>
        
        <KnowMe headname='About' loopVal={About}/>
        <KnowMe headname='Projects' loopVal={Projects} />
        <KnowMe headname='Blogs' loopVal={Blogs} />
        </>

    )
}



const KnowMe =({headname,loopVal}) => {

    

    const [selected,setSelected]=useState('')

    const handleClick = (heading) => {
       
        setSelected(heading !== selected ? heading : "") 
      };

    const [iconState,setIcon]=useState(false)

       

    return (
   <Box>  
   <LinkBox _hover={{bg:`${iconState?'':'sidebar.texthov'}`}} onClick={()=>{
    setIcon(!(iconState))
    setSelected('')
   
}} border={iconState && !(selected)?`1px solid #2fa5f5`:''}  

   >
   <LinkOverlay>
   <HStack >
        {iconState?<VscChevronDown/>:<VscChevronRight/>}<Text>{headname}</Text>
    </HStack>
   </LinkOverlay>
   </LinkBox>

   {(iconState) && 
        <Box >
     <List>
        {
           loopVal.map((menu)=>(
                <ListItem 
                onClick={() => handleClick(menu.heading)}  
                key={menu.id}
                fontSize='14px'
               
                
                >
                              <LinkBox 
                           
                              border={selected == menu.heading ?`1px solid #2fa5f5`:""}
                              bg={selected == menu.heading ?`sidebar.textsel`:""}  paddingX='15px'  >
                              
                                <LinkOverlay  
                                // style={{color:`${selected == menu.name ?"white":""}`}}    
                                
                                // color='sideborder.icon'
                                 >
                               <HStack>
                                {selected == menu.heading?<VscChevronDown/>:<VscChevronRight/>}
                                
                                <Text>{menu.heading}</Text>
                                

                                </HStack>

                                </LinkOverlay>
                             
                              </LinkBox>  

                              {selected == menu.heading ? <Box paddingX='25px'>
                                <HStack >
                                  {menu.line && <VscChevronRight/>}  
                                <Text color='white'>{menu.line}</Text>
                                </HStack>
                                <HStack >
                                  {menu.lineCurrent && <VscChevronRight/>}  
                                <Text color='white'>{menu.lineCurrent}</Text>
                                </HStack>
                               
                              </Box>:''
                              }
                              
                            </ListItem>

            )

            )
        }
       
     </List>
        </Box>
    
   }
   </Box>  

    )
    




}




export default GettoKnowMe;