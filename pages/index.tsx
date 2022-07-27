import { Box } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import KnowmeEditor from '../components/editor/knowmeEditor'
// import styles from '../styles/Home.module.css'
import knowmeEditor from '../components/editor/knowmeEditor'


export default function Home() {
  return (
   
    <Box overflowY='auto'
    height='calc(100vh - 22px)'
    style={{ backgroundImage:`linear-gradient(rgba(30,30,30,1), rgba(30,30,30,0.9)),url("./editorbg.png")`   }}
    >
      
   <KnowmeEditor/>
      </Box>

  )
}
