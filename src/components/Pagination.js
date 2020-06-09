import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const Pagination = ({ currentPage, getPrevPage, getNextPage }) => {
	return (
		<Container>
			<Wrapper>
				<Button onClick={getPrevPage} disabled={currentPage === 1}>
					Prev
				</Button>
				<Button onClick={getNextPage}>Next</Button>
			</Wrapper>
		</Container>
	)
}

const Wrapper = styled.div`
	margin-top: 200px;
	display: flex;
	justify-content: space-between;
	background-color: red;
`

const Button = styled.button`
	padding: 10px;
	border: 0;
	outline: none;
	cursor: pointer;
	transition: background-color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

	&::-moz-focus-inner {
		border: none;
	}

	&:hover {
		background-color: #2ed573;
	}
`

export default Pagination
