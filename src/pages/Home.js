import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

const Home = () => {
    return (
        <Container className='homeContainer'>
            <h1 className='homeTitle'>Welcome to my page</h1>
            <Container className=''>
                <img className='homeImg' src={require('../images/backgroundImage.png')}></img>
                <img className='homeImg' src={require('../images/backgroundImage.png')}></img>
                
            </Container>
            <Container>
                <h4 className='homeSubtitle'>Here you'll find projects I've worked on, my aspirations as a MERN Fullstack Web Developer, my skills, and basically get to know me, as well as my learning path.</h4>
            </Container>
        </Container>
    )
};

export default Home;