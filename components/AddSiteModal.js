import { useToast, Button, Container, FormControl, FormLabel, Input, FormErrorMessage, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
// import { useState } from 'react';
import firebase from '../lib/firebase';
import { createSite } from '../db';
import { useAuth } from '../lib/auth';


const firestore = firebase.firestore()

const AddSiteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, watch, errors } = useForm();
    const toast = useToast();
    const auth = useAuth();

    const onSubmit = (data) => {

        try {
            console.log("data :", data)
            console.log(auth.user.uid)

            // créer une entrée dans la base de données en passant les valeurs de siteName et siteLink
            createSite (data,auth.user.uid);
            toast({
                title: "Success !",
                description: "We've created your site.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
            onClose()

        } catch (error) {
            console.log(error)
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
                <ModalContent as="form"
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
                                    ref={register({ required: true })}
                                />
                                <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Site url</FormLabel>
                                <Input
                                    placeholder="https://greatstuff.com"
                                    name="siteLink"
                                    ref={register({ required: true })}
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