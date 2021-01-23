import React from 'react';
import styled from 'styled-components';
import Log from '../Log';
import Expandable from '../wrappers/Expandable';
const Container = styled.div`
  display: flex;
  > * {
    margin: 5px;
  }
`;

const Footer = () => (
  <Container>
    <p>{'this is a footer'}</p>
    <Expandable title="Logs">
      <Log event="log" />
    </Expandable>
  </Container>
);

export default Footer;
