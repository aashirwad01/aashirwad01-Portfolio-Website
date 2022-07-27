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
        heading:'CodeEditor',
        line:'React based CodeEditor with design using Figma and implemented using MUIv5 incorporating theme changeand other design principles.Used Monacio Editor by Microsoft to implement code editor features and incorportated 5 languages with intellisense support in Javascript.Using Axios to fetch results from Judge0 server API for code review and code compilation.',
        lineCurrent:'React,Material UI, Axios,Judge0, Monaco Editor',
        timeline:'',
        tag:''

    },
    {
        id:2,
        heading:'Shopify Project',
        line:'Managed and Collaborated on Shopify E Commerce WebApp for client incorporating UI/UX practices and E-Commerce features.',
        lineCurrent:'Shopify,Liquid,HTML,CSS and UI/UX Design Principles',
        timeline:'',
        tag:'Shopify,Liquid,HTML,CSS and UI/UX Design Principles',

    },
    
    
]

const Blogs =[
   
     {
        id:1,
        heading:"What is WebPack?",
        line:'WebPack, Modules, Javascript ',
        lineCurrent:"Why WebPack?🕸️\nWhat problem does it solve?🧐\nIn its broadest definition: WebPack is a bundler, a module bundler. 😼\nWhat it basically does is bundles all assets and files. 💪\nTo understand why WebPack is necessary, it is important to know How was Ja...",
        timeline:"2022-07-27T07:44:26.565Z",
        tag:''

    },
    {
        id:2,
        heading:"Theming in MUI v5",
        line:'MUI, React',
        lineCurrent:"Material-UI is now MUI! 🤩\nIf you are following Frontend for some time you might already know the migration of Material UI brand to MUI.\nAnd Yes! I am copying the direct heading from the announcement made by the team behind MUI on 16 Sept 2021 of a n...",
        timeline:"2022-07-27T07:44:26.565Z",
        tag:''

    },
    
]






const GettoKnowMe = () => {

    const [selected,setSelected]=useState('')

    const handleClick = (heading) => {
       
        setSelected(heading !== selected ? heading : "") 
      };

  
    const [borderId,setBorderId]=useState('')

       



    return (
        <>
        
        <KnowMe setSelected={setSelected} selected={selected} handleClick={handleClick}  headname='About' loopVal={About} borderId={borderId} setBorderId={setBorderId}/>
        <KnowMe setSelected={setSelected} selected={selected} handleClick={handleClick}  headname='Projects' loopVal={Projects} borderId={borderId} setBorderId={setBorderId} />
        <KnowMe setSelected={setSelected} selected={selected} handleClick={handleClick}  headname='Blogs' loopVal={Blogs} borderId={borderId} setBorderId={setBorderId} />
        </>

    )
}



const KnowMe =({setSelected,selected,handleClick,headname,loopVal,borderId,setBorderId}) => {

    

    const [borderCol,setBorderCol]=useState(false)

    return (
   <Box>  
   <LinkBox _hover={{bg:`${borderId===headname?'':'sidebar.texthov'}`}} onClick={()=>{
  
   setBorderId(headname)
    setSelected={setSelected}
   
}} border={borderId===headname && !(selected)?`1px solid #40a7ed`:''}  

   >
   <LinkOverlay>
   <HStack >
        {borderId===headname?<VscChevronDown/>:<VscChevronRight/>}<Text fontSize='18px'>{headname}</Text>
    </HStack>
   </LinkOverlay>
   </LinkBox>

   {(borderId===headname) && 
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
                           
                              border={selected == menu.heading ?`1px solid #40a7ed`:""}
                              bg={selected == menu.heading ?`sidebar.textsel`:""}  paddingX='15px'  >
                              
                                <LinkOverlay  
                                // style={{color:`${selected == menu.name ?"white":""}`}}    
                                
                                // color='sideborder.icon'
                                 >
                               <HStack>
                                {selected == menu.heading?<VscChevronDown/>:<VscChevronRight/>}
                                
                                <Text fontSize='15px'>{menu.heading}</Text>
                                

                                </HStack>

                                </LinkOverlay>
                             
                              </LinkBox>  

                              {selected == menu.heading ? <Box paddingX='25px'>
                                <HStack >
                                  {/* {menu.line && <VscChevronRight/>}   */}
                                <Text noOfLines={3} color='white'>{menu.line}</Text>
                                </HStack>
                                <HStack >
                                  {/* {menu.lineCurrent && <VscChevronRight/>}   */}
                                <Text noOfLines={3} color='white'>{menu.lineCurrent}</Text>
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