import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import {
    Grid, Card, Box, CardContent,
    CardActionArea, Typography,
} from "@mui/material";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";

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

export default function InvestorsComp(props) {
    const [newsState] = useState(posts)

    return (
        <><Grid container fluid>
            <Row>
                <Col>
                    <Grid sx={{ border: 1, borderRadius: '16px' }} display="flex" justifyContent="center" alignItems="center" style={{ padding: "7px", marginTop: "15px", marginBottom: "45px" }}>
                        <TextField fullWidth id="input-with-sx" label="Search" variant="standard" />
                        <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Grid>
                </Col>
            </Row>
        </Grid>

        <Grid container fluid>
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
export {InvestorsComp}
