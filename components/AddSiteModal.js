import { Button, Container, FormControl, FormLabel, Input, FormErrorMessage, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const AddSiteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = (data) => {
        //create site 
        try {
            console.log("data :",data)
            // créer une entrée dans la base de données en passant les valeurs de siteName et siteLink
            // createSite(siteName,siteLink);
            
        } catch (e) {
        // jsp quoi mettre ?
        }
    }

    return (
        <>
            <Button
                onClick={onOpen}
                colorScheme="purple"
            >
                Add your first site
        </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent as ="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <ModalHeader>Add site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Container display="flex" flexDirection="column" alignItems="center">
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input 
                                    placeholder="Name of your site" 
                                    name="siteName"
                                    ref={register ({ required : true })}
                                    />
                                <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Site url</FormLabel>
                                <Input 
                                    placeholder="https://greatstuff.com" 
                                    name="siteLink"
                                    ref={register ({ required : true })}
                                    />
                                <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button 
                            type="submit"
                            variant="solid" 
                            size="md" 
                            colorScheme="purple"
                            >
                            Create
                            </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddSiteModal;