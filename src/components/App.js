import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Movies from './Movies'

const _APIKEY = '75564e0c5c251bf2aa157f35cece994b'

const App = () => {
	const [ movies, setMovies ] = useState([])
	const [ currentPage, setCurrentPage ] = useState(1)

	const _BASEURL = `https://api.themoviedb.org/3/movie/popular?api_key=${_APIKEY}&language=en-US&page=${currentPage}`

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await axios.get(_BASEURL)
			const data = response.data
			setMovies(data.results)
		}

		fetchMovies()
	}, [])

	return (
		<div>
			<Header />
			<Movies movies={movies} />
		</div>
	)
}

export default App
