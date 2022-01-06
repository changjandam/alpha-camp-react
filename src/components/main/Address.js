import React from 'react';
import styled from 'styled-components';

import Input from '../UI/Input';

import { Grid } from '@chakra-ui/react';

const Form = styled.form`
	margin: 15px;
`;

const genderOptions = [
	{ title: '先生', value: 'male' },
	{ title: '女士', value: 'female' },
];

export default function Address() {
	return (
		<Form>
			<Grid templateColumns={'1fr 1fr'}>
				<Input tagType="input" id="name" title="姓名" pr={'30'} />
				<Input
					tagType="select"
					title="稱謂"
					id="gender"
					options={genderOptions}
				/>
			</Grid>
      <Input tagType="input" id="tel" title="電話" type='tel' />
      <Input tagType="input" id="email" title="Email" type='email' />
      {/* <Input tagType="select" id="city" title="縣市" /> */}
      <Input tagType="input" id="address" title="地址" />
		</Form>
	);
}
