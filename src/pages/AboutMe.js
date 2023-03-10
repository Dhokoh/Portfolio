import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row} from 'react-bootstrap';

const AboutMe = () => {
    return (
        <Container className='container-fluid'>
            <Row className='justify-content-md-center'>
                <img className='profileImg' src={require('../images/dhopicture.jpg')} alt='profile'></img>
            </Row>
            <h3 className='aboutMeH3'>About me</h3>
            <p className='aboutMeP'>I'm a MERN fullstack web developer who is passionate about coding
                and loves a good challenge. My skillset includes soft skills that,
                as a Commercial Engineer, I have strenghtened with time and practice
                allowing me to stablish good communication and listening abilities that help
                me build meaningful relationships with collaborators and clients alike!

                Below a short description of both my technical skills, and my soft skills.
            </p>
        
            <h5 className='aboutMeH5'>Soft skills</h5>    
            <Container className='cardsContainer'>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/Empathy.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Empathy</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/activelistening.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Active Listening</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/Communication.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Communication skills</Card.Title>
                    </Card.Body>
                </Card>
            </Container>

            <h5 className='aboutMeH5'>Languages</h5>
            <Container className='cardsContainer'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/English.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>English</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/Mandarin.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Traditional Chinese</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/Spanish.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Spanish (Colombia)</Card.Title>
                    </Card.Body>
                </Card>
            </Container>

            <h5 className='aboutMeH5'>Technical skills or techologies I've worked with</h5>
            <Container className='cardsContainer'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/HTMLlogo.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>HTML and CSS</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/Cprogramming.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>C - Programming Language</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/javascript.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Javascript</Card.Title>
                    </Card.Body>
                </Card>
            </Container>

            <Container className='cardsContainer'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/Csharp.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>C#</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/python.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Python</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../images/Unity.png')} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Unity</Card.Title>
                    </Card.Body>
                </Card>
            </Container>

        </Container>
    )
};

export default AboutMe;