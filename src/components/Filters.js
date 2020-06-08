import React from 'react'
import styled from 'styled-components'

const Filters = ({ isAdult, handleAdultClick }) => {
	return (
		<Wrapper>
			<Button isActive={isAdult} onClick={handleAdultClick}>
				Adult
			</Button>
		</Wrapper>
	)
}

const Wrapper = styled.ul``

const Button = styled.button`
	padding: 10px;
	background-color: ${({ isActive }) => (isActive ? '#2ed573' : '#a4b0be')};
	border: 0;
	outline: none;
	cursor: pointer;
	transition: background-color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

	&::-moz-focus-inner {
		border: none;
	}
`

export default Filters
