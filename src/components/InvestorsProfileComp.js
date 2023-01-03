import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';

import {
    Grid, Box,
    Typography,
} from "@mui/material";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
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

// const useStyles = makeStyles(theme => ({
//     alignItemsAndJustifyContent: {
//       display: 'grid',
//       alignItems: 'center',
//       justifyContent: 'right',
//     },

//     alignUserAvatar: {
//       display: 'grid',
//       alignItems: 'center',
//       justifyContent: 'left',
//     },
// }))

export default function InvestorsProfileComp(props) {
    return (
        <><Grid container fluid>
            <Row>
                <Col>
                    <Box sx={{ border: 1, borderRadius: '16px' }} display="flex" justifyContent="center" alignItems="center" style={{ padding: "7px", marginTop: "5px", marginBottom: "5px", backgroundColor: "#eee" }}>
                        <TextField fullWidth id="input-with-sx" label="Search" variant="standard" />
                        <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
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
                                    <IconButton aria-label="favorite">
                                        <Icon icon="mdi:bitcoin" />
                                        <AccountCircleOutlinedIcon sx={{ fontSize: 200 }} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Alessio Carachino                                    
                                    </Typography>
                                    <Typography gutterBottom component="div">
                                        Story teller                                   
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                            <ThemeProvider theme={theme}>
                                                <Chip icon={<AccountCircleOutlinedIcon />} label="BTC" />
                                            </ThemeProvider>
                                            <ThemeProvider theme={theme}>
                                                <Chip icon={<AccountCircleOutlinedIcon />} label="BTC" />
                                            </ThemeProvider>             
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Box m="auto" display="flex" style={{margin: 0}} >
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
                                <Typography gutterBottom variant="h5" component="div">
                                    Alessio Carachino                                    
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    context
                                </Typography>
                                <Box m="auto" display="flex" style={{margin: 0}} >
                                    <IconButton aria-label="favorite">
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </Box>
                                <Box m="auto" display="flex" style={{margin: 0}} >
                                    <IconButton aria-label="chart">
                                        <ShowChartIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Box sx={{ border: 1, borderRadius: '16px' }} style={{ padding: "10px", marginTop: "5px", marginBottom: "5px", backgroundColor: "#eee" , borderBlockColor: '#000'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Alessio Carachino                                    
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    context
                                </Typography>
                                <Box m="auto" display="flex" style={{margin: 0}} >
                                        <IconButton aria-label="favorite">
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                </Box>
                                <Box m="auto" display="flex" style={{margin: 0}} >
                                    <IconButton aria-label="chart">
                                        <ShowChartIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>  
                </Col>
            </Row>
        </Grid></>
        );
    }
export {InvestorsProfileComp}
