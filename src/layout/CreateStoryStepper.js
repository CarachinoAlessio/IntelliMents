import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {
    Card, CardActionArea,
    CardContent, CardHeader, Checkbox, Container, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem,
    Paper, rgbToHex, Select, Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@mui/material";
import {CheckCircleRounded, SelectAll, TaskAlt, Verified} from "@mui/icons-material";


const steps = ['Select Investments', 'Choose Modality', 'Write the story', 'Upload Material', 'Overview'];

function CreateStoryStepper(props) {
    const investmentsArr = [{startDate: '10-12-2022', endDate: 'In progress', title: 'BTC', revenue: '+$150.00', selected: false},
        {startDate: '05-07-2020', endDate: '08-11-2021', title: 'ETH', revenue: '-$1000.00', selected: false},
        {startDate: '10-01-2021', endDate: '10-10-2022', title: 'APL', revenue: '+$100.00', selected: false},
    ]
    const [investments, setInvestments] = useState(investmentsArr)
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [aiPicked, setAiPicked] = useState(true)
    const [notebook, setNotebook] = useState([{type: 'Subtitle', content: 'Lorem Ipsum'}, {type: 'Paragraph', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}])
    const fragmentOptions = ['Title', 'Subtitle', 'Paragraph']
    const [notebookTitle, setNotebookTitle] = useState('Example of AI-generated Title')

    const selectInvestment = (index) => {
        setInvestments((old) => {
            let newArr = [...old]
            newArr[index] = {...old[index], selected: !old[index].selected}
            return newArr
        })
    }
    const isStepOptional = (step) => {
        return step === 3;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Card>
                <CardContent>
                    {activeStep === 0 ? (
                        <>

                            <Typography variant='h4' align='center'>Select among your investments the ones you want to write about</Typography>
                            <div style={{paddingTop: '20px'}}></div>
                            <TableContainer component={Paper} elevation={15}>
                                <Table aria-label="collapsible table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Start date</TableCell>
                                            <TableCell align='center'>End date</TableCell>
                                            <TableCell align='center'>Title</TableCell>
                                            <TableCell align='center'>Revenue</TableCell>
                                            <TableCell />
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {investments.map((row, index) => (
                                            <TableRow key={index} hover selected={row.selected} sx={{backgroundColor: 'white'}}>
                                                <TableCell align='center'>{row.startDate}</TableCell>
                                                <TableCell align='center'>{row.endDate}</TableCell>
                                                <TableCell align='center'>{row.title}</TableCell>
                                                <TableCell align='center'>{row.revenue}</TableCell>
                                                <TableCell align='center'><Checkbox onChange={() => selectInvestment(index)} checked={row.selected}></Checkbox></TableCell>
                                            </TableRow>
                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </>
                    ) :
                        activeStep === 1 ?
                            <>
                                <Grid container spacing={2}
                                      direction="row"
                                      justifyContent="center"
                                      alignItems="stretch"
                                      sx={{paddingTop: '35px', paddingBottom: '20px'}}>
                                    <Grid item style={{height:'100%'}} xs={3}>
                                        <Card raised={true}>
                                            <CardActionArea onClick={() => setAiPicked(true)}
                                                            style={aiPicked ? {backgroundColor: '#ccddff'} : {}}>
                                                <CardContent>
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="space-between"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                            <Typography  variant="h3" >
                                                                AI
                                                            </Typography>

                                                        {aiPicked ? <CheckCircleRounded color={"primary"} fontSize={"large"}></CheckCircleRounded>: ''}

                                                    </Stack>

                                                    <Typography variant="body1" color="text.secondary">
                                                        Our AI system will generate a story that you can edit<br /><br />
                                                        The generated story will be inspired by your selected investments
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3} minHeight={'100%'}>
                                        <Card raised={true} style={{height:'100%'}}>
                                            <CardActionArea onClick={() => setAiPicked(false)}
                                                            style={!aiPicked ? {backgroundColor: '#ccddff', height:'100%'} : {height:'100%'}}
                                                            >
                                                <CardContent style={{height:'100%'}}>
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="space-between"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                        <Typography  variant="h3" >
                                                            Blank
                                                        </Typography>

                                                        {!aiPicked ? <CheckCircleRounded color={"primary"} fontSize={"large"}></CheckCircleRounded>: ''}

                                                    </Stack>
                                                    <Typography variant="body1" color="text.secondary">
                                                        You will start from empty fields <br /><br />
                                                        You will have to write it entirely
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </>
                            : activeStep===2?
                                <>
                                    <Typography variant="h4">Title</Typography>
                                    <div style={{paddingTop: '20px'}}></div>
                                    <Box sx={{p: 2}}>
                                        <TextField InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Verified color={"primary"} />
                                                </InputAdornment>
                                            ),
                                        }} style={{width: '40%'}} label="Title" variant="outlined" defaultValue={notebookTitle}></TextField>
                                    </Box>

                                    <div style={{paddingTop: '30px'}}></div>

                                    <Typography variant="h3">Body</Typography>
                                    <div style={{paddingTop: '20px'}}></div>
                                    {notebook.map((fragment, index) => {
                                        return (
                                            <>
                                                <Box key={index} sx={{ borderRadius: 1, backgroundColor: '#f5f5f5', p: 2}}>
                                                        <FormControl style={{width: '20%'}}>
                                                            <InputLabel id="select-type">Fragment type</InputLabel>
                                                            <Select labelId="select-type"
                                                                    id="select-type"
                                                                    label="Fragment type" value={fragment.type}>
                                                                {fragmentOptions.map((option) => {
                                                                    return (
                                                                    <MenuItem value={option}>{option}</MenuItem>
                                                                )})}
                                                            </Select>
                                                        </FormControl>
                                                        <Divider></Divider>
                                                        <div style={{paddingTop: '20px'}}></div>
                                                        <TextField multiline rows={3} style={{width: '100%'}} label={fragment.type} variant="outlined" defaultValue={fragment.content}></TextField>
                                                        <Divider></Divider>
                                                </Box>

                                                <div style={{paddingTop: '50px'}}></div>
                                            </>
                                        )
                                    })}
                                </>:
                                activeStep===3?
                                    <>
                                    </>:
                                    activeStep===4?
                                        <>
                                        </> :
                                        ''
                    }
                    {activeStep === 4 ? (
                            <>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </>
                        ) :
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>}
                </CardContent>
            </Card>
        </Box>
    )
}

export {CreateStoryStepper}
