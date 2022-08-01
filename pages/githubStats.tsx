import GitHubCalendar from 'react-github-calendar';
import { Box, Button, Flex, Heading, Image, VStack } from '@chakra-ui/react'
const GithubStats = () => {
  return (
  <VStack spacing={5} display='flex' flexDirection='column' alignItems='center' justifyContent='center' color='white' height='calc(100vh - 22px)' bg='editor.bgiBlog'>
    <Heading>Github Contributions Year Wise</Heading>
   <GitHubCalendar username="aashirwad01" />
   <GitHubCalendar username="aashirwad01" year={2021} />
   <GitHubCalendar username="aashirwad01" year={2020} />
   <GitHubCalendar username="aashirwad01" year={2019} />


  </VStack>
  )
}

export default GithubStats;