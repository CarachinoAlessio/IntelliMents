import React from 'react';
import {Button} from "@mui/material";
import {Add} from "@mui/icons-material";

const FileUploader = props => {
    const addMedia = props.addMedia
    const up = props.up
    const index = props.index
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        addMedia(index, up, fileUploaded)
    };
    return (
        <>
            <Button startIcon={<Add></Add>} size={"small"} variant="outlined" onClick={handleClick}>
                Add Media
            </Button>
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