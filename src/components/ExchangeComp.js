import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {Add, Favorite, FilterList, Folder, Info, Search, Share} from "@mui/icons-material";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ExploreIcon from '@mui/icons-material/Explore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ButtonGroup from '@mui/material/ButtonGroup';

const bull = (
    <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    •
    </Box>
);

export default function ExchangeComp(prop) {
    const [expanded, setExpanded] = React.useState(false);
    const navigate=useNavigate();
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    
    return (
        <>
        {/* Insert Balance and Explore instead of Story and my stories
        */}
        <Grid container rowSpacing={1}>
                <Grid item xs={2}>
                    <Button onClick={() => navigate('/Exchange')} variant={"outlined"} startIcon={<CurrencyBitcoinIcon></CurrencyBitcoinIcon>}>Balance</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={()=>navigate('/Exchange/Explore')} variant={"outlined"} startIcon={<ExploreIcon></ExploreIcon>}>Explore</Button>
                </Grid>
        </Grid>
        {/**Starting page */}
        <Grid2 style={{paddingTop: '30px'}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Your Balance
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Check Your Balance</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Card sx={{ minWidth: 1024 }}>
                <CardContent>
                    <Grid2 container spacing={2} columns={16} style={{paddingTop: '30px'}}>
                        <Grid2 xs={8}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Your current balance: 
                            </Typography>
                            <Typography variant="h5" component="div">
                            +$625.35
                            </Typography>
                        </Grid2>
                        <Grid2 xs={8}>
                            <ButtonGroup variant="text" aria-label="text button group">
                                <Button>All</Button>
                                <Button>1m</Button>
                                <Button>1y</Button>
                                <Button>1h</Button>
                                <Button>1d</Button>
                            </ButtonGroup>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2} columns={16} style={{paddingTop: '30px'}}>
                        <Grid2 xs={8}>
                            <img src="./static/images/news/chartExchange.png" alt='Graph' width="124" height="124"/>
                        </Grid2>
                        <Grid2 xs={8}>
                            <img src="./static/images/news/secondchartExchange.png" alt='Graph' width="500" height="200"/>
                        </Grid2>
                    </Grid2>
                </CardContent>
                </Card>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                You are currently not an owner
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Advanced settings
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>
        </Grid2>
        </>
    );
}

export {ExchangeComp}