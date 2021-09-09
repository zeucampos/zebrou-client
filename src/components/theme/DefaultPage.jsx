import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import Flex from '../share/Flex';

const DefaultPage = (props) => {
	return (
		<DefaultPageWrapper>
			<div id="navbar">
				<div className="container">
					<Flex
						justifyContent="center"
						alignItems="space-between"
						gap="16px"
						flexDirection="row"
						height="100%"
					>
						<img src={logo} alt="zebrou" width="56px" />
					</Flex>
				</div>
			</div>
			<div className="container">
				<h3 className="page-title">{props.title}</h3>
			</div>
		</DefaultPageWrapper>
	);
};

const DefaultPageWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: vertical;
	gap: 16px;
	padding-top: 5em;

	.container {
		max-width: 1233px;
		margin: 0 auto;
		height: 100%;
	}

	#navbar {
		background: white;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 5em;
		border-bottom: 1px solid #e7e7e7;
	}

	.page-title {
		color: black;
	}
`;

export default DefaultPage;
