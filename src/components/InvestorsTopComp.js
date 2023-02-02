import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import Button from '@mui/material/Button';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FilterList} from "@mui/icons-material";

import {
    Grid, Card, CardContent,
    CardActionArea, Typography, CardActions,
} from "@mui/material";


const profilesArr = [
    {id: 1, name: 'Hossein Javadi', description: 'Since 3 years'},
    {id: 2, name: 'Alessio Carachino', description: 'Since 2 years'},
    {id: 3, name: 'Lorenzo Santo', description: 'Since 3 years'},
    {id: 4, name: 'Francesco Di Gangi', description: 'Since 3 years'},
    ]


export default function InvestorsTopComp(props) {
    const navigate=useNavigate();

    const [profiles, setProfiles] = useState(profilesArr)

    return (
        <>
        <Grid container fluid>
            <Row>
                <Col>
                    <Grid>
                        <Button onClick={() => navigate('/Investors')} variant={"outlined"}>Search</Button> &nbsp;&nbsp;
                        <Button onClick={() => navigate('/Investors/Tops')} variant={"outlined"}>Top Investors</Button> &nbsp;&nbsp;
                        <Button onClick={() => navigate('/Investors/Followed')} variant={"outlined"}>Followed</Button> &nbsp;&nbsp;
                        <Button variant={"outlined"} startIcon={<FilterList></FilterList>}>Sort by</Button>
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
                                    <CardContent onClick={() => navigate('/Investors/Profile')} variant={"outlined"}>
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
export {InvestorsTopComp}
