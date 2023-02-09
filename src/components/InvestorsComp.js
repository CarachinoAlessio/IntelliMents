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
import {FilterList} from "@mui/icons-material";
import {
    Box,
    Card, CardActionArea, CardActions, CardContent, Chip,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider, FormControl, FormControlLabel, FormLabel, Grid, ListItem, ListSubheader, Popper, Radio, RadioGroup,
    Switch, Tooltip,
    Typography
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import {
//     Grid, Card, CardContent,
//     CardActionArea, Typography, CardActions,
// } from "@mui/material";


function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};
export default function InvestorsComp(props) {

    const handleOpenSearch = (event) => {
        setAnchorEl(null);
        setAnchorSearch(anchorSearch ? null : event.currentTarget)
    }

    const profilesArr = [
        {id: 1, 
        name: 'Alessio Carachino', 
        description: 'Since 2 years he has been able to gain a huge amount of experience', 
        followed: true,
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents',
        position: "1"
        },
        
        {id: 2, 
        name: 'Lorenzo Santo', 
        description: 'Since 3 years he has been trying harder to became one of the best', 
        followed: false,
        content: 'Use Dollar-Cost Averaging to Build Wealth Over Time',
        position: "2"
        },
    ]

    const [profilesState, setProfilesState] = useState(profilesArr)
    const [followed, setFollowed] = React.useState(false)
    const navigate=useNavigate();

    //sort by 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openFilter = Boolean(anchorEl)
    const id = openFilter ? 'simple-popper' : undefined;
    const [orderType, setOrderType] = useState('Descending')
    
    const filterAndSortAuthors = (profilesArr) => {

        let result = []
        for (let i in profilesArr){
            let auths = profilesArr[i]
            result.push(auths)
        }
        if (orderType === 'Ascending') {
            result.sort((a,b) => {
                if (a.name < b.name)
                    return -1
                else
                    return 1
            })
        }
        if (orderType === 'Descending'){
            result = result.reverse()
        }
        //console.log(result)
        return result
    }
    const [investorsState, setInvestorsState] = useState(profilesArr);



    //end of sort by function

        //search
        const [anchorSearch, setAnchorSearch] = useState(null)
        const openSearch = Boolean(anchorSearch)
    
            const handleOpenFilter = (event) => {
                setAnchorEl(anchorEl ? null : event.currentTarget);
            };
            const idSearch = openSearch ? 'simple-popper' : undefined;

    const setFollowing = (i) => {
        let newProfilesState = [...investorsState]
        newProfilesState[i.id-1].followed = !newProfilesState[i.id-1].followed
        setInvestorsState((newProfilesState) => [...newProfilesState])
    }

    const showProfile = (i) => {
        navigate('/Investors/Profile',{state: i});
    }


    return (
        <>
        <Grid container fluid>
            <Row>
                <Col>
                    <Grid style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'}}>
                    <Button aria-describedby={idSearch} onClick={handleOpenSearch} variant={"outlined"} startIcon={<Search></Search>}>Search</Button>&nbsp;&nbsp;
                    <Popper id={idSearch} open={openSearch} anchorEl={anchorSearch}>
                        <Card raised={true} sx={{minWidth: 450}}>
                            <CardContent>
                                <Box style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <TextField style={{width: '80%'}} id="outlined-basic" placeholder='Enter key words' variant="outlined" />
                                </Box>
                                <div style={{paddingTop: '32px'}}></div>
                                <Box style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Button size="medium" variant={'contained'} onClick={() => {
                                    setAnchorSearch(null);
                                    //setStoriesState(searchStoriesByKeywords(stories))
                                }}>Apply changes</Button></Box>
                            </CardContent>
                        </Card>
                    </Popper>
                        <Button onClick={() => navigate('/Investors/Tops')} variant={"outlined"} startIcon={<LeaderboardIcon></LeaderboardIcon>}>Top Investors</Button> &nbsp;&nbsp;
                        <Button onClick={() => navigate('/Investors/Followed')} variant={"outlined"} startIcon={<FavoriteIcon></FavoriteIcon>}>Followed</Button> &nbsp;&nbsp;
                        <Button aria-describedby={id} onClick={handleOpenFilter} variant={"outlined"} startIcon={<FilterList></FilterList>}>Sort by</Button>
                        <Popper id={id} open={openFilter} anchorEl={anchorEl}>
                            <Card raised={true} sx={{ minWidth: 350 }}>
                                <CardContent>
                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                        subheader={<ListSubheader>Order type</ListSubheader>}
                                    >
                                        <ListItem>


                                            <ListItemText id="switch-list-label-wifi" primary="Ascending" />
                                            <Radio
                                                edge="end"
                                                onClick={() => setOrderType("Ascending")}
                                                checked={orderType === "Ascending"}
                                                inputProps={{
                                                    'aria-labelledby': 'switch-list-label-wifi',
                                                }}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText id="switch-list-label-bluetooth" primary="Descending" />
                                            <Radio
                                                edge="end"
                                                onClick={() => setOrderType("Descending")}
                                                checked={orderType === "Descending"}
                                                inputProps={{
                                                    'aria-labelledby': 'switch-list-label-bluetooth',
                                                }}
                                            />
                                        </ListItem>
                                    </List>
                                    <Divider></Divider>
                                    <div style={{paddingTop:'32px'}}></div>
                                    <Box style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}><Button size="medium" variant={'contained'} onClick={() => {setAnchorEl(null); setInvestorsState(filterAndSortAuthors(profilesArr))}}>Apply changes</Button></Box>

                                </CardContent>

                            </Card>
                        </Popper>
                    </Grid>
                </Col>
            </Row>
        </Grid>
        <br></br>
        <Grid container fluid>
            <Row>
                <Col>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                        {investorsState.map(i => (
                        <Grid key={i.id} item xs={6}>
                            <Card raised={true} style={{ padding: "10px", marginTop: "5px", marginBottom: "5px"}}>
                                <CardActionArea onClick={()=>showProfile(i)}>
                                    <CardContent variant={"outlined"}>
                                        <Typography variant="h3" component="div">
                                        <Grid aria-label="chart">
                                            {i.position==="1"? <Tooltip title="Position"><Filter1Icon></Filter1Icon></Tooltip> : <Tooltip title="Position"><Filter2Icon></Filter2Icon></Tooltip>}
                                                            <Tooltip title="Position"><LeaderboardIcon>
                                                            </LeaderboardIcon></Tooltip>&nbsp;&nbsp;{i.name}
                                                    </Grid>
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {i.description}
                                        </Typography>
                                    </CardContent>
                                        <CardActions>
                                            

                                        </CardActions>
                                        <Divider></Divider>
                                        
                                </CardActionArea>
                                <Grid container>
                                                <Grid item xs={8}></Grid>
                                                <Grid item xs={4} display={"flex"} justifyContent={"right"} alignItems={"center"}>
                                                    
                                                    <IconButton onClick={() => setFollowing(i)} color={i.followed ? "primary" : ""} aria-label="favorite" >
                                                    <Tooltip title="Follow"><FavoriteIcon variant="contained"/>
                                                    </Tooltip>
                                                    </IconButton>
                                                    
                                                </Grid>
                                            </Grid>
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
