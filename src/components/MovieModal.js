import React, { Fragment } from 'react'
import styled from 'styled-components'

const MovieModal = ({ isShown, currentMovieID, setIsShown }) => {
	return (
		<Fragment>
			<Modal isShown={isShown}>
				<h1>Movie Modal</h1>
			</Modal>
			<Background isShown={isShown} onClick={() => setIsShown(false)} />
		</Fragment>
	)
}

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	min-height: 200px;
	min-width: 300px;
	background-color: #ffffff;
	z-index: 1;
	display: ${({ isShown }) => (isShown ? 'block' : 'none')};
	border-radius: 3px;
	margin: 0 auto;
`

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.6);
	display: ${({ isShown }) => (isShown ? 'block' : 'none')};
`

export default MovieModal
