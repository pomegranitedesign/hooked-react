import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import Movies from './Movies'
import MovieModal from './MovieModal'
import { API_KEY } from '../keys'
import Filters from './Filters'
import Sorting from './Sorting'

const App = () => {
	const [ movies, setMovies ] = useState([])
	const [ currentPage, setCurrentPage ] = useState(2)
	const [ search, setSearch ] = useState('')
	const [ currentMovieID, setCurrentMovieID ] = useState(null)
	const [ isShown, setIsShown ] = useState(false)
	const [ isAdult, setIsAdult ] = useState(false)
	const [ order, setOrder ] = useState('asc')
	const _BASEURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await axios.get(_BASEURL)
			const data = response.data
			setMovies(data.results)
		}

		fetchMovies()
	}, [])

	const handleAdultClick = () => setIsAdult((isAdult) => (isAdult = !isAdult))

	const formattedMovies = movies
		.filter(
			(movie) =>
				movie.title.toLowerCase().match(search.toLowerCase()) &&
				movie.adult === isAdult
		)
		.sort((a, b) => {
			if (order === 'asc') return a.title > b.title ? 1 : -1
			else if (order === 'desc') return a.title > b.title ? -1 : 1
		})

	return (
		<Fragment>
			<Header search={search} setSearch={setSearch} />
			<div>
				<Filters
					handleAdultClick={handleAdultClick}
					isAdult={isAdult}
				/>
				<Sorting setOrder={setOrder} order={order} />
			</div>
			<Movies
				movies={formattedMovies}
				setCurrentMovieID={setCurrentMovieID}
				setIsShown={setIsShown}
			/>

			{isShown && (
				<MovieModal
					currentMovieID={currentMovieID}
					setIsShown={setIsShown}
				/>
			)}
		</Fragment>
	)
}

export default App
