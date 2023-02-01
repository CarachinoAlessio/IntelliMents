import {
    Box,
    Button,
    Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider, Grid, Stack,
    Switch,
    Typography
} from "@mui/material";
import {
    Add,
    Bookmark,
    Favorite,
    FilterList,
    Folder,
    Info,
    RateReview,
    Search,
    Share,
    StarRate
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {useLocation} from 'react-router-dom';
import {Rating} from "@mui/lab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

/**
 * To use props refer to this:
 *  titolo:i.title,
    id: i.id,
    body:i.body,
    img:i.img,
    views:i.views,
    likes:i.likes,
    liked: i.liked,
    width: i.width
 */
export default function StoryContentComp(props) {
    const navigate=useNavigate();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const location = useLocation();
    const story = location.state
    const asset = story.asset
    const content = story.content
    console.log(content)
    return (
            <Grid container spacing={0.5} style={{paddingTop:30}}>
                <Grid xs={8}>
                    <IconButton aria-label="account" onClick={() => navigate(-1)}>
                        <ArrowBackIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                    <h2>{story.title}</h2>
                    <br></br>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={3}
                    >
                        {asset.map((element,index) => (
                            <Chip label={element} variant="outlined" />
                        ) )}
                        <Grid2
                            xs={12}
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            sx={{ fontSize: '12px' }}
                        >
                            <Grid2 sx={{ order: { xs: 2, sm: 1 } }}>
                            </Grid2>
                            <Grid2 container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                                <Grid2>
                                    <Button  onClick={handleClickOpen} variant={"outlined"} startIcon={<StarRate></StarRate>}>Rate</Button>                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Stack>
                    <br></br>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Make you count!"}
                        </DialogTitle>
                        <DialogContent style={{maxWidth:1000}}>
                            <DialogContentText id="alert-dialog-description">
                                <Grid container>
                                    <Grid xs={9}>
                                        <Typography variant={"body2"}>Do you like this story?</Typography>
                                    </Grid>
                                    <Grid xs={3}>
                                        <Rating name="half-rating" defaultValue={0} />
                                    </Grid>
                                </Grid>
                                <br /><br />
                                <Grid container>
                                    <Grid xs={9}>
                                        <Typography variant={"body2"}>How likely are you to recommend this story to your friends?</Typography>
                                    </Grid>
                                    <Grid xs={3}>
                                        <Rating name="half-rating" defaultValue={0} />
                                    </Grid>
                                </Grid>
                                <br /><br />
                                <Grid container>
                                    <Grid xs={9}>
                                        <Typography variant={"body2"}>How likely are you ++ +++++++++?</Typography>
                                    </Grid>
                                    <Grid xs={3}>
                                        <Rating name="half-rating" defaultValue={0} />
                                    </Grid>
                                </Grid>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button  onClick={handleClose}>SEND</Button>
                        </DialogActions>
                    </Dialog>
                    <hr className="solid"></hr>
                    <br></br>
                    <Box
                        component="img"
                        sx={{
                            height: 450,
                            width: "100%" ,
                        }}
                        alt="The house from the offer."
                        src="./static/images/news/cover_1.jpg"
                    />
                    {content.map((element, index) => (
                        element.type === "Subtitle" ? <Typography variant={"h4"} key={index}>{element.content}</Typography>
                        : <Typography key={index} variant={"paragraph"}>{element.content}</Typography>

                    ))}

                </Grid>
                <Grid style={{marginLeft:0}} item xs>
                    <Divider orientation="vertical"></Divider>
                </Grid>
                <Grid xs={3}  style={{paddingLeft:100}} justifyContent="center" alignItems="center">
                    <Typography variant={"h5"}>Last Stories & News</Typography>
                    <br></br>
                    <Stack
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={4}
                    >
                    {/*<Card sx={{ minWidth: 275 }}>
                        <CardActionArea >
                            <CardHeader
                                title={<CardActions disableSpacing>
                                    Test
                                </CardActions>}

                            />
                            <CardContent>
                                <Typography variant="body6" color="text.secondary">
Test                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ float:'right'}}>
                            <IconButton aria-label="chart" >
                                <Bookmark />
                            </IconButton>
                        </CardActions>
                    </Card>*/}
                    {/*<Card sx={{ minWidth: 275 }}>
                        <CardActionArea >
                            <CardHeader
                                title={<CardActions disableSpacing>
                                    Test
                                </CardActions>}

                            />
                            <CardContent>
                                <Typography variant="body6" color="text.secondary">
                                    Test                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ float:'right'}}>
                            <IconButton aria-label="chart" >
                                <Bookmark />
                            </IconButton>
                        </CardActions>
                    </Card>*/}
                        <Card variant="outlined" sx={{ minWidth: 350 }} >
                            <CardContent>
                                <Grid container spacing={0}>
                                    <Grid xs={10}>
                                        <Typography variant="h5" component="div">
                                            Story
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
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card variant="outlined" sx={{ minWidth: 350 }} >
                            <CardContent>
                                <Grid container spacing={0}>
                                    <Grid xs={10}>
                                        <Typography variant="h5" component="div">
                                            News
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
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>

            </Grid>
    );
}



export {StoryContentComp}
