import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

interface Props {}

const Content: FunctionComponent<PropsWithChildren<Props>> = ({ children }) => (
  <Container>{children}</Container>
);

export default Content;
