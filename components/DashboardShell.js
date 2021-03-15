import React from 'react'
import {
  ChakraProvider,
  Link,
  Flex,
  Avatar,
  Icon,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Button
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { useAuth } from '../lib/auth'

const DashboardShell = ({children}) => {
  const auth = useAuth();

  return  <ChakraProvider resetCSS>
    <Box>
      <Flex justifyContent="space-between">
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          display="flex"
          alignItems="center"
        >
          <SettingsIcon />
          <Link m="10px" display="flex" justifyContent="flex-start">
            Feedback
          </Link>
          <Link display="flex" m="10px">
            Sites
          </Link>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Link mr="10px">Account</Link>
          <Avatar size="sm" />
        </Flex>
      </Flex>
      <Flex
        backgroundColor="#f5f9ff"
        justifyContent="center"
        flexDirection="column"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
          <Heading>Sites</Heading>
        </Breadcrumb>
        <Flex
          backgroundColor="whiteAlpha.900"
          justifyContent="center"
          mb={10}
          ml={5}
          mr={5}
        >
        {children}
        </Flex>
      </Flex>
    </Box>
  </ChakraProvider>
}

export default DashboardShell