import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { API_KEY } from '../keys'

const MovieModal = ({ setIsShown, currentMovieID }) => {
	const [ movie, setMovie ] = useState(null)
	const [ movieImages, setMovieImages ] = useState([])

	useEffect(() => {
		const fetchMovie = async () => {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${currentMovieID}?api_key=${API_KEY}&language=en-US`
			)
			setMovie(response.data)
		}

		const fetchMovieImages = async () => {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${currentMovieID}/images?api_key=${API_KEY}&language=en-US`
			)
			setMovieImages(response.data)
		}

		fetchMovie()
		fetchMovieImages()
	}, [])

	if (movie)
		return (
			<Fragment>
				<Modal>
					<Date>{movie.release_date}</Date>
					<Title>{movie.title}</Title>
					<Genres>
						{movie.genres.map((genre) => (
							<li key={genre.id}>{genre.name}</li>
						))}
					</Genres>
					<Overview>{movie.overview}</Overview>
				</Modal>
				<Background onClick={() => setIsShown(false)} />
			</Fragment>
		)
	return <h1>Loading...</h1>
}

const Modal = styled.div`
	padding: 30px;
	min-height: 400px;
	min-width: 500px;
	max-width: 600px;
	background-color: #ffffff;
	z-index: 1;
	display: block;
	border-radius: 3px;
	margin: 0 auto;
	position: fixed;
	top: 20%;
	left: 32%;
	box-shadow: 0px 15px 20px -10px rgba(0, 0, 0, 0.5);
`

const Title = styled.h1`
	font-size: 28px;
	font-weight: 900;
`

const Genres = styled.ul`
	margin-top: 20px;
	li {
		list-style: none;
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 5px;
		color: darkgray;
	}
`

const Date = styled.span`
	font-size: 12px;
	color: #a4b0be;
	font-style: italic;
	font-weight: 100;
`

const Overview = styled.p`
	font-size: 16px;
	font-weight: 400;
	margin-top: 30px;
`

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.6);
	display: block;
`

export default MovieModal
