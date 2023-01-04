import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';
import {useNavigate} from 'react-router-dom';

import {
    Grid, Card, Box, CardContent,
    CardActionArea, Typography,
} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const posts = [
    {id: 1, title: 'Hossein Javadi', body:'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
    'species, ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents'},
    {id: 2, title: 'Alessio Carachino', body:'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
    'species, ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents'},
    {id: 3, title: 'Lorenzo Lorenzo', body:'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
    'species, ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents'},
    {id: 4, title: 'Francesco Di Gangi', body:'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
    'species, ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents'},
        ]


const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
  },
});

export default function InvestorsProfileComp(props) {
    const navigate = useNavigate();
    const [newsState] = useState(posts)

    return (
        <><Grid container fluid>
            <Row>
                <Col>
                    <IconButton aria-label="account" onClick={() => navigate(-1)}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography gutterBottom variant="h2" component="div" justifyContent="center" alignItems="center">
                        <center>Overviews</center>
                    </Typography>
                </Col>
            </Row>
        </Grid>

        <Grid container fluid>
            <Row>
                <Col>
                    <Grid sx={{ border: 1, borderRadius: '16px' }} style={{ padding: "10px", marginTop: "5px", marginBottom: "25px", backgroundColor: "#eee"}}>
                        <Box display="flex" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs sm={3}>
                                    <IconButton aria-label="account">
                                        <AccountCircleOutlinedIcon sx={{ fontSize: 180 }}/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={3} sm={8}>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Alessio Carachino                                    
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Story teller
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                       <ThemeProvider theme={theme}>
                                           <Icon icon="mdi:bitcoin" />
                                       </ThemeProvider>
                                       
                                       <ThemeProvider theme={theme}>
                                           <Icon icon="mdi:bitcoin" />
                                       </ThemeProvider>             
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} sm={1}>
                                    <Card display="flex" m="auto" style={{float:'right', marginBottom: "5px"}}>
                                        <IconButton aria-label="favorite">
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                        
                        <Typography component="div">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents'
                        </Typography>
                    </Grid>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Typography gutterBottom variant="h2" component="div">
                            <center>User's Stories</center>
                        <hr/>
                   </Typography>
                </Col>
            </Row>

            <Row>
                <Col>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {newsState.map(i => (
                        <Grid key={i.id} item xs={6}>
                            <Card sx style={{ padding: "10px", marginTop: "5px", marginBottom: "5px"}}>
                                <CardActionArea onClick={()=> window.location.href='/Investors/Profile'}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {i.title}                                   
                                        </Typography>
                                        <Box display="flex" m="auto" style={{float:'right', marginBottom: "5px"}}>
                                            <IconButton aria-label="favorite">
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            <IconButton aria-label="chart">
                                                <ShowChartIcon />
                                            </IconButton>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary">
                                            {i.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>  
                </Col>
            </Row>
        </Grid></>
        );
    }
export {InvestorsProfileComp}
