import {
    Flex, 
    Box, 
    Input, 
    IconButton, 
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons';
  import { useState } from 'react';


 const SearchBar = (props) => {
    const [searchContent, setSearchContent] = useState('');
    const {onSearchContentUpdate} = props;


     return (
        <Flex alignItems="flex-end" justifyContent="flex-end" mb="10px">
        <Box display="flex">
          <Input 
            placeholder="search..." 
            mr="5px"
            value={searchContent}
            onChange={(event) => {
                setSearchContent(event.target.value);
                onSearchContentUpdate(event.target.value);
            }}
         />
          <IconButton
            aria-label="icon"
            icon={<SearchIcon />}
            size="md"
            colorScheme="purple"
          />
        </Box>
      </Flex>
     );
 };

 export default SearchBar;

