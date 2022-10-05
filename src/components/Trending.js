import { Card, Container, Row, Col, Image } from "react-bootstrap";
import anya from "../assets/Image/Trending/anya.jpg";
import arknights from "../assets/Image/Trending/arknigths.jpg";
import bleach from "../assets/Image/Trending/bleach.jpg";
import blueLock from "../assets/Image/Trending/blue-lock.jpg";
import chainsawMan from "../assets/Image/Trending/chainsaw-man.jpg";
import mob3 from "../assets/Image/Trending/mob3.jpg";

const Trending = () => {
  return (
    <div className='trending' id='trending'>
      <Container>
        <br />
        <h1 className='text-white'>Trending Anime</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrappper'>
            <Card className='movieImage'>
              <Image src={anya} alt='spy x family' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>
                    Spy x Family part 2
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
              <Image src={arknights} alt='arknights' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Arknights</Card.Title>
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
              <Image src={bleach} alt='bleach' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Bleach</Card.Title>
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
              <Image src={mob3} alt='mob' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>
                    Mob Pyscho 100 3
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
              <Image src={blueLock} alt='blueLock' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Blue Lock</Card.Title>
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
              <Image src={chainsawMan} alt='chainsawMan' className='images' />
              <div className='bg-dark text-white'>
                <div className='p-2 m-1'>
                  <Card.Title className='text-center'>Chainsaw Man</Card.Title>
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

export default Trending;
