import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
`;

interface Props {}

const MainView: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
}) => <Container>{children}</Container>;

export default MainView;
