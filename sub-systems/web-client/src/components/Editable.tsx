import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

type Props = {
  value: string;
  onChange: (newValue: string) => void;
};

const Input = styled.input``;

const Editable = ({ value: valueProp, onChange: update }: Props) => {
  const [value, setValue] = useState<string>(valueProp);
  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (valueProp !== value) {
      update(value);
    }
  };
  return (
    <Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
  );
};

export default Editable;
