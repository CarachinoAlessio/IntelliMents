import {
    Box,
    Button,
    Card, CardActionArea, CardActions, CardContent, Chip,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider, FormControl, FormControlLabel, FormLabel, Grid, ListItem, ListSubheader, Popper, Radio, RadioGroup,
    Switch, Tooltip,
    Typography
} from "@mui/material";
import {
    Add,
    Bookmark,
    FilterList,
    Folder,
    Info,
    Search,
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import * as React from 'react';
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {StoryContentComp} from "./StoryContentComp";
import * as PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};
export default function StoriesComp(props) {

    const stories = [
        {
            id: 1,
            title: 'You have to be better than me',
            body: 'I lost $2000 in two days.\n' +
                'Please avoid these mistakes',
            content: [{
                type: 'Subtitle',
                content: 'The Secret to Financial Freedom Is Investing Over Time\n',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }, {
                type: 'Paragraph',
                content: 'Jack\'s earnings will grow so large, they\'ll exceed all of his contributions combined. After 20 years of investing, Jack contributed $48,000 total. That same year, his $48,000 earned over $56,000. By year 25, his earnings ($103,000) are over 70 percent larger than his total contributions ($60,000).\n' +
                    '\n' +
                    'This is why time is so important in investing: Given enough time, your earnings can compound to take on a life of their own. Even better is they can become self-sustainable. When your money is earning enough money that you no longer need to work, you\'ve achieved financial independence.',
                show_buttons: false,
                image: './static/images/story/graph_story.png',
                alignment: 'left',
                formats: []
            }],
            asset: ['JUVE.MI', 'APL'],
            by: '',
            generateDate: '17 hours ago',
            generate: 'AI',
            views: 213,
            likes: 90,
            liked: true,
            bookMark: false,
            width: 6,
            isAI: true,
            review: '80%'
        },
        {
            id: 2,
            title: 'Gain over time',
            body: 'Dollar-cost averaging is a simple technique that entails investing a fixed amount of money in the same fund or stock at regular intervals over a long period of time.',
            content: [{
                type: 'Subtitle',
                content: 'Use Dollar-Cost Averaging to Build Wealth Over Time',
                show_buttons: false,
                alignment: 'left',
                formats: []
            }, {
                type: 'Paragraph',
                content: 'Dollar-cost averaging is a simple technique that entails investing a fixed amount of money in the same fund or stock at regular intervals over a long period of time.\n' +
                    '\n' +
                    'If you have a 401(k) retirement plan, you\'re already using this strategy.\n' +
                    '\n' +
                    'Make no mistake, dollar-cost averaging is a strategy, and it\'s one that can get results that are as good or better than aiming to buy low and sell high. As many experts will tell you, nobody can time the market.',
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
            asset: ['ETH', 'APL'],
            by: 'Mario Rossi',
            generateDate: '20 minutes ago',
            generate: 'Mario Rossi',
            views: 132,
            likes: 90,
            liked: true,
            bookMark: true,
            width: 3,
            isAI: false,
            review: '55%'
        },
        {
            id: 3,
            title: "This is the right pattern to start",
            body: 'I lost $2000 in two days.\n' +
                'Please avoid these mistakes',
            asset: ['APL'],
            by: 'Lorenzo Santo',
            generateDate: '2 days ago',
            generate: 'Lorenzo Santo',
            views: 687,
            likes: 90,
            liked: true,
            bookMark: false,
            width: 3,
            isAI: false,
            review: '80%'
        },
        {
            id: 4,
            title: 'Learn from my mistakes',
            body: 'Nobody\'s perfect. We are all going to have our wins and losses, especially when it comes to investing. But some of the mistakes you might make when trading stocks are actually pretty common and by no means reserved exclusively for [...]'
            ,
            asset: ['ETH', 'BTC'],
            by: '',
            generateDate: '3 hours ago',
            generate: 'AI',
            views: 234,
            likes: 90,
            liked: true,
            bookMark: true,
            width: 3,
            isAI: true,
            review: '85%'
        },
    ]

    const [open, setOpen] = useState(false);

    //const [includeAIstories, setIncludeAIstories] = useState(true)
    const [bookMark, setBookMark] = React.useState(false)
    const [selected, setSelected] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openFilter = Boolean(anchorEl)
    const [filters, setFilters] = useState({AIstories: true, authors: [], assets: []})
    const [sortBy, setSortBy] = useState('Release date')
    const [orderType, setOrderType] = useState('Descending')

    const id = openFilter ? 'simple-popper' : undefined;
    const navigate = useNavigate();

    const filterAndSortStories = (stories) => {
        const assetIsCompatible = (verifyThisAssets) => {
            for (let i in verifyThisAssets){
                if (verifyThisAssets[i] in filters.assets)
                    return true
            }
            return false
        }
        const authorIsCompatible = (verifyThisAuthor) => {
            if (verifyThisAuthor in filters.authors)
                return true
            else return false
        }
        let result = []
        for (let i in stories){
            let story = stories[i]
            if (
                (filters.AIstories || (!story.isAI && !filters.AIstories))
                &&
                (filters.assets.length === 0 || assetIsCompatible(story.asset))
                &&
                (filters.authors.length === 0 || authorIsCompatible(story.by))
            ){
                result.push(story)
            }
        }
        if (sortBy === 'Title'){
            result.sort((a,b) => {
                if (a.title < b.title)
                    return -1
                else
                    return 1
            })
        }
        else {
            result.sort((a,b) => {
                if (a.title < b.title)
                    return -1
                else
                    return 1
            })
        }
        if (orderType === 'Descending'){
            result = result.reverse()
        }

        return result
    };
    const [storiesState, setStoriesState] = useState(filterAndSortStories(stories));
    const handleOpenFilter = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const setFavourite = (i) => {
        let newStoriesState = [...storiesState]
        newStoriesState[i.id - 1].bookMark = !newStoriesState[i.id - 1].bookMark
        setStoriesState((newStoriesState) => [...newStoriesState])
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showStory = (i) => {
        navigate('/watchStory', {state: i});
    }
//onClick={()=>watchStory(this.id,this.title,this.body,this.img,this.views,this.likes,this.liked,this.width)}
    return (
        <>
            <Grid2 container spacing={0} style={{paddingTop: 10}}>
                <Grid2 item xs={2}>
                    <Button onClick={() => navigate('/createStory')} variant={"outlined"} startIcon={<Add></Add>}>Create
                        a story</Button>
                </Grid2>
                <Grid2 item xsOffset={8} xs={2} display={"flex"} justifyContent={"end"} alignItems={"end"}>
                    <Button onClick={() => navigate('/myStories')} variant={"outlined"} startIcon={<Folder></Folder>}>My
                        stories</Button>
                </Grid2>
            </Grid2>
            <div style={{paddingTop: '30px'}}></div>
            <Divider></Divider>
            <Typography align="center" variant="h2">Discover Stories we think you would like</Typography>
            <Typography align="center" fontSize={28} variant="body1">Learn something new from other people</Typography>
            <div style={{paddingTop: '30px'}}></div>

            <Grid2 container spacing={0}>
                <Grid2 xs={3}></Grid2>
                <Grid2 display={"flex"} justifyContent={"center"} alignItems={"center"} xs={6}>
                    <div>
                        <Button aria-describedby={id} onClick={handleOpenFilter} variant={"outlined"} startIcon={<FilterList></FilterList>}>Filter & Sort</Button>
                        <Popper id={id} open={openFilter} anchorEl={anchorEl}>
                            <Card raised={true} sx={{ minWidth: 350 }}>
                                <CardContent>
                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                        subheader={<ListSubheader>Filter by</ListSubheader>}
                                    >
                                        <ListItem>
                                            <ListItemText id="switch-list-label-wifi" primary="Include AI Stories" />
                                            <Switch
                                                edge="end"
                                                checked={filters.AIstories}
                                                onClick={() => setFilters((old) => {return {...old, AIstories: !old.AIstories}})}
                                                inputProps={{
                                                    'aria-labelledby': 'switch-list-label-wifi',
                                                }}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText id="switch-list-label-wifi" primary="Author" />
                                            <Switch
                                                edge="end"
                                                //onChange={handleToggle('wifi')}
                                                //checked={checked.indexOf('wifi') !== -1}
                                                inputProps={{
                                                    'aria-labelledby': 'switch-list-label-wifi',
                                                }}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText id="switch-list-label-bluetooth" primary="Asset" />
                                            <Switch
                                                edge="end"
                                                //onChange={handleToggle('bluetooth')}
                                                //checked={checked.indexOf('bluetooth') !== -1}
                                                inputProps={{
                                                    'aria-labelledby': 'switch-list-label-bluetooth',
                                                }}
                                            />
                                        </ListItem>
                                    </List>
                                    <Divider></Divider>
                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                        subheader={<ListSubheader>Sort by</ListSubheader>}
                                    >
                                        <ListItem>


                                            <ListItemText id="switch-list-label-wifi" primary="Release date" />
                                            <Radio
                                                edge="end"
                                                onClick={() => setSortBy("Release date")}
                                                checked={sortBy === "Release date"}
                                                inputProps={{
                                                    'aria-labelledby': 'switch-list-label-wifi',
                                                }}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText id="switch-list-label-bluetooth" primary="Title" />
                                            <Radio
                                                edge="end"
                                                onClick={() => setSortBy("Title")}
                                                checked={sortBy === "Title"}
                                                inputProps={{
                                                    'aria-labelledby': 'switch-list-label-bluetooth',
                                                }}
                                            />
                                        </ListItem>
                                    </List>



                                    <Divider></Divider>
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
                                    <Box style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}><Button size="medium" variant={'contained'} onClick={() => {setAnchorEl(null); setStoriesState(filterAndSortStories(stories))}}>Apply changes</Button></Box>

                                </CardContent>

                            </Card>
                        </Popper>
                    </div>

                    <div style={{paddingRight: '15px'}}></div>
                    <Button variant={"outlined"} startIcon={<Search></Search>}>Search</Button>
                    <div style={{paddingRight: '15px'}}></div>
                    {/*<Button onClick={(e) => {e.preventDefault()}} variant={"outlined"} startIcon={<Info onClick={handleClickOpen}></Info>}>Include AI
                        stories<Switch checked={includeAIstories}
                                       onClick={() => setIncludeAIstories(() => !includeAIstories)}
                                       size={"small"}></Switch></Button>*/}
                    <Button onClick={handleClickOpen} variant={"outlined"} startIcon={<Info></Info>}>About AI Stories</Button>
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
                            <br/><br/>
                            Those stories are generated by analyzing plenty of investments made by people like you.
                            <br/><br/>
                            The more you invest, the more you can learn.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Got it!</Button>
                    </DialogActions>
                </Dialog>
            </Grid2>
            <div style={{paddingTop: '30px'}}></div>
            <Grid container spacing={4} style={{paddingBottom: '50px'}} columnSpacing={{xs: 3, sm: 4, md: 5}}>
                {storiesState.map(i => (
                    <Grid key={i.id} item xs={6}>
                        <Card variant="outlined" sx={{minWidth: 350}}>
                            <CardActionArea onClick={() => showStory(i)}>
                                <CardContent>
                                    <Grid2 container spacing={0}>
                                        <Grid2 item xs={9}>
                                            <Typography variant="h4" component="div">
                                                {i.title}
                                            </Typography>
                                        </Grid2>

                                        <Grid2 item xsOffset={1} xs={2} display={"flex"} justifyContent={"end"}
                                               alignItems={"end"}>
                                            {i.asset.map((element, index) => (
                                                <><Chip label={element} variant="outlined"/>
                                                    <div>&nbsp;</div>
                                                </>
                                            ))}
                                        </Grid2>
                                    </Grid2>
                                    <Typography variant="subtitle2">Written by: {i.generate}</Typography>
                                    <br></br>
                                    <Divider/>
                                    <br></br>
                                    <Typography variant="h6" sx={{minHeight: '100px', maxHeight: '100px'}}>
                                        "{i.body}"
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Grid2 container spacing={0} style={{paddingLeft:25}}>
                                <Grid2 item xs={9}>
                                    <Typography variant="body2">Published: {i.generateDate}</Typography>
                                </Grid2>
                                <Grid2 item xsOffset={1} xs={2} display={"flex"} justifyContent={"end"} alignItems={"end"}>
                                    <CardActions style={{ float:'right'}}>
                                        <Tooltip title={'Add to favourites'}>
                                            <IconButton onClick={() => setFavourite(i)} color={i.bookMark ? "primary" : ""} aria-label="like">
                                                <Bookmark sx={{fontSize: 30}} />
                                            </IconButton>
                                        </Tooltip>
                                    </CardActions>
                                </Grid2>
                            </Grid2>

                        </Card>
                    </Grid>
                ))}
            </Grid>

        </>
    );
}


export {StoriesComp}

// <Grid2 item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
//     <Tooltip title="Approval Rating">
//         <ReviewsOutlined>
//         </ReviewsOutlined>
//     </Tooltip>
//     <div>&nbsp;</div>
//     <Typography variant="subtitle1">{i.review}</Typography>
// </Grid2>
// <Grid2 item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
//     <Tooltip title="Video available">
//         <VoiceChatOutlined>
//         </VoiceChatOutlined>
//     </Tooltip>
// </Grid2>
