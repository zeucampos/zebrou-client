import React from 'react';
import styled from 'styled-components';

const Flex = (props) => {
	return <FlexWrapper {...props}>{props.children}</FlexWrapper>;
};

const FlexWrapper = styled.div`
	display: flex;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
	gap: ${(props) => props.gap};
	flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
`;

export default Flex;
