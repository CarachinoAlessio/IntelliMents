import Container from '@mui/material/Container';
import Row from '@mui/material/Container';
import Col from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import {Box, Button} from "@mui/material";

const styleObj = {
    paddingTop: "50px",
    alignItems: 'center',
}

export default function ContactComp(props) {

    return (
        <Container fluid="lg">
            <Row>
                <Col>
                <p style={styleObj}>Mobile phone: +123456789</p>

                <p>Our live chat is now: <b>closed</b></p>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Button style={{marginTop: "20px"}} variant="contained" color="primary" size='large'>Chat with us</Button>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" style={{padding: "20px", margin: "30px", backgroundColor: "#eee"}} sx={{ border: 1, borderRadius: '16px' }}>
                
                <form style = {{marginTop: "20px"}}>
                    <p><b>Send us an email</b></p>
                    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                    <div>
                        <TextField
                        id="filled-multiline-flexible"
                        label="Email"
                        multiline
                        maxRows={4}
                        variant="filled"
                        />
                        <TextField
                        id="filled-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue="Your message"
                        variant="filled"
                        />
                    </div>
                    </Box>

                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Button style={{marginTop: "20px"}} variant="contained" color="primary" size='large'>Submit</Button>
                    </Box>
                </form>
                </Box>

                </Col>
            </Row>
        </Container>
    );
}

export {ContactComp}
