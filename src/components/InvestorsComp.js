import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import {
    Grid, Card, CardContent,
    CardActionArea, Typography, CardActions,
} from "@mui/material";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";

const profilesArr = [
    {id: 1, name: 'Hossein Javadi', description: 'Since 3 years'},
    {id: 2, name: 'Alessio Carachino', description: 'Since 2 years'},
    {id: 3, name: 'Lorenzo Santo', description: 'Since 3 years'},
    {id: 4, name: 'Francesco Di Gangi', description: 'Since 3 years'},
    ]

export default function InvestorsComp(props) {
    const [profiles, setProfiles] = useState(profilesArr)

    return (
        <><Grid container fluid>
            <Row>
                <Col>
                    <Grid sx={{ borderRadius: '16px' }} display="flex" justifyContent="center" alignItems="center" style={{ padding: "7px", marginTop: "15px", marginBottom: "45px", backgroundColor: "#eee"}}>
                        <TextField fullWidth id="input-with-sx" label="Search" variant="standard" />
                        <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Grid>
                </Col>
            </Row>
        </Grid>

        <Grid container fluid>
            <Row>
                <Col>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                        {profiles.map(i => (
                        <Grid key={i.id} item xs={6}>
                            <Card raised={true} style={{ padding: "10px", marginTop: "5px", marginBottom: "5px"}}>
                                <CardActionArea>
                                    <CardContent onClick={()=> window.location.href='/Investors/Profile'}>
                                        <Typography variant="h3" component="div">
                                            {i.name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {i.description}
                                        </Typography>
                                    </CardContent>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={8}></Grid>
                                                <Grid item xs={4} display={"flex"} justifyContent={"right"} alignItems={"center"}>
                                                    <IconButton aria-label="favorite">
                                                        <FavoriteBorderIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="chart">
                                                        <ShowChartIcon />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>

                                        </CardActions>
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
