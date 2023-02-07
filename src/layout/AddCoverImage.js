import React, {useState} from 'react';
import {Button} from "@mui/material";
import {Delete, Upload} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import LinearWithValueLabel from "./LinearProgressWithLabel";

const FileUploader = props => {
    const [fileIsUploaded, setFileIsUploaded] = useState(false)
    const uploadCoverImage = props.uploadCoverImage
    const [loading, setLoading] = useState(false)

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        uploadCoverImage(fileUploaded)
        setFileIsUploaded(true)
        setLoading(true)
    };

    const handleDelete = () => {
        uploadCoverImage(undefined)
        setFileIsUploaded(false)
        setLoading(false)
    };

    return (
        <>
            {!loading && !fileIsUploaded ? <ListItemText id="switch-list-label-wifi" primary="No cover uploaded" /> :
                (!loading && fileIsUploaded ? <ListItemText id="switch-list-label-wifi" primary="Cover uploaded! (321kB)" /> : <ListItemText id="switch-list-label-wifi" primary="Cover uploading..." />)
             }

            {
                !loading && !fileIsUploaded ?
                <Button onClick={handleClick} size={"large"} startIcon={<Upload></Upload>}
                    variant={"text"}>Upload cover</Button>
                :
                    (!loading && fileIsUploaded ? <Button color={"error"} onClick={handleDelete} size={"large"} startIcon={<Delete></Delete>}
                                                          variant={"text"}>Delete cover</Button> : <LinearWithValueLabel setLoading={setLoading}></LinearWithValueLabel>)

            }

            <input type="file"
                   ref={hiddenFileInput}
                   accept={"image/png, image/gif, image/jpeg"}
                   onChange={handleChange}
                   style={{display:'none'}}
            />
        </>
    );
};
export default FileUploader;