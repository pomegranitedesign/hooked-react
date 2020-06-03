import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import logoAlt from '../assets/images/logoAlt.svg'
import Container from './Container'
import Search from './Search'

// Constrants
const HEADER_HEIGHT = 80

const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Logo src={logo} alt={logoAlt} />
					<Search />
				</Content>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.header`
	height: ${HEADER_HEIGHT}px;
	background-color: #042541;
`

const Logo = styled.img`width: 70px;`

const Content = styled.div`
	height: ${HEADER_HEIGHT}px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export default Header
