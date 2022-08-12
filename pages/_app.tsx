import "reset-css";
import {ChakraProvider,extendTheme} from "@chakra-ui/react"
import PortfolioLayout from '../components/portfolioLayout';
import "@fontsource/inconsolata";
import React from "react";
import Head from "next/head";
import { LoadingScreen } from "../components/loadingScreen";


// "activityBarBadge.background": "#007acc",
// 		"editor.background": "#1e1e1e",
// 		"editor.foreground": "#d4d4d4",
// 		"editor.inactiveSelectionBackground": "#3a3d41",
// 		"editor.selectionHighlightBackground": "#add6ff26",
// 		"editorIndentGuide.activeBackground": "#707070",
// 		"editorIndentGuide.background": "#404040",
// 		"input.placeholderForeground": "#a6a6a6",
// 		"list.activeSelectionIconForeground": "#ffffff",
// 		"list.dropBackground": "#383b3d",
// 		"menu.background": "#303031",
// 		"menu.foreground": "#cccccc",
// 		"ports.iconRunningProcessForeground": "#369432",
// 		"sideBarSectionHeader.background": "#00000000",
// 		"sideBarSectionHeader.border": "#cccccc33",
// 		"sideBarTitle.foreground": "#bbbbbb",
// 		"statusBarItem.remoteBackground": "#16825d",
// 		"statusBarItem.remoteForeground": "#ffffff",
// 		"tab.lastPinnedBorder": "#cccccc33",




const theme = extendTheme({
  
  fonts:{
    heading:`Inconsolata[400]`,
    body:`Inconsolata`,

  },
  colors:{
    editor:{
      bg:"#1e1e1e",
      fg:"#d4d4d4",
      sel:'#add6ff',
      text:'#c1c1c1',
      headg:'#2f90ff',
      bgiProject:`linear-gradient(rgba(30,30,30,1), rgba(30,30,30,1)),url("./editorbg.png")`,
      bgiBlog:`linear-gradient(rgba(30,30,30,1), rgba(30,30,30,0.9)),url("./editorblog.png")`,


    },
    menu:{
      bg:'#303031',
      fg:'#cccccc',
      text:'c1c1c1',

    },
    sideborder:{
      bg:'#333333',
      icon:'#ababab',
      


    },
    sidebar:{
      bg:'#252526',
      text:'#c1c1c1',
      texthov:'#474747',
      textsel:'#01426e',

      // textselborder:'#2fa5f5',
      
    },
    bottombar:{
      bg:'#027bcc',
      bgsel:'#2fa5f5',
      text:'white'
    },
    searchSidebar:{
      bg:'#403f3f',
      text:'white',
      pholder:'#c1c1c1',
      sel:'#01426e'

    },
    projectsSidebar:{
      text:'white',
      text3line:'white',
      text2line:'#c1c1c1',
    }
  }
})

const MyApp = ({ Component, pageProps }) => {

  const [loading,setLoading] = React.useState(false)
  const [selected, setSelected] = React.useState('');
  const [selectedProject,setSelectedProject]=React.useState('Diary App')
  const [selectedBlog,setSelectedBlog]=React.useState('What is WebPack and What are Modules?')
  // React.useEffect(() => {
  //   setLoading(true);
  // }, []);
  return (
    <>
    {!loading?<ChakraProvider theme={theme}>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta title="name" content='aashirwad01' />
        <meta name="description" content="Aashirwad Kumar Portfolio Website. Made using Next JS and Typescript." />
      </Head>
  <PortfolioLayout selected={selected} setSelected={setSelected} selectedProject={selectedProject} setSelectedProject={setSelectedProject} selectedBlog={selectedBlog} setSelectedBlog={setSelectedBlog}  >
  <Component {...pageProps} selected={selected} setSelected={setSelected} selectedProject={selectedProject} setSelectedProject={setSelectedProject} selectedBlog={selectedBlog}   />
  </PortfolioLayout>
  </ChakraProvider>:<LoadingScreen/>}
  
  </>
  )
}

export default MyApp
