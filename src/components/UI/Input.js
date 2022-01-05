import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  margin: 1rem;
`;


const Label = styled.label`
  color: #808080;
  display: block;
  font-size: 12px;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const typeSelector = (props) => {
  switch (props.tagType) {
    case 'input':
      return 
    case 'select':
      return 
    default:
      return new Error();
  }
};

export default function Input(props) {
  return (
    <Div>
      <Label for={props.id}>{props.title}</Label>
      {typeSelector(props)}
    </Div>
  );
}
