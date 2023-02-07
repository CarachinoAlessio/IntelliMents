import React, {useState} from 'react';
import {Button} from "@mui/material";
import {Delete, Upload} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import LinearWithValueLabel from "./LinearProgressWithLabel";

const FileUploader = props => {
    const [fileIsUploaded, setFileIsUploaded] = useState(false)
    const uploadVideo = props.uploadVideo
    const [loading, setLoading] = useState(false)

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        uploadVideo(fileUploaded)
        setFileIsUploaded(true)
        setLoading(true)
    };

    const handleDelete = () => {
        uploadVideo(undefined)
        setFileIsUploaded(false)
        setLoading(false)
    };

    return (
        <>
            {!loading && !fileIsUploaded ? <ListItemText id="switch-list-label-wifi" primary="No video presentation uploaded" /> :
                (!loading && fileIsUploaded ? <ListItemText id="switch-list-label-wifi" primary="Video uploaded! (42MB)" /> : <ListItemText id="switch-list-label-wifi" primary="Video uploading..." />)
            }

            {
                !loading && !fileIsUploaded ?
                    <Button onClick={handleClick} size={"large"} startIcon={<Upload></Upload>}
                            variant={"text"}>Upload video</Button>
                    :
                    (!loading && fileIsUploaded ? <Button color={"error"} onClick={handleDelete} size={"large"} startIcon={<Delete></Delete>}
                                                          variant={"text"}>Delete video</Button> : <LinearWithValueLabel setLoading={setLoading}></LinearWithValueLabel>)

            }

            <input type="file"
                   ref={hiddenFileInput}
                   accept={"video/mp4"}
                   onChange={handleChange}
                   style={{display:'none'}}
            />
        </>
    );
};
export default FileUploader;