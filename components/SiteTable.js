import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react";
import React from 'react';
import { Fragment } from "react";

const SiteTable = ({sites}) => {
    return (
        <Table variant="simple" colorScheme="gray">
            <TableCaption>Your sites</TableCaption>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Link</Th>
                </Tr>
            </Thead>
            <Tbody>
        {sites.map((site) => (
          <Tr>
            <Td>{site.name}</Td>
            <Td>{site.link}</Td>
         </Tr>
        ))}
      </Tbody>
      </Table>
    );
};

export default SiteTable; 