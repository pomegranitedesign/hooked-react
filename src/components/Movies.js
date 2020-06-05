import React from 'react'
import styled from 'styled-components'
import Movie from './Movie'
import Container from './Container'

const Movies = ({
	movies = [],
	setCurrentMovieID = () => {},
	setIsShown = () => {}
}) => {
	const renderMovies = () =>
		movies.map(
			({ id, title, overview, release_date, original_language }) => (
				<Movie
					id={id}
					key={id}
					title={title}
					overview={overview}
					releaseDate={release_date}
					originalLanguage={original_language}
					setCurrentMovieID={setCurrentMovieID}
					setIsShown={setIsShown}
				/>
			)
		)

	return (
		<Container>
			<List style={{}}>{renderMovies()}</List>
		</Container>
	)
}

const List = styled.ul`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-row-gap: 10px;
	grid-column-gap: 30px;
`

export default Movies
