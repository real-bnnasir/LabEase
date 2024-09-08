import { Box, CardContent, Modal, Paper, Tab, Tabs, Typography,Button } from '@mui/material'
import React, { useState } from 'react'
import MainGrade from './MainGrade'

const TabView = () => {

    const [tabValue, setTabValue] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const [experimentDate, setExperimentDate] = useState('');
    const [experimentDateGrade, setExperimentDateGrade] = useState('');

    const [title, setTitle] = useState('');
    const [titleGrade, setTitleGrade] = useState('');

    const [aim, setAim] = useState('');
    const [aimGrade, setAimGrade] = useState('');

    const [introduction, setIntroduction] = useState('');
    const [introductionGrade, setIntroductionGrade] = useState('');

    const [drawingMark, setDrawingMark] = useState('');
    const [drawingMarkGrade, setDrawingMarkGrade] = useState('');

    const [observation, setObservation] = useState('');
    const [observationGrade, setObservationGrade] = useState('');

    const [conclusion, setConclusion] = useState('');
    const [conclusionGrade, setConclusionGrade] = useState('');

    const [precaution, setPrecaution] = useState('');
    const [precautionGrade, setPrecautionGrade] = useState('');

    const [questionMark, setQuestionMark] = useState('');
    const [questionMarkGrade, setQuestionMarkGrade] = useState('');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleCrossCheck = () => {
        // Logic for cross-checking (e.g., navigating to another page or verifying data)
        handleCloseModal();
    };

    const handleSubmit = () => {
        // Logic for submitting (e.g., sending data to the server)
        handleCloseModal();
    };

    const totalGrade = [
        experimentDateGrade,
        titleGrade,
        aimGrade,
        introductionGrade,
        drawingMarkGrade,
        observationGrade,
        conclusionGrade,
        precautionGrade,
        questionMarkGrade
    ].reduce((acc, grade) => acc + (parseInt(grade) || 0), 0);

    return (
        <Paper style={{ maxHeight: '60vh', overflowY: 'auto', marginTop: '16px' }}>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                centered
            >
                <Tab label="Date" />
                <Tab label="Title" />
                <Tab label="Aim" />
                <Tab label="Introduction" />
                <Tab label="Drawing Mark" />
                <Tab label="Observation" />
                <Tab label="Conclusion" />
                <Tab label="Precaution" />
                <Tab label="Question Mark" />
            </Tabs>
            <CardContent>
                {tabValue === 0 && (
                    <MainGrade
                        label="Experiment Date"
                        field="experiment-date"
                        value={experimentDate}
                        setValue={setExperimentDate}
                        grade={experimentDateGrade}
                        setGrade={setExperimentDateGrade}
                    />
                )}
                {tabValue === 1 && (
                    <MainGrade
                        label="Title"
                        field="title"
                        value={title}
                        setValue={setTitle}
                        grade={titleGrade}
                        setGrade={setTitleGrade}
                    />
                )}
                {tabValue === 2 && (
                    <MainGrade
                        label="Aim"
                        field="aim"
                        value={aim}
                        setValue={setAim}
                        grade={aimGrade}
                        setGrade={setAimGrade}
                    />
                )}
                {tabValue === 3 && (
                    <MainGrade
                        label="Introduction"
                        field="introduction"
                        value={introduction}
                        setValue={setIntroduction}
                        grade={introductionGrade}
                        setGrade={setIntroductionGrade}
                    />
                )}
                {tabValue === 4 && (
                    <MainGrade
                        label="Drawing Mark"
                        field="drawing-mark"
                        value={drawingMark}
                        setValue={setDrawingMark}
                        grade={drawingMarkGrade}
                        setGrade={setDrawingMarkGrade}
                    />
                )}
                {tabValue === 5 && (
                    <MainGrade
                        label="Observation"
                        field="observation"
                        value={observation}
                        setValue={setObservation}
                        grade={observationGrade}
                        setGrade={setObservationGrade}
                    />
                )}
                {tabValue === 6 && (
                    <MainGrade
                        label="Conclusion"
                        field="conclusion"
                        value={conclusion}
                        setValue={setConclusion}
                        grade={conclusionGrade}
                        setGrade={setConclusionGrade}
                    />
                )}
                {tabValue === 7 && (
                    <MainGrade
                        label="Precaution"
                        field="precaution"
                        value={precaution}
                        setValue={setPrecaution}
                        grade={precautionGrade}
                        setGrade={setPrecautionGrade}
                    />
                )}
                {tabValue === 8 && (
                    <Box>
                        <MainGrade
                            label="Question Mark"
                            field="question-mark"
                            value={questionMark}
                            setValue={setQuestionMark}
                            grade={questionMarkGrade}
                            setGrade={setQuestionMarkGrade}
                            handleOpenModal={handleOpenModal}
                        />
                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="complete-modal-title"
                            aria-describedby="complete-modal-description"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Paper style={{ padding: '16px', maxWidth: '400px', textAlign: 'center' }}>
                                <Typography id="complete-modal-title" variant="h6" component="h2">
                                    Are you sure you have completed marking?
                                </Typography>
                                <Box mt={2}>
                                    <Typography variant="body1">
                                        <strong>Experiment Date:</strong> {experimentDate} (Grade: {experimentDateGrade})
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Title:</strong> {title} (Grade: {titleGrade})
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Aim:</strong> {aim} (Grade: {aimGrade})
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Introduction:</strong> {introduction} (Grade: {introductionGrade})
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Drawing Mark:</strong> {drawingMark} (Grade: {drawingMarkGrade})
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Observation:</strong> {observation} (Grade: {observationGrade})
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Conclusion:</strong> {conclusion} (Grade: {conclusionGrade})
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Precaution:</strong> {precaution} (Grade: {precautionGrade})
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Question Mark:</strong> {questionMark} (Grade: {questionMarkGrade})
                                    </Typography>
                                    <Typography variant="body1" style={{ marginTop: '16px', fontWeight: '700' }}>
                                        <strong>Total Grade:</strong> {totalGrade}
                                    </Typography>
                                    <Box mt={2}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleCrossCheck}
                                            style={{ marginRight: '16px' }}
                                        >
                                            Cross Check
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Modal>
                    </Box>
                )}
            </CardContent>
        </Paper>
    )
}

export default TabView
