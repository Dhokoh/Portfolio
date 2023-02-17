import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';

const Home = () => {
    return (
        <Container className=''>
            <Row className='homeTitleContainer'>
                <h1 className='homeTitle'>Welcome to my page</h1>   
            </Row>
            <Row className='homeImgContainer'>
                <img className='homeImg' src={require('../images/backgroundImage.png')} alt="home"></img>
            </Row>
            <Row className='homeSubtitleContainer'>
                <h4 className='homeSubtitle'>Here you'll find projects I've worked on, my aspirations as a MERN Fullstack Web Developer, my skills, and basically get to know me, as well as my learning path.</h4>
            </Row>
        </Container>
    )
};

export default Home; 