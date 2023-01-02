import Container from '@mui/material/Container';
import Row from '@mui/material/Container';
import Col from '@mui/material/Container';

import {Box, Button} from "@mui/material";


const styleObj = {
    fontSize: 35,
    color: "#000",
    paddingTop: "50px",
    paddingBottom: "20px",
}

const styleObjBold = {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
    paddingTop: "30px",
}

export default function HelpComp(props) {

    return (
        <Container fluid="xl">
            <Row>
                <Col>
                <p style={styleObj}>FAQ</p>

                <p style={styleObjBold}>Question 1</p>
                <p><b>Answers:</b> Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica with ranging across all continents except Antarctica</p>

                <p style={styleObjBold}>Question 2</p>
                <p><b>Answers:</b> Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica with ranging across all continents except Antarctica</p>

                <p style={styleObjBold}>Question 3</p>
                <p><b>Answers:</b> Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica with ranging across all continents except Antarctica</p>
                </Col>

                <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
                    <Button style={{marginTop: "50px"}} variant="contained" color="primary" size='large' onClick={()=> window.location.href='/About/Contact'}>Contact us</Button>
                </Box>
            </Row>
        </Container>
    );
}

export {HelpComp}
