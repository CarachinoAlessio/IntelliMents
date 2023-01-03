import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import {
    Grid, Box,
    Typography,
} from "@mui/material";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export default function InvestorsComp(props) {
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
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Box sx={{ border: 1, borderRadius: '16px' }} style={{ padding: "10px", marginTop: "5px", marginBottom: "5px", backgroundColor: "#eee" , borderBlockColor: '#000'}}>
                                <Typography onClick={()=> window.location.href='/Investors/Profile'} gutterBottom variant="h5" component="div">
                                    Alessio Carachino                                    
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    context
                                </Typography>
                                <Box display="flex" m="auto">
                                    <IconButton aria-label="favorite">
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </Box>
                                <Box display="flex" m="auto">
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
                                <Box display="flex" m="auto">
                                    <IconButton aria-label="favorite">
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </Box>
                                <Box display="flex" m="auto">
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
export {InvestorsComp}
