import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import Movies from './Movies'
import MovieModal from './MovieModal'
import { API_KEY } from '../keys'

const App = () => {
	const [ movies, setMovies ] = useState([])
	const [ currentPage, setCurrentPage ] = useState(1)
	const [ search, setSearch ] = useState('')
	const [ currentMovieID, setCurrentMovieID ] = useState(null)
	const [ isShown, setIsShown ] = useState(false)
	const _BASEURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await axios.get(_BASEURL)
			const data = response.data
			setMovies(data.results)
		}

		fetchMovies()
	}, [])

	const filteredMovies = movies.filter((movie) =>
		movie.title.toLowerCase().match(search.toLowerCase())
	)
	return (
		<Fragment>
			<Header search={search} setSearch={setSearch} />
			<Movies
				movies={filteredMovies}
				setCurrentMovieID={setCurrentMovieID}
				setIsShown={setIsShown}
			/>
			<MovieModal
				isShown={isShown}
				setIsShown={setIsShown}
				currentMovieID={currentMovieID}
			/>
		</Fragment>
	)
}

export default App
