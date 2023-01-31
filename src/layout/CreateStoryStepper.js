import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    Checkbox,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper, Rating,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField, Tooltip
} from "@mui/material";
import {
    Add, ArrowDownward, ArrowLeft, ArrowRight, ArrowUpward,
    CheckCircleRounded, Delete,
    FormatAlignCenter,
    FormatAlignLeft,
    FormatAlignRight,
    FormatBold,
    FormatItalic, FormatUnderlined,
    Refresh,
    Star, Upload, UploadFile,
    Verified
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {ToggleButtonGroup, ToggleButton} from '@mui/material'
import IconButton from "@mui/material/IconButton";


const steps = ['Select Investments', 'Choose Modality', 'Write the story', 'Upload Material', 'Overview'];

function CreateStoryStepper(props) {
    const investmentsArr = [{
        startDate: '10-12-2022',
        endDate: 'In progress',
        asset: ['BTC'],
        revenue: '+$150.00',
        selected: false
    },
        {startDate: '05-07-2020', endDate: '08-11-2021', asset: ['ETH'], revenue: '-$1000.00', selected: false},
        {startDate: '10-01-2021', endDate: '10-10-2022', asset: ['APL'], revenue: '+$100.00', selected: false},
    ]
    const [investments, setInvestments] = useState(investmentsArr)
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [aiPicked, setAiPicked] = useState(true)
    const [openRateDialog, setOpenRateDialog] = useState(false);
    const [openGenerateAgainDialog, setOpenGenerateAgainDialog] = useState(false);

    const [notebook, setNotebook] = useState([{
        type: 'Subtitle',
        content: 'Lorem Ipsum',
        show_buttons: false,
        alignment: 'left',
        formats: []
    }, {
        type: 'Paragraph',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        show_buttons: false,
        alignment: 'left',
        formats: []
    }])
    const fragmentOptions = ['Subtitle', 'Paragraph']
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
        if (activeStep === 1 && !aiPicked) {
            setNotebookTitle('')
            setNotebook([{type: 'Subtitle', content: '', show_buttons: false, alignment: 'left', formats: []}])
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


    const showButtonsOfFragment = (index, b) => {
        setNotebook((old) => {
            let newN = [...old]
            newN[index].show_buttons = b
            return newN
        })
    }

    const addFragment = (index, up) => {
        setNotebook((old) => {
            let fragment = {
                type: 'Paragraph',
                content: 'A new Fragment has been added',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }
            if (up) {
                return [...old.slice(0, index), {...fragment}, ...old.slice(index)]
            } else {
                return [...old.slice(0, index + 1), {...fragment}, ...old.slice(index + 1)]
            }

        })
    }

    const addMedia = (index, up) => {
        console.log('todo')
    }

    const deleteFragment = (index) => {
        setNotebook((old) => {
            return [...old.slice(0, index), ...old.slice(index + 1)]
        })
    }

    const updateContent = (value, index) => {
        setNotebook((old) => [...old.slice(0, index), {...old[index], content: value}, ...old.slice(index + 1)])
    }

    function updateTypeOfFragment(value, index) {
        setNotebook((old) => [...old.slice(0, index), {...old[index], type: value}, ...old.slice(index + 1)])
    }

    const handleAlignment = (event, newAlignment, index) => {
        setNotebook((old) => [...old.slice(0, index), {
            ...old[index],
            alignment: newAlignment
        }, ...old.slice(index + 1)])
    };

    const handleFormat = (event, newFormats, index) => {
        setNotebook((old) => [...old.slice(0, index), {...old[index], formats: newFormats}, ...old.slice(index + 1)])
    };

    const moveIndexUp = (index) => {
        setNotebook((old) => [...old.slice(0, index - 1), {...old[index]}, {...old[index - 1]}, ...old.slice(index + 1)])
    }

    const moveIndexDown = (index) => {
        setNotebook((old) => [...old.slice(0, index), {...old[index + 1]}, {...old[index]}, ...old.slice(index + 2)])
    }

    return (
        <Box sx={{width: '100%'}}>
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

                                <Typography variant='h4' align='center'>Select among your investments the ones you want to
                                    write about</Typography>
                                <div style={{paddingTop: '20px'}}></div>
                                <TableContainer component={Paper} elevation={15}>
                                    <Table aria-label="collapsible table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align='center'>Start date</TableCell>
                                                <TableCell align='center'>End date</TableCell>
                                                <TableCell align='center'>Asset</TableCell>
                                                <TableCell align='center'>Revenue</TableCell>
                                                <TableCell/>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {investments.map((row, index) => (
                                                <TableRow key={index} hover selected={row.selected}
                                                          sx={{backgroundColor: 'white'}}>
                                                    <TableCell align='center'>{row.startDate}</TableCell>
                                                    <TableCell align='center'>{row.endDate}</TableCell>
                                                    <TableCell align='center'>{row.asset}</TableCell>
                                                    <TableCell align='center'>{row.revenue}</TableCell>
                                                    <TableCell align='center'><Checkbox
                                                        onChange={() => selectInvestment(index)}
                                                        checked={row.selected}></Checkbox></TableCell>
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
                                    <Grid item style={{height: '100%'}} xs={3}>
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
                                                        <Typography variant="h3">
                                                            AI
                                                        </Typography>

                                                        {aiPicked ? <CheckCircleRounded color={"primary"}
                                                                                        fontSize={"large"}></CheckCircleRounded> : ''}

                                                    </Stack>

                                                    <Typography variant="body1" color="text.secondary">
                                                        Our AI system will generate a story that you can edit<br/><br/>
                                                        The generated story will be inspired by your selected
                                                        investments
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3} minHeight={'100%'}>
                                        <Card raised={true} style={{height: '100%'}}>
                                            <CardActionArea onClick={() => setAiPicked(false)}
                                                            style={!aiPicked ? {
                                                                backgroundColor: '#ccddff',
                                                                height: '100%'
                                                            } : {height: '100%'}}
                                            >
                                                <CardContent style={{height: '100%'}}>
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="space-between"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                        <Typography variant="h3">
                                                            Blank
                                                        </Typography>

                                                        {!aiPicked ? <CheckCircleRounded color={"primary"}
                                                                                         fontSize={"large"}></CheckCircleRounded> : ''}

                                                    </Stack>
                                                    <Typography variant="body1" color="text.secondary">
                                                        You will start from empty fields <br/><br/>
                                                        You will have to write it entirely
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </>
                            : activeStep === 2 ?
                                <>
                                    <Grid2 container spacing={0}>
                                        <Grid2 xs={3}></Grid2>
                                        <Grid2 display={"flex"} justifyContent={"center"} alignItems={"center"} xs={6}>
                                            <Button onClick={() => setOpenGenerateAgainDialog(true)} variant={"outlined"}
                                                    startIcon={<Refresh></Refresh>}>Generate again</Button>
                                            <Dialog
                                                open={openGenerateAgainDialog}
                                                onClose={() => setOpenGenerateAgainDialog(false)}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">
                                                    {"Are you sure?"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        Are you sure you want to generate the story again?
                                                        <br/><br/>
                                                        Once our AI generates a new story, there is no way back to your
                                                        previous editing session.
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={() => setOpenGenerateAgainDialog(false)}>Undo</Button>
                                                    <Button
                                                        onClick={() => setOpenGenerateAgainDialog(false)}>Generate</Button>
                                                </DialogActions>
                                            </Dialog>
                                            <div style={{paddingRight: '15px'}}></div>
                                            <Button onClick={() => setOpenRateDialog(true)} variant={"outlined"}
                                                    startIcon={<Star></Star>}>Rate suggested story</Button>
                                            <Dialog
                                                open={openRateDialog}
                                                onClose={() => setOpenRateDialog(false)}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">
                                                    {"Make you count!"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        Do you like what our AI suggested to you?
                                                        <Rating></Rating>
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={() => setOpenRateDialog(false)}>Cancel</Button>
                                                    <Button onClick={() => setOpenRateDialog(false)}>Send</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Grid2>
                                        <Grid2 xs={3}></Grid2>
                                    </Grid2>
                                    <Typography variant="h3">Title</Typography>
                                    <div style={{paddingTop: '20px'}}></div>
                                    <Box sx={{p: 2}}>
                                        <TextField InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Verified color={"primary"}/>
                                                </InputAdornment>
                                            ),
                                        }} style={{width: '40%'}} label="Title" variant="filled"
                                                   defaultValue={notebookTitle}
                                                   onChange={(e) => setNotebookTitle(e.target.value)}></TextField>
                                    </Box>

                                    <div style={{paddingTop: '30px'}}></div>

                                    <Typography variant="h3">Body</Typography>
                                    <div style={{paddingTop: '20px'}}></div>
                                    {notebook.map((fragment, index) => {
                                        return (
                                            <>
                                                <Box onMouseEnter={() => {
                                                    showButtonsOfFragment(index, true)
                                                }} onMouseLeave={() => showButtonsOfFragment(index, false)}
                                                     key={'a' + index} sx={fragment.show_buttons ? {
                                                    borderRadius: 1,
                                                    backgroundColor: '#fdfafa',
                                                    border: 3,
                                                    borderColor: 'primary.main',
                                                    p: 2
                                                } : {
                                                    borderRadius: 1,
                                                    backgroundColor: '#fdfafa',
                                                    border: 1,
                                                    borderColor: 'primary.main',
                                                    p: 2
                                                }}>

                                                    {fragment.show_buttons ? <><Box display="flex" justifyContent="center"
                                                                                    alignItems="flex-start">
                                                        <Button startIcon={<Add></Add>} size={"small"} variant="outlined"
                                                                onClick={() => addFragment(index, true)}>Add
                                                            Fragment</Button>
                                                        <div>{"\u00A0"}</div>
                                                        <Button startIcon={<Add></Add>} size={"small"} variant="outlined"
                                                                onClick={() => addMedia(index, true)}>Add Media</Button>
                                                    </Box>
                                                        <div style={{paddingBottom: '15px'}}></div>
                                                    </> : <div style={{paddingBottom: '15px'}}></div>}

                                                    <FormControl fullWidth>
                                                        <Grid container direction="row"
                                                              justifyContent="center"
                                                              alignItems="stretch">
                                                            <Grid item xs={4}>
                                                                <InputLabel id="demo-simple-select-label">Fragment
                                                                    type</InputLabel>
                                                                <Select
                                                                    style={{
                                                                        height: '60px',
                                                                        width: '200px',
                                                                        backgroundColor: 'f0f0f0'
                                                                    }}
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    label="Fragment type"
                                                                    variant="filled"
                                                                    value={fragment.type}
                                                                    onChange={(e) => updateTypeOfFragment(e.target.value, index)}
                                                                >
                                                                    {fragmentOptions.map((option, i) => {
                                                                        return (
                                                                            <MenuItem key={'b' + index + i}
                                                                                      value={option}>{option}</MenuItem>
                                                                        )
                                                                    })}
                                                                </Select>
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                {fragment.type === 'Paragraph' ?
                                                                    <Box justifyContent='center' display='flex'>
                                                                        <ToggleButtonGroup
                                                                            value={fragment.alignment}
                                                                            exclusive
                                                                            onChange={(e, n) => handleAlignment(e, n, index)}
                                                                            aria-label="text alignment"
                                                                        >
                                                                            <ToggleButton value="left"
                                                                                          aria-label="left aligned">
                                                                                <FormatAlignLeft/>
                                                                            </ToggleButton>
                                                                            <ToggleButton value="center"
                                                                                          aria-label="centered">
                                                                                <FormatAlignCenter/>
                                                                            </ToggleButton>
                                                                            <ToggleButton value="right"
                                                                                          aria-label="right aligned">
                                                                                <FormatAlignRight/>
                                                                            </ToggleButton>
                                                                        </ToggleButtonGroup>
                                                                        <Divider flexItem orientation="vertical"
                                                                                 sx={{mx: 1, my: 1}}/>

                                                                        <ToggleButtonGroup
                                                                            value={fragment.formats}
                                                                            onChange={(e, n) => handleFormat(e, n, index)}
                                                                            aria-label="text formatting"
                                                                        >
                                                                            <ToggleButton value="bold" aria-label="bold">
                                                                                <FormatBold/>
                                                                            </ToggleButton>
                                                                            <ToggleButton value="italic"
                                                                                          aria-label="italic">
                                                                                <FormatItalic/>
                                                                            </ToggleButton>
                                                                            <ToggleButton value="underlined"
                                                                                          aria-label="underlined">
                                                                                <FormatUnderlined/>
                                                                            </ToggleButton>
                                                                        </ToggleButtonGroup>
                                                                    </Box>
                                                                    : ''}
                                                            </Grid>
                                                            <Grid justifyContent='right' display='flex' alignItems={"flex-end"} item xs={4}>
                                                                {fragment.type === 'Paragraph' || fragment.type === 'Subtitle' ?
                                                                    <Box >
                                                                        {fragment.show_buttons && notebook.length !== 1 ? <>
                                                                                <Tooltip arrow title={"Delete"}><IconButton
                                                                                    color={"primary"} size={"large"}
                                                                                    onClick={() => deleteFragment(index)}><Delete
                                                                                    fontSize="inherit"></Delete></IconButton></Tooltip>
                                                                                <Tooltip arrow title={"Move up"}><IconButton
                                                                                    disabled={index === 0} color={"primary"}
                                                                                    size={"large"}
                                                                                    onClick={() => moveIndexUp(index)}><ArrowUpward
                                                                                    fontSize="inherit"></ArrowUpward></IconButton></Tooltip>
                                                                                <Tooltip arrow title={"Move down"}><IconButton
                                                                                    disabled={index === notebook.length - 1}
                                                                                    color={"primary"} size={"large"}
                                                                                    onClick={() => moveIndexDown(index)}><ArrowDownward
                                                                                    fontSize="inherit"></ArrowDownward></IconButton></Tooltip></>
                                                                            : ''}<br/>
                                                                    </Box>
                                                                    : ''}

                                                            </Grid>
                                                        </Grid>
                                                        <div style={{paddingTop: '10px'}}></div>
                                                        <Divider></Divider>
                                                        <Divider></Divider>
                                                        <div style={{paddingTop: '10px'}}></div>
                                                    </FormControl>
                                                    <TextField multiline rows={fragment.type === 'Subtitle' ? 1 : 5}
                                                               style={{width: '100%', backgroundColor: 'f0f0f0'}}
                                                               label={fragment.type} variant="filled"
                                                               value={fragment.content}
                                                               onChange={(e) => (updateContent(e.target.value, index))}></TextField>
                                                    <div style={{paddingBottom: '15px'}}></div>
                                                    {fragment.show_buttons ? <><Box display="flex" justifyContent="center"
                                                                                    alignItems="flex-start">
                                                        <Button startIcon={<Add></Add>} size={"small"} variant="outlined"
                                                                onClick={() => addFragment(index, false)}>Add
                                                            Fragment</Button>
                                                        <div>{"\u00A0"}</div>
                                                        <Button startIcon={<Add></Add>} size={"small"} variant="outlined"
                                                                onClick={() => addMedia(index, false)}>Add Media</Button>
                                                    </Box></> : ''}
                                                </Box>

                                                <div style={{paddingTop: '10px'}}></div>
                                            </>
                                        )
                                    })}
                                    <div style={{paddingTop: '10px'}}></div>
                                </> :
                                activeStep === 3 ?
                                    <>
                                        <Typography variant={'h5'}>This step is optional</Typography>
                                        <div style={{
                                            paddingTop: '30px',
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "center",
                                            display: "flex"
                                        }}>
                                            <Stack direction="column"
                                                   justifyContent="center"
                                                   alignItems="flex-start"
                                                   spacing={3}
                                                   sx={{maxWidth: '400px'}}>
                                                <Button size={"large"} startIcon={<UploadFile></UploadFile>}
                                                        variant={"text"}>Upload cover image</Button>
                                                <Button size={"large"} startIcon={<Upload></Upload>} variant={"text"}>Upload
                                                    video presentation</Button>

                                            </Stack></div>

                                    </> :
                                    activeStep === 4 ?
                                        <>
                                        </> :
                                        ''
                    }
                    {activeStep === 4 ? (
                            <>
                                <Typography sx={{mt: 2, mb: 1}}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    <Box sx={{flex: '1 1 auto'}}/>
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </>
                        ) :
                        <Stack spacing={12} direction={"row"}
                               sx={{display: 'flex', pt: 4, alignItems: "center", justifyContent: "center"}}>
                            <Button
                                startIcon={<ArrowLeft></ArrowLeft>}
                                variant={"outlined"}
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}

                            >
                                Back
                            </Button>

                            {isStepOptional(activeStep) && (
                                <Button variant={"outlined"} color="inherit" onClick={handleSkip} sx={{mr: 1}}>
                                    Skip
                                </Button>
                            )}

                            <Button endIcon={<ArrowRight></ArrowRight>} variant={"contained"}
                                    disabled={activeStep === 0 && !investments.find((i) => i.selected === true)}
                                    onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Stack>}
                </CardContent>
            </Card>
        </Box>
    )
}

export {CreateStoryStepper}
