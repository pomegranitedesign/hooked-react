import React from 'react'
import styled from 'styled-components'

const Sorting = ({ order, setOrder, sortBy, setSortBy }) => {
	return (
		<Wrapper>
			<List>
				<Button
					isActive={order === 'asc'}
					onClick={() => setOrder('asc')}
					style={{
						borderTopLeftRadius: 3,
						borderBottomLeftRadius: 3
					}}
				>
					Ascending
				</Button>
				<Button
					isActive={order === 'desc'}
					onClick={() => setOrder('desc')}
					style={{
						borderTopRightRadius: 3,
						borderBottomRightRadius: 3
					}}
				>
					Descending
				</Button>
			</List>

			<List>
				<Button
					isActive={sortBy === 'name'}
					onClick={() => setSortBy('name')}
					style={{
						borderTopLeftRadius: 3,
						borderBottomLeftRadius: 3
					}}
				>
					By Movie Name
				</Button>
				<Button
					isActive={sortBy === 'rating'}
					onClick={() => setSortBy('rating')}
					style={{
						borderTopRightRadius: 3,
						borderBottomRightRadius: 3
					}}
				>
					By Rating
				</Button>
			</List>
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

const List = styled.ul`margin-top: 20px;`

export default Sorting
