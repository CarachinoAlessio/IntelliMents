import {
    Button,
    Card, CardActionArea, CardActions, CardContent, CardMedia, Chip,
    Divider, Grid,
    Typography
} from "@mui/material";
import {Add, Favorite, FilterList, RemoveRedEyeOutlined, Search, Share} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
export default function MyStoriesComp(props) {
    const stories = [
        {id: 1, title: 'Story1', body:'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                'species, ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents except Antarctica with ranging across all continents', img:'cover_1', views: 213, likes: 90, liked: true, width: 6,state:"Pending amministrative review"},
        {id: 2, title: 'Story1', body:'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                'species, ranging across all continents except Antarctica with ranging across all continents except Antarctica', img:'cover_2', views: 132, likes: 90, liked: true, width: 6,state:"Published"},
        {id: 3, title: 'Story1', body:'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                'species, ranging across all continents except Antarctica with ranging across all continents except Antarctica', img:'cover_3', views: 687, likes: 90, liked: true, width: 6,state:"Published"},
    ]

    const [storiesState, setStoriesState] = useState(stories);
    const navigate=useNavigate();
    const setFavourite = (i) => {
        let newNews = [...storiesState]
        newNews[i.id-1].liked = !newNews[i.id-1].liked
        setStoriesState((newNews) => [...newNews])
    }

    return (
        <>
            <Grid2 container spacing={0}>
                <Grid2 item xs={2}>
                <Button onClick={() => navigate('/createStory')} variant={"outlined"} startIcon={<Add></Add>}>Create a story</Button>
                </Grid2>
            </Grid2>
            <div style={{paddingTop: '30px'}}></div>
            <Divider></Divider>
            <Typography align="center" variant="h2">My Stories</Typography>
            <div style={{paddingTop: '30px'}}></div>
            {/* Filter and search button -----  */}
            <Grid2 container spacing={0}>
                <Grid2 xs={3}></Grid2>
                <Grid2 display={"flex"} justifyContent={"center"} alignItems={"center"} xs={6}>
                    <Button variant={"outlined"} startIcon={<FilterList></FilterList>}>Filter by</Button>
                    <div style={{paddingRight: '15px'}}></div>
                    <Button variant={"outlined"} startIcon={<Search></Search>}>Search</Button>
                    <div style={{paddingRight: '15px'}}></div>
                </Grid2>
                <Grid2 xs={3}></Grid2>
            </Grid2>
            {/* ------ Filter and search button  */}

            {/* ------ Stories  */}
            <div style={{paddingTop: '30px'}}></div>
            <Grid container spacing={2} style={{paddingBottom: '50px'}}>
                {storiesState.map(i => (
                    <Grid  key={i.id} item xs={i.width}>
                        {/*<Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`./static/images/news/${i.img}.jpg`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {i.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {i.body}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions disableSpacing>
                                <Typography>{i.views} views - {i.likes} likes</Typography>
                                <IconButton onClick={() => setFavourite(i)} color={i.liked ? "primary" : ""} aria-label="like">
                                    <Favorite />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <Share />
                                </IconButton>
                                &nbsp;&nbsp;&nbsp;
                                    <IconButton aria-label="status">
                                        <InfoIcon /> 
                                    </IconButton>
                                    <Typography>{i.state}</Typography>
                            </CardActions>
                        </Card>*/}
                            <Card variant="outlined"  >
                                <CardContent>
                                    <Grid container >
                                        <Grid xs={9}>
                                            <Typography variant="h5" component="div">
                                                {i.state}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <RemoveRedEyeOutlined></RemoveRedEyeOutlined>
                                            <Typography variant="body1" component="div">
                                                {i.views}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Chip label="APL" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <br></br>
                                    <hr className="solid"></hr>
                                    <br></br>
                                    <Typography variant="body1">
                                        {i.body}
                                    </Typography>
                                </CardContent>
                            </Card>

                    </Grid>
                ))}
            </Grid>

        </>
    );
}


export {MyStoriesComp}
