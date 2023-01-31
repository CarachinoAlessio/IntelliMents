import {
    Button,
    Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider, Grid,
    Switch,
    Typography
} from "@mui/material";
import {Add, Bookmark, Favorite, FilterList, Folder, Info, Search, Share} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {StoryContentComp} from "./StoryContentComp";
import { Link } from 'react-router-dom';
import * as PropTypes from "prop-types";
import Row from "@mui/material/Container";
import Col from "@mui/material/Container";
import ShowChartIcon from "@mui/icons-material/ShowChart";

function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};
export default function StoriesComp(props) {
    
    const stories = [
        {id: 1, title: 'AI', description:'I lost $2000 in two days.\n' +
                'Please avoid these mistakes', content: [{
                type: 'Subtitle',
                content: 'Lorem Ipsum',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }, {
                type: 'Paragraph',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }], asset: ['JUVE.MI', 'APL'], views: 213, likes: 90, liked: true, width: 6, isAI: true},
        {id: 2, title: 'HUMAN', body:'After 3 years, I jumped from $-100 to $+800! \n' +
                'Learn when you should sell', content: [{
                type: 'Subtitle',
                content: 'Lorem Ipsum',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }, {
                type: 'Paragraph',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }, {
                type: 'Subtitle',
                content: 'Lorem Ipsum',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }, {
                type: 'Paragraph',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }],
            asset: ['ETH', 'APL'],views: 132, likes: 90, liked: true, width: 3, isAI: false},
        {id: 3, title: 'HUMAN', body:'I lost $2000 in two days.\n' +
                'Please avoid these mistakes', asset: ['APL'],views: 687, likes: 90, liked: true, width: 3, isAI: false},
        {id: 4, title: 'AI', body:'I lost $2000 in two days.\n' +
                'Please avoid these mistakes', asset: ['ETH', 'BTC'],views: 234, likes: 90, liked: true, width: 3, isAI: true},
    ]

    const [open, setOpen] = useState(false);
    const [storiesState, setStoriesState] = useState(stories);
    const [includeAIstories, setIncludeAIstories] = useState(true)
    const navigate=useNavigate();
    const setFavourite = (i) => {
        let newNews = [...storiesState]
        newNews[i.id-1].liked = !newNews[i.id-1].liked
        setStoriesState((newNews) => [...newNews])
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }; 

    const showStory = (i) => {
        navigate('/watchStory',{state: i});
    }
//onClick={()=>watchStory(this.id,this.title,this.body,this.img,this.views,this.likes,this.liked,this.width)}
    return (
        <>
            <Grid2 container spacing={0}>
                <Grid2 item xs={2}>
                    <Button onClick={() => navigate('/createStory')} variant={"outlined"} startIcon={<Add></Add>}>Create a story</Button>
                </Grid2>
                <Grid2 item xsOffset={8} xs={2} display={"flex"} justifyContent={"end"} alignItems={"end"}>
                    <Button onClick={()=>navigate('/myStories')} variant={"outlined"} startIcon={<Folder></Folder>}>My stories</Button>
                </Grid2>
            </Grid2>
            <div style={{paddingTop: '30px'}}></div>
            <Divider></Divider>
            <Typography align="center" variant="h2">Discover Stories we think you would like</Typography>
            <div style={{paddingTop: '30px'}}></div>

            <Grid2 container spacing={0}>
                <Grid2 xs={3}></Grid2>
                <Grid2 display={"flex"} justifyContent={"center"} alignItems={"center"} xs={6}>
                    <Button variant={"outlined"} startIcon={<FilterList></FilterList>}>Filter by</Button>
                    <div style={{paddingRight: '15px'}}></div>
                    <Button variant={"outlined"} startIcon={<Search></Search>}>Search</Button>
                    <div style={{paddingRight: '15px'}}></div>
                    <Button onClick={handleClickOpen} variant={"outlined"} startIcon={<Info></Info>}>Include AI stories<Switch checked={includeAIstories} onChange={()=>setIncludeAIstories(() => !includeAIstories)} size={"small"}></Switch></Button>
                </Grid2>
                <Grid2 xs={3}></Grid2>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"AI Stories"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Choose whether to include AI-generated stories.
                            <br /><br />
                            Those stories are generated by analyzing plenty of investments made by people like you.
                            <br /><br />
                            The more you invest, the more you can learn.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Got it!</Button>
                    </DialogActions>
                </Dialog>
            </Grid2>
            <div style={{paddingTop: '30px'}}></div>
            <Grid container spacing={4} style={{paddingBottom: '50px'}} columnSpacing={{ xs: 3, sm: 4, md: 5 }}>
                {storiesState.filter((story) =>
                    (includeAIstories) || (!includeAIstories && !story.isAI)
                ).map(i => (
                    <Grid  key={i.id} item xs={6}>
                        {/*<Card>
                            <CardActionArea onClick={()=>showStory(i)}>
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
                            </CardActions>
                        </Card>*/
                            <Card sx={{ minWidth: 275 }}>
                                <CardActionArea onClick={()=>showStory(i)}>
                                    <CardHeader
                                        title={<CardActions disableSpacing>
                                                {i.title}
                                        </CardActions>}

                                        />
                                <CardContent>
                                    <Typography variant="body6" color="text.secondary">
                                        {i.body}
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions style={{ float:'right'}}>
                                    <IconButton aria-label="chart" >
                                        <Bookmark />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        }
                    </Grid>
                ))}
            </Grid>

        </>
    );
}


export {StoriesComp}
