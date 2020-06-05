import React from 'react'
import styled from 'styled-components'

const Search = ({ search, setSearch }) => {
	return (
		<Input
			autoFocus
			type="text"
			placeholder="Transformers"
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>
	)
}

const Input = styled.input`
	width: 100%;
	margin-left: 20px;
	padding: 10px;
	border-radius: 3px;
	border: none;
	background-color: #686de0;
	color: #ffffff;
	outline: none;

	&::placeholder {
		color: #ffffff;
	}

	::-moz-focus-inner {
		border: none;
	}
`

export default Search
