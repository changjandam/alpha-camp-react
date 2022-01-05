import React from 'react';
import styled from 'styled-components';

import Input from '../UI/Input';

const Form = styled.form``;

const genderOptions = [
  { title: '先生', value: 'male' },
  { title: '女士', value: 'female' },
];

export default function Address(props) {
  return (
    <Form>
      <Input
        tagType={'select'}
        title={'稱謂'}
        id={'gender'}
        options={genderOptions}
      />
    </Form>
  );
}
