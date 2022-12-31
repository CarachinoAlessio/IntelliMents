import {
    Button,
    Card, CardActionArea, CardActions, CardContent, CardMedia,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider, Grid,
    Switch,
    Typography
} from "@mui/material";
import {Add, Favorite, FilterList, Folder, Info, Search, Share} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {useLocation} from 'react-router-dom';
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
    const location = useLocation();
    return (
        <>
        <h2>{location.state.titolo}</h2>
        </>
    );
}


export {StoryContentComp}
