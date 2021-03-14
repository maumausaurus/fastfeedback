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

const App = () => (
  <ChakraProvider resetCSS>
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
      <Flex backgroundColor="#f5f9ff" justifyContent="center">
        <Flex justifyContent="center" mb="30px">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
            <Heading>Sites</Heading>
            <Box
              backgroundColor="#ffffff"
              borderRadius={4}
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Box ml={20} mr={20} mt={5} mb={5}>
                <Heading size="sm" m="10px">
                  Get feedback on your site instantly
                </Heading>
                <Text display="flex" flexDirection="column" textAlign="center">
                  Try it out today
                </Text>
                <Box display="flex" justifyContent="center" m={2}>
                  <Button
                    variant="solid"
                    size="md"
                    backgroundColor="purple.500"
                    colorScheme="purple"
                  >
                    Go
                  </Button>
                </Box>
              </Box>
            </Box>
          </Breadcrumb>
        </Flex>
      </Flex>
    </Box>
  </ChakraProvider>
)

export default App