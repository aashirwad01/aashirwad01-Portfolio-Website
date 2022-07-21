import "reset-css";
import {ChakraProvider,extendTheme} from "@chakra-ui/react"
import PortfolioLayout from '../components/portfolioLayout';

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
  colors:{
    editor:{
      bg:"1e1e1e",
      fg:"#d4d4d4",
      sel:'#add6ff',
      text:'#c1c1c1',
      headg:'#2f90ff'



    },
    menu:{
      bg:'#303031',
      fg:'#cccccc',
      text:'c1c1c1',

    },
    sideborder:{
      bg:'#333333',
      icon:'#ababab'


    },
    sidebar:{
      bg:'#252526',
      
    },
    bottombar:{
      bg:'#0099FF',
      bgsel:'#2fa5f5',
      text:'black'
    }
  }
})

const MyApp = ({ Component, pageProps }) => {
  return (
  <ChakraProvider theme={theme}>
  <PortfolioLayout>
  <Component {...pageProps} />
  </PortfolioLayout>
  </ChakraProvider>
  )
}

export default MyApp
