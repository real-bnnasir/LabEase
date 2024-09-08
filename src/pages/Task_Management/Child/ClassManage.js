import React, { useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SubHeader from '../../SubHeader';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from '@mui/material';
import { FaPaperPlane } from 'react-icons/fa';

const ClassManagement = () => {
    const [classes, setClasses] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [messageTitle, setMessageTitle] = useState('');
    const [messageContent, setMessageContent] = useState('');

    const toggleModal = () => setModalOpen(!modalOpen);

    const handleSend = () => {
        // Add your message sending logic here
        console.log('Message Title:', messageTitle);
        console.log('Message Content:', messageContent);
        // Close the modal after sending
        setModalOpen(false);
        // Clear the fields
        setMessageTitle('');
        setMessageContent('');
    };

    const handleClear = () => {
        setMessageTitle('');
        setMessageContent('');
    };

    const StyledTableHeadRow = styled(TableRow)({
        backgroundColor: 'transparent',
        borderBottom: '2px solid #e0e0e0',
        borderTop: '2px solid #e0e0e0',
    });

    return (
        <Container>
            <Box>
                <Typography variant='h5' fontWeight='700' className="my-4 text-center">Class Management</Typography>
            </Box>
            <SubHeader />
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>Manage Class</CardHeader>
                        <CardBody>
                            <Table>
                                <TableHead>
                                    <StyledTableHeadRow>
                                        <TableCell>S/N</TableCell>
                                        <TableCell>REG Number</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Sex</TableCell>
                                        <TableCell>Email</TableCell>
                                    </StyledTableHeadRow>
                                </TableHead>
                                <TableBody>
                                    <Typography variant='h5'>No student is registered</Typography>
                                    
                                </TableBody>
                            </Table>
                            <Box
                                display='flex'
                                justifyContent='end'
                            >
                                <Button onClick={toggleModal}>Share a Message</Button>
                            </Box>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Share a Message</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="messageTitle">Title</Label>
                            <Input
                                type="text"
                                id="messageTitle"
                                value={messageTitle}
                                onChange={(e) => setMessageTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="messageContent">Message</Label>
                            <Input
                                type="textarea"
                                id="messageContent"
                                value={messageContent}
                                onChange={(e) => setMessageContent(e.target.value)}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSend}>
                        <FaPaperPlane /> Send
                    </Button>{' '}
                    <Button color="secondary" onClick={handleClear}>
                        Clear
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
};

export default ClassManagement;
