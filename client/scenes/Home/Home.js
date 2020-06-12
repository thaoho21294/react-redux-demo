import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LeftMenu from '../../components/LeftMenu';
import Style from '../../styles/home.module.scss';
import MainView from './components/MainView';
import ErrorBoundary from '../../components/ErrorBoundary';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <div className={Style.container}>
            <LeftMenu />
          </div>
        </Col>
        <Col xs={7}>
          <div className={Style.container}>
            <ErrorBoundary>
              <MainView />
            </ErrorBoundary>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

