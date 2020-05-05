import styled from 'styled-components';
import getConfig from 'next/config';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  font-family: monospace;
`;

type Props = {
  event: string;
  logLength?: number;
};

const Log = ({ event, logLength = 200 }: Props) => {
  const [ring, setRing] = useState<string[]>([]);

  useEffect(() => {
    const {
      publicRuntimeConfig: { apiUrl },
    } = getConfig();
    const socket = io(`${apiUrl}`);
    socket.on(event, (message: string) => {
      setRing((ring) => [message, ...ring.slice(0, logLength)]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <FlexContainer>
      {ring.map((message: string, index) => (
        <Message key={index}>{message}</Message>
      ))}
    </FlexContainer>
  );
};

export default Log;
