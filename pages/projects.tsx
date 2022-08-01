import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/layout'
import ProjectEditor from '../components/editor/projectEditor'
import useSWR from 'swr';

import axios from "axios";


const ProjectsAll = [
  {
    name:'Diary App',
    readmeLink:'https://raw.githubusercontent.com/aashirwad01/diary_app/master/README.md',
    liveLink:'',
    githubLink: 'https://github.com/aashirwad01/diary_app',
    imgval:"/diary.png",
    at:'',
    tech:'React, Redux, Javascript, Material UI, Firebase',
    about:'Developed a CRUD Diary Webapp using React hosted on local server to update and retrieve daily entry from Firebase, implementing React Hooks, Redux State management and asynchronous data handling alongside Formik for forms in React.'

  },
  {
    name:'TodoList App',
    readmeLink:'https://raw.githubusercontent.com/aashirwad01/diary_app/master/README.md',
    liveLink:'https://todolist-react-redux-aashirwad01.vercel.app/',
    githubLink:'https://github.com/aashirwad01/react-redux-mui-practice/tree/main/react_redux_mui-todos',
    imgval:"/todo.png",
    at:'',
    tech:'Javascript, React, Redux, Javascript, Material UI, LocalStorage',
    about:'Designed and developed TodoList App with completed and important sections saving progress utilizing Redux and Middlewares in LocalStorage cache '
  },
  {
    name:'CodeEditor',
    readmeLink:'https://raw.githubusercontent.com/aashirwad01/codeeditor/master/README.md',
    liveLink:'https://codeeditor-aashirwad01.vercel.app/',
    githubLink:'https://github.com/aashirwad01/codeeditor',
    imgval:"/codeditor.png",
    at:'',
    tech:'React,Material UI, Axios,Judge0, Monaco Editor',
    about:'React based CodeEditor with design using Figma and implemented using MUIv5 incorporating theme changeand other design principles.Used Monacio Editor by Microsoft to implement code editor features and incorportated 5 languages with intellisense support in Javascript.Using Axios to fetch results from Judge0 server API for code review and code compilation.'
  },
  {
    name:'CricNews Telegram Bot and Website',
    readmeLink:'https://raw.githubusercontent.com/aashirwad01/telegrambot_live_cricketscores/main/README.md',
    liveLink:'https://cric-newsupdate.netlify.app/',
    githubLink:'https://github.com/aashirwad01/telegrambot_live_cricketscores',
    imgval:"/cric.png",
    at:'',
    tech:'Javascript, NodeJS, Telegraf',
    about:'Created Telegram Bot Server using Telegraf and NodeJs to handle APIs using axios and created bot commands for Telegram using Telegraf to fetch daily Cricket updates.Implemented FlexBox CSS and fetch , async , await and DOM Manipulation to make a Dynamic Website to daily update Cricket News from around the world'
  },
  {
    name:'ClassyHippie Shopify Project',
    readmeLink:'',
   
    githubLink:'',
    liveLink:'https://www.getclassyhippie.com/',
    imgval:"/shopify_icon.png",
    at:'Floxus',
    tech:'Shopify,Liquid,HTML,CSS and UI/UX Design Principles',
    about:'Managed and Collaborated on Shopify E Commerce WebApp for client incorporating UI/UX practices and E-Commerce features.'

  },
  {
    name:'Floxus Main Website',
    readmeLink:'',
   
    githubLink:'',
    liveLink:'https://floxus.co/',
    imgval:"/favicon_floxus.png",
    at:'Floxus',
    tech:'React, GitHub, Redux ,  Material UI,  Firebase,  Figma,  Javascript',
    about:'Collaborated with team to develop website pages with dynamic UI components for Floxus Main Website using React and Material UI employing best UI/UX practices.'
  },
  {
    name:'Social Distance Monitoring App',
    readmeLink:'',
   
    githubLink:'',
    liveLink:'',
    imgval:"/OpenCV.png",
    at:'SNTI, Tata Steel',
    tech:'YOLO, Imagenet, Python, OpenCV',
    about:'Developed a service to identify distance between two objects in a Real Time Video.'
  }
  
]

const localCache = {};


const Projects = ({res , selectedProject,setSelectedProject}) => {
  
const [passVal,setPassVal] = React.useState([ProjectsAll[0]])
const [readmeLinkSel,setReadmeLinksel] = React. useState('')

  useEffect(() => {

   setPassVal(ProjectsAll.filter(e => e.name.toLowerCase().includes(selectedProject.toLowerCase())))
   setReadmeLinksel(ProjectsAll.filter(e => e.name.toLowerCase().includes(selectedProject.toLowerCase()))[0].readmeLink)
   
  }, [selectedProject])

 
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
   const { data, error } = useSWR(readmeLinkSel, fetcher);
   var dts = data?.replaceAll('/blob' , '').replaceAll('github.com','raw.githubusercontent.com')
  localCache[selectedProject]= dts || `Loading`

   

 
  
  
  

  return (
    <Box height='calc(100vh - 22px)' bg={'editor.bgiProject'} overflowY='auto'>
<ProjectEditor passVal={passVal} res={localCache[selectedProject]}/>
      
    </Box>
  )
}



export default  Projects;