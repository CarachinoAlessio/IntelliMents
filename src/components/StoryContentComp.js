import {
    Button,
    Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia,
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
            <Grid container spacing={2} style={{paddingTop:30}}>
                <Grid xs={9}>
                    <h2>{story.title}</h2>
                    <br></br>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={3}
                    >
                        {asset.map((element,index) => (
                            <Typography key={index} variant={"h5"}>{element}</Typography>
                        ) )}
                        <Button onClick={handleClickOpen} variant={"outlined"} startIcon={<StarRate></StarRate>}>Rate</Button>
                    </Stack>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Make you count!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Do you like this story?<Button startIcon={<Rating></Rating>}></Button>
                                <br /><br />
                                How likely are you to recommend this story to your friends?<Button startIcon={<Rating></Rating>}></Button>
                                <br /><br />
                                How likely are you ++ +++++++++?<Button startIcon={<Rating></Rating>}></Button>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button  onClick={handleClose}>SEND</Button>
                        </DialogActions>
                    </Dialog>
                    <hr className="solid"></hr>
                    {content.map((element, index) => (
                        element.type === "Subtitle" ? <Typography variant={"h4"} key={index}>{element.content}</Typography>
                        : <Typography key={index} variant={"paragraph"}>{element.content}</Typography>

                    ))}
                </Grid>
                <Grid xs={3}>
                    <Typography variant={"h5"}>Last Stories & News</Typography>
                    <Card sx={{ minWidth: 275 }}>
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
                    </Card>
                </Grid>

            </Grid>
    );
}



export {StoryContentComp}
