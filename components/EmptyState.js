import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
    Button
} from '@chakra-ui/react'
import DashboardShell from '../components/DashboardShell';
import AddSiteModal from './AddSiteModal';


const EmptyState = () => (
    <DashboardShell>
        <Flex flexDirection="column" justifyContent="center">
            <Heading size="sm" m="10px">
                You haven't added any sites yet.
        </Heading>
            <Text display="flex" flexDirection="column" textAlign="center">
                Welcome ! Let's get started
     </Text>
            <Box display="flex" justifyContent="center" mb="20px">
            <AddSiteModal />
            </Box>
        </Flex>

    </DashboardShell>
)

export default EmptyState