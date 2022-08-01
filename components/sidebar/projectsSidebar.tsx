import {  Box, Center, HStack, LinkBox, LinkOverlay, List, ListIcon, ListItem, Text } from '@chakra-ui/layout'
import {   Input } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {
  VscChevronRight,
  VscChevronDown,
} from 'react-icons/vsc'
import NextLink from 'next/link'

import floxus from '/favicon_floxus.png';
import Image from 'next/image'



const Personal = [
  {
    name:'Diary App',
    image: VscChevronRight,
    imgval:"/diary.png",
    at:'',
    tech:'React, Redux, Javascript, Material UI, Firebase',
    about:'Developed a CRUD Diary Webapp using React hosted on local server to update and retrieve daily entry from Firebase, implementing React Hooks, Redux State management and asynchronous data handling alongside Formik for forms in React.'

  },
  {
    name:'TodoList App',
    image: VscChevronRight,
    imgval:"/todo.png",
    at:'',
    tech:'Javascript, React, Redux, Javascript, Material UI, LocalStorage',
    about:'Designed and developed TodoList App with completed and important sections saving progress utilizing Redux and Middlewares in LocalStorage cache '
  },
  {
    name:'CodeEditor',
    image: VscChevronRight,
    imgval:"/codeditor.png",
    at:'',
    tech:'React,Material UI, Axios,Judge0, Monaco Editor',
    about:'React based CodeEditor with design using Figma and implemented using MUIv5 incorporating theme changeand other design principles.Used Monacio Editor by Microsoft to implement code editor features and incorportated 5 languages with intellisense support in Javascript.Using Axios to fetch results from Judge0 server API for code review and code compilation.'
  },
  {
    name:'CricNews Telegram Bot and Website',
    image: VscChevronRight,
    imgval:"/cric.png",
    at:'',
    tech:'Javascript, NodeJS, Telegraf',
    about:'Created Telegram Bot Server using Telegraf and NodeJs to handle APIs using axios and created bot commands for Telegram using Telegraf to fetch daily Cricket updates.Implemented FlexBox CSS and fetch , async , await and DOM Manipulation to make a Dynamic Website to daily update Cricket News from around the world'
  },
  
]


const Company = [
  {
    name:'ClassyHippie Shopify Project',
    image: VscChevronRight,
    imgval:"/shopify_icon.png",
    at:'Floxus',
    tech:'Shopify,Liquid,HTML,CSS and UI/UX Design Principles',
    about:'Managed and Collaborated on Shopify E Commerce WebApp for client incorporating UI/UX practices and E-Commerce features.'

  },
  {
    name:'Floxus Main Website',
    image: VscChevronRight,
    imgval:"/favicon_floxus.png",
    at:'Floxus',
    tech:'React, GitHub, Redux ,  Material UI,  Firebase,  Figma,  Javascript',
    about:'Collaborated with team to develop website pages with dynamic UI components for Floxus Main Website using React and Material UI employing best UI/UX practices.'
  },
  {
    name:'Social Distance Monitoring App',
    image: VscChevronRight,
    imgval:"/OpenCV.png",
    at:'SNTI, Tata Steel',
    tech:'YOLO, Imagenet, Python, OpenCV',
    about:'Developed a service to identify distance between two objects in a Real Time Video.'
  }
]

const ProjectsSidebar = ({selectedProject,setSelectedProject}) => {
  // const [selectedProject,setSelectedProject]=React.useState('')
  const [Searchvalue, setSearchValue] = React.useState('')
  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value) 
  
  }

  

  const handleClick = (heading) => {
       
    setSelectedProject(heading !== selectedProject ? heading : "") 
  };
  var personallooped= Personal.filter(e => e.name.toLowerCase().includes(Searchvalue.toLowerCase()))
  var companylooped=Company.filter(e => e.name.toLowerCase().includes(Searchvalue.toLowerCase()))

  // console.log(selectedProject)

  return(
    <>
        <Input
        width='90%'
        marginLeft="15px"
       height='100%'
       paddingY='3px'
        borderRadius='0'
  paddingLeft='3px'
  bg='searchSidebar.bg'
  _hover={{bg:'searchSidebar.bg',}}
  _focus={{border:'1.5px solid #40a7ed'}}
  color='searchSidebar.text'
  _placeholder={{ color: 'searchSidebar.pholder' }}
    value={Searchvalue}
    onChange={handleChange}
    placeholder='Search Projects'
    variant='filled'
    size='sm'
  />


        <ProjectsSidebarComponent handleClick={handleClick} selectedProject={selectedProject} headname='PERSONAL' loopVal={personallooped}/>
        <ProjectsSidebarComponent handleClick={handleClick} selectedProject={selectedProject} headname='COMPANY' loopVal={companylooped}/>
        </>
   



  )

}


function ProjectsSidebarComponent({handleClick,selectedProject,headname,loopVal}) {
  
  return (
    <Box>
      
    <Box marginBottom='5px' paddingTop='5px' fontSize='13px'>
      <LinkBox _hover={{bg:'sidebar.texthov'}} 
   

   >
   <LinkOverlay >
   <HStack color='white' >
        {<VscChevronDown/>}<Text >{headname}</Text>
    </HStack>
   </LinkOverlay>
   </LinkBox>
      
</Box>

<Box paddingX='5px'>
<List  spacing={3}>
                        {loopVal.map((menu) => (
                            <ListItem 
                              key={menu.name} 
                              onClick={() => handleClick(menu.name)}  
                            >
                              <LinkBox border={selectedProject == menu.name ?`1px solid #40a7ed`:""}
                              bg={selectedProject == menu.name ?`sidebar.textsel`:""}
                              
                              _hover={{bg:`sidebar.texthov`}}  >
                             
                                <LinkOverlay _hover={{color:'white' }}  >
                               
                                <Box display='flex'  >
                                  <Box flexBasis='18%' paddingTop='5px'
                                  
                                  
                                  >
                                    {/* <Image   src={require('../../public/' +
        menu.imgval +
        '.png').default}  alt='l'   /> */}
         <Image height='130px' width='130px' src={menu.imgval}/>
        </Box>
                               

                               <Box paddingLeft='10px' display='flex' flexDirection='column' flexBasis='100%' >
                                <Text noOfLines={1}  color='projectsSidebar.text' fontSize='14px'>{menu.name}</Text>
                                <Text noOfLines={1} color='projectsSidebar.text2line' fontSize='11px' >{menu.tech}</Text>
                                <Text   color='projectsSidebar.text3line' fontSize='12px'>{menu.at}</Text>
                               
                               
                                </Box>
                                </Box>
                                </LinkOverlay>
                             
                              </LinkBox>  
                            </ListItem>
                        ))}
                    </List>
</Box>

</Box>
  )
}

export default ProjectsSidebar;
