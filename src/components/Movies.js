import React from 'react'
import Movie from './Movie'
import Container from './Container'

const Movies = ({ movies = [] }) => {
	const renderMovies = () =>
		movies.map((movie) => <Movie key={movie.id} title="This is a title" />)

	return (
		<Container>
			<ul style={{ marginTop: 20 }}>{renderMovies()}</ul>
		</Container>
	)
}

export default Movies
