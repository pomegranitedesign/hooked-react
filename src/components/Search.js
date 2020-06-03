import React from 'react'
import styled from 'styled-components'

const Search = () => {
	return <Input autoFocus type="text" placeholder="Transformers" />
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
