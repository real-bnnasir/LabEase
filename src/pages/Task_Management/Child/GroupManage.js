import React, { useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SubHeader from '../../SubHeader';
import { Avatar, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography, styled } from '@mui/material';
import me1 from '../../../Assets/Photos/me1.jpeg';
import me2 from '../../../Assets/Photos/me2.jpg';
import malik from '../../../Assets/Photos/malik.jpg';
import zaks from '../../../Assets/Photos/zaks.jpg';
import yaya from '../../../Assets/Photos/yaya.JPG';
import { useNavigate } from 'react-router-dom';

const GroupManagement = () => {
    // const [groups, setGroups] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');

    const addGroup = () => {
        setGroups([...groups, { name: groupName, students: [] }]);
        setGroupName('');
    };

    const addStudentToGroup = (groupIndex) => {
        const updatedGroups = [...groups];
        updatedGroups[groupIndex].students.push(selectedStudent);
        setGroups(updatedGroups);
        setSelectedStudent('');
    };

    const StripedTableRow = styled(TableRow)(({ stripe }) => ({
        backgroundColor: stripe ? '#f9f9f9' : '#ffffff',
    }));

    const HoverAvatar = styled(Avatar)({
        width: 40,
        height: 40,
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    });

     const initialGroups = [
        {
            id: 1,
            segment: 'A',
            members: [
                { name: 'Abdurrahman Nasir', photo: 'photo1.jpg', registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: 'photo2.jpg', registrationNumber: 'REG124', status: 'Carry Over' },
                // Add more members as needed
            ],
            taxStatus: 'Submitted'
        },
        {
            id: 1, segment: 'B', members:
                [
                    { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
                ], taxStatus: 'Failed'
        },
        {
            id: 2, segment: 'A', members:
                [
                    { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
                ], taxStatus: 'Submitted'
        },
        {
            id: 2, segment: 'B', members:
                [
                    { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
                ], taxStatus: 'Failed'
        },
        {
            id: 3, segment: 'A', members: [
                { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
            ], taxStatus: 'Submitted'
        },
        {
            id: 3, segment: 'B', members: [
                { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
            ], taxStatus: 'Failed'
        },
        {
            id: 4, segment: 'A', members: [
                { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
            ], taxStatus: 'Submitted'
        },
        {
            id: 4, segment: 'B', members: [
                { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
            ], taxStatus: 'Failed'
        },
        {
            id: 5, segment: 'A', members:
                [
                    { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Real Bn Nasir', registrationNumber: 'REG123', status: 'Regular' }, // No photo provided
                ]
            , taxStatus: 'Submitted'
        },
        {
            id: 5, segment: 'B', members:
                [
                    { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
                ], taxStatus: 'Failed'
        },
        {
            id: 6, segment: 'A', members:
                [
                    { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
                ], taxStatus: 'Submitted'
        },
        {
            id: 6, segment: 'B', members:
                [
                    { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                    { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
                ], taxStatus: 'Failed'
        },
        {
            id: 8, segment: 'A', members: [
                { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
            ], taxStatus: 'Submitted'
        },
        {
            id: 8, segment: 'B', members: [
                { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
            ], taxStatus: 'Failed'
        },
        {
            id: 10, segment: 'A', members: [
                { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
            ], taxStatus: 'Submitted'
        },
        {
            id: 10, segment: 'B', members: [
                { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
                { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
            ], taxStatus: 'Failed'
        },
        // Add more groups as needed
    ];

    let currentGroup = null;
    let stripe = false;

    const handleViewClick = (group) => {
        navigate(`/groupview/${group.id}/${group.segment}`);
    };

    const [groups, setGroups] = useState(initialGroups);
    const [newGroup, setNewGroup] = useState({ id: '', segment: '' });
    const [viewGroup, setViewGroup] = useState(null); // State to track the group to be viewed
    const navigate = useNavigate();

    const StyledTableHeadRow = styled(TableRow)({
        backgroundColor: 'transparent',
        borderBottom: '2px solid #e0e0e0',
        borderTop: '2px solid #e0e0e0',
    });

    return (
        <Container>
            <SubHeader />
            <h2 className="my-4 text-center">Group Management</h2>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader> Manage Groups</CardHeader>
                        <CardBody>
                            <Table>
                                <TableHead>
                                    <StyledTableHeadRow>
                                        <TableCell>Group</TableCell>
                                        <TableCell>Members</TableCell>
                                        <TableCell>Tax Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </StyledTableHeadRow>
                                </TableHead>
                                <TableBody>
                                    {groups.map((group, index) => {
                                        if (group.id !== currentGroup) {
                                            currentGroup = group.id;
                                            stripe = !stripe;
                                        }
                                        return (
                                            <StripedTableRow key={index} stripe={stripe}>
                                                <TableCell>Group {group.id}-{group.segment}</TableCell>
                                                <TableCell>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        {group.members.map((member, idx) => (
                                                            <Tooltip title={member.name} key={idx} arrow>
                                                                <HoverAvatar src={member.photo || undefined} alt={member.name} />
                                                            </Tooltip>
                                                        ))}
                                                    </div>
                                                </TableCell>
                                                <TableCell style={{ color: group.taxStatus === 'Submitted' ? 'green' : 'red' }}>
                                                    {group.taxStatus}
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="contained" onClick={() => handleViewClick(group)} style={{ width: '50%', background: '#000435' }}>View</Button>
                                                </TableCell>
                                            </StripedTableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default GroupManagement;
