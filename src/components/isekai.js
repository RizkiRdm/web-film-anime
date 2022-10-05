import { Card, Container, Row, Col, Image } from "react-bootstrap";
import drifters from "../assets/Image/Isekai/drifters.jpg";
import inuyasha from "../assets/Image/Isekai/inuyasha.jpg";
import konosuba from "../assets/Image/Isekai/konosuba.jpg";
import ngnl from "../assets/Image/Isekai/ngnl.jpg";
import overlord from "../assets/Image/Isekai/overlord.jpg";
import slime from "../assets/Image/Isekai/slime.jpg";

const Isekai = () => {
  return (
    <div className='trending' id='isekai'>
      <Container>
        <br />
        <h1 className='text-white'>Isekai Anime</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrappper'>
            <Card className='movieImage'>
              <Image src={drifters} alt='drifters' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Drifters</Card.Title>
                  <Card.Text className='text-start'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className='text-start'>
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrappper'>
            <Card className='movieImage'>
              <Image src={inuyasha} alt='inuyasha' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Inuyasha</Card.Title>
                  <Card.Text className='text-start'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className='text-start'>
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrappper'>
            <Card className='movieImage'>
              <Image src={konosuba} alt='spy x family' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Konosuba</Card.Title>
                  <Card.Text className='text-start'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className='text-start'>
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrappper'>
            <Card className='movieImage'>
              <Image src={ngnl} alt='spy x family' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>
                    No Game No Life
                  </Card.Title>
                  <Card.Text className='text-start'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className='text-start'>
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrappper'>
            <Card className='movieImage'>
              <Image src={overlord} alt='overlord' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Overlord</Card.Title>
                  <Card.Text className='text-start'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className='text-start'>
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrappper'>
            <Card className='movieImage'>
              <Image src={slime} alt='Tensura' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Tensura</Card.Title>
                  <Card.Text className='text-start'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className='text-start'>
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Isekai;
