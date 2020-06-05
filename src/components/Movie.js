import React from 'react'
import styled from 'styled-components'

const Movie = ({
	title,
	overview,
	releaseDate,
	originalLanguage,
	setCurrentMovieID,
	id,
	setIsShown
}) => {
	return (
		<Wrapper
			onClick={() => {
				setCurrentMovieID(id)
				setIsShown(true)
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Title>{title}</Title>{' '}
				<span style={{ fontSize: 12, fontWeight: 100 }}>
					({originalLanguage})
				</span>
			</div>
			<ReleaseDate>{releaseDate}</ReleaseDate>
			<Excerpt>{overview.substring(0, 200)}...</Excerpt>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-height: 150px;
	width: 100%;
	border: 1px solid #5f27cd;
	border-radius: 3px;
	margin-bottom: 40px;
	display: inline-block;
	box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.25);
	padding: 20px;
	cursor: pointer;
	transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
	position: relative;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0px 15px 20px -15px rgba(0, 0, 0, 0.25);
	}

	&::before {
		content: "View Details";
		color: #ffffff;
		font-size: 20px;
		font-weight: 900;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(52, 31, 151, 0.8);
		border-radius: 3px;
		opacity: 0;
		transition: opacity 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	&:hover::before {
		opacity: 1;
	}
`

const Title = styled.h1`
	font-size: 24px;
	font-weight: 900;
	color: #222f3e;
	margin-right: 5px;
`

const ReleaseDate = styled.p`
	margin-top: 5px;
	margin-bottom: 10px;
	font-size: 12px;
	font-style: italic;
	font-weight: 400;
`

const Excerpt = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 25px;
`

export default Movie
