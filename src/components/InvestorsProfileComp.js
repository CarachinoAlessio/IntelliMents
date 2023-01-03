import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';
import {useNavigate} from 'react-router-dom';

import {
    Grid, Box,
    Typography,
} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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
                    <Box sx={{ border: 1, borderRadius: '16px' }} style={{ padding: "10px", marginTop: "5px", marginBottom: "5px", backgroundColor: "#eee" , borderBlockColor: '#000'}}>
                        <Box display="flex" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    <IconButton aria-label="account">
                                        <AccountCircleOutlinedIcon sx={{ fontSize: 180 }} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={7} sm>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Alessio Carachino                                    
                                    </Typography>
                                    <Typography gutterBottom component="div">
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
                                <Grid item xs>
                                    <Box display="flex" m="auto" style={{float:'right', marginBottom: "5px"}}>
                                        <IconButton aria-label="favorite">
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        
                        <Typography component="div">
                            Context
                        </Typography>
                    </Box>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Typography gutterBottom variant="h5" component="div">
                            <center>User's Stories</center>
                        <hr/>
                   </Typography>
                </Col>
            </Row>

            <Row>
                <Col>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={6}>
                            <Box sx={{ border: 1, borderRadius: '16px' }} style={{ padding: "10px", marginTop: "5px", marginBottom: "5px", backgroundColor: "#eee" , borderBlockColor: '#000'}}>
                                <Typography onClick={()=> window.location.href='/Investors/Profile'} gutterBottom variant="h5" component="div">
                                    Alessio Carachino                                    
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <Box display="flex" m="auto" style={{float:'right', marginBottom: "5px"}}>
                                    <IconButton aria-label="favorite">
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                    <IconButton aria-label="chart">
                                        <ShowChartIcon />
                                    </IconButton>
                                </Box>
                                context<br/>
                                context<br/>
                                context
                                </Typography>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Box sx={{ border: 1, borderRadius: '16px' }} style={{ padding: "10px", marginTop: "5px", marginBottom: "5px", backgroundColor: "#eee" , borderBlockColor: '#000'}}>
                                <Typography onClick={()=> window.location.href='/Investors/Profile'} gutterBottom variant="h5" component="div">
                                    Alessio Carachino                                    
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <Box display="flex" m="auto" style={{float:'right', marginBottom: "5px"}}>
                                    <IconButton aria-label="favorite">
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                    <IconButton aria-label="chart">
                                        <ShowChartIcon />
                                    </IconButton>
                                </Box>
                                context<br/>
                                context<br/>
                                context
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>  
                </Col>
            </Row>
        </Grid></>
        );
    }
export {InvestorsProfileComp}
