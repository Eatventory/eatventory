import { Container, Row, Col, Dropdown, Form } from 'react-bootstrap';
import Navbar from '@/components/navbar'
import '@/styles/MainPage.css'

function MainPage() {
  return (
    <Container fluid className="p-3">
      <div className="fixed-top d-flex justify-content-end align-items-center p-2">
        <label className="me-2">정렬</label>
        <select className="form-select w-auto" defaultValue="선호순">
          <option value="선호순">선호순</option>
          <option value="유통기한순">유통기한순</option>
        </select>
      </div>

      <Container fluid className="mb-5">
        <Row className="gx-2 gy-3 p-2">
          <Col xs={4}>
            <div className="item-box">
              <span className="emoji">🥝</span>
              <span className="  badge rounded-pill bg-danger item-badge">1</span>
            </div>
          </Col>
          <Col xs={4}>
            <div className="item-box">
              <span className="emoji">🍎</span>
              <span className="dday-badge">D-4</span>
              <span className= " badge rounded-pill bg-danger item-badge">1</span>
            </div>
          </Col>
          <Col xs={4}>
            <div className="item-box">
              <span className="emoji">🍎</span>
              <span className="dday-badge">D-7</span>
              <span className= " badge rounded-pill bg-danger item-badge">2</span>
            </div>
          </Col>

          <Col xs={4}>
            <div className="item-box">
              <span className="emoji">🥦</span>
              <span className= " badge rounded-pill bg-danger item-badge">3</span>
            </div>
          </Col>

          <Col xs={4}>
            <div className="empty-box" />
          </Col>
          <Col xs={4}>
            <div className="empty-box" />
          </Col>
        </Row>
      </Container>
      <Navbar />
    </Container>
  );
}

export default MainPage;
