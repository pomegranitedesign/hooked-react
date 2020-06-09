import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import createPersistedState from 'use-persisted-state'
import Header from './Header'
import Movies from './Movies'
import MovieModal from './MovieModal'
import { API_KEY } from '../keys'
import Filters from './Filters'
import Sorting from './Sorting'
import Pagination from './Pagination'

// Persisted state
const usePageState = createPersistedState('currentMoviePage')
const useMovieState = createPersistedState('currentMovieList')

const App = () => {
	const [ movies, setMovies ] = useMovieState([])
	const [ currentPage, setCurrentPage ] = usePageState(1)
	const [ search, setSearch ] = useState('')
	const [ currentMovieID, setCurrentMovieID ] = useState(null)
	const [ isShown, setIsShown ] = useState(false)
	const [ isAdult, setIsAdult ] = useState(false)
	const [ order, setOrder ] = useState('asc')
	const [ sortBy, setSortBy ] = useState('name')

	useEffect(() => {
		fetchMovies()
	}, [])

	const fetchMovies = async (page) => {
		const _BASEURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
		const response = await axios.get(_BASEURL)
		const data = response.data
		setMovies(data.results)
	}

	const handleAdultClick = () => setIsAdult((isAdult) => (isAdult = !isAdult))

	const getPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage((currentPage) => (currentPage -= 1))
			fetchMovies(currentPage)
		}
	}

	const getNextPage = () => {
		setCurrentPage((currentPage) => (currentPage += 1))
		fetchMovies(currentPage)
	}

	const formattedMovies = movies
		.filter((movie) => {
			if (isAdult)
				return (
					movie.title.toLowerCase().match(search.toLowerCase()) &&
					movie.isAdult
				)
			else return movie.title.toLowerCase().match(search.toLowerCase())
		})
		.sort((a, b) => {
			if (order === 'asc') {
				if (sortBy === 'name') return a.title > b.title ? 1 : -1
				else if (sortBy === 'rating')
					return a.popularity > b.popularity ? 1 : -1
			} else if (order === 'desc') {
				if (sortBy === 'name') return a.title > b.title ? -1 : 1
				else if (sortBy === 'rating')
					return a.popularity > b.popularity ? -1 : 1
			}
		})

	return (
		<Fragment>
			<Header search={search} setSearch={setSearch} />
			<Wrapper>
				<Side>
					<Filters
						handleAdultClick={handleAdultClick}
						isAdult={isAdult}
					/>
					<Sorting
						setOrder={setOrder}
						order={order}
						sortBy={sortBy}
						setSortBy={setSortBy}
					/>
					<Pagination
						currentPage={currentPage}
						getPrevPage={getPrevPage}
						getNextPage={getNextPage}
					/>
				</Side>
				<Movies
					movies={formattedMovies}
					setCurrentMovieID={setCurrentMovieID}
					setIsShown={setIsShown}
				/>
			</Wrapper>

			{isShown && (
				<MovieModal
					currentMovieID={currentMovieID}
					setIsShown={setIsShown}
				/>
			)}
		</Fragment>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const Side = styled.div`
	position: fixed;
	display: flex;
	margin-left: 3%;
	flex-direction: column;
	margin-top: 20px;
	align-items: flex-start;
`

export default App
