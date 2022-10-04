import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className='intro'>
      <Container className='text-white text-center d-flex justify-content-center align-items-center'>
        <Row>
          <Col>
            <div className='judul-awal text-primary'>Ani-Kun</div>
            <div className='title mt-3'>TONTON ANIME BISA DIMANA SAJA</div>
            <div
              className='introButton
              mt-3
              d-flex
              justify-content-center
              align-items-center'>
              <Button variant='light'>Lihat List Anime</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
