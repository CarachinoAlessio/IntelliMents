import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import Button from '@mui/material/Button';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import {Search} from "@mui/icons-material";
import * as PropTypes from "prop-types";
import * as React from 'react';

import {
    Grid, Card, CardContent,
    CardActionArea, Typography, CardActions,
} from "@mui/material";


function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};
export default function InvestorsComp(props) {

    const profilesArr = [
        {id: 1, name: 'Alessio Carachino', description: 'Since 2 years', followed: true,
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents',},
        {id: 2, name: 'Lorenzo Carachino', description: 'Since 3 years', followed: false,
        content: 'Use Dollar-Cost Averaging to Build Wealth Over Time',},
    ]

    const [profilesState, setProfilesState] = useState(profilesArr)
    const [followed, setFollowed] = React.useState(false)
    const navigate=useNavigate();

    const setFollowing = (i) => {
        let newProfilesState = [...profilesState]
        newProfilesState[i.id-1].followed = !newProfilesState[i.id-1].followed
        setProfilesState((newProfilesState) => [...newProfilesState])
    }

    const showProfile = (i) => {
        navigate('/Investors/Profile',{state: i});
    }

    return (
        <>
        <Grid container fluid>
            <Row>
                <Col>
                    <Grid>
                        <Button onClick={() => navigate('/Investors')} variant={"outlined"}>Search</Button> &nbsp;&nbsp;
                        <Button onClick={() => navigate('/Investors/Tops')} variant={"outlined"}>Top Investors</Button> &nbsp;&nbsp;
                        <Button onClick={() => navigate('/Investors/Followed')} variant={"outlined"}>Followed</Button>
                    </Grid>

                    <Grid sx={{ borderRadius: '16px' }} display="flex" justifyContent="center" alignItems="center" style={{ padding: "7px", marginTop: "15px", marginBottom: "45px", backgroundColor: "#eee"}}>
                        <TextField fullWidth id="input-with-sx" label="Search" variant="standard" placeholder="Carachino_"/>
                        <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Grid>
                </Col>
            </Row>
        </Grid>

        <Grid container fluid>
            <Row>
                <Col>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                        {profilesState.map(i => (
                        <Grid key={i.id} item xs={6}>
                            <Card raised={true} style={{ padding: "10px", marginTop: "5px", marginBottom: "5px"}}>
                                <CardActionArea onClick={()=>showProfile(i)}>
                                    <CardContent variant={"outlined"}>
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
                                                    <IconButton onClick={() => setFollowing(i)} color={i.followed ? "primary" : ""} aria-label="favorite">
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
