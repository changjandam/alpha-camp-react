import React from 'react';
import styled from 'styled-components';
import { Select, Input as ChakraInput, Box } from '@chakra-ui/react';
import { IoMdArrowDropdown } from 'react-icons/io';


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
			return (
				<ChakraInput
					id={props.id}
					placeholder={props.placeholder}
					type={props.type}
					focusBorderColor="#f67599"
					
				/>
			);
		case 'select':
			return (
				<Select icon={<IoMdArrowDropdown />} focusBorderColor="#f67599" w={props.w}>
					{props.options.map((option) => (
						<option value={option.value}>{option.title}</option>
					))}
				</Select>
			);
		default:
			return new Error();
	}
};

export default function Input(props) {
	return (
		<Box pr={props.pr} mb={'1rem'}>
			<Label for={props.id}>{props.title}</Label>
			{typeSelector(props)}
		</Box>
	);
}
