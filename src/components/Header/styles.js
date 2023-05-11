import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.nav`
	width: 100%;
	background-color: #eaf8bf;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
	padding: 25px;
`;

const StyledIcon = styled.img`
	width: 20px;
`;

const StyledContaner = styled.div`
	display: flex;
	gap: 5px;
`;

const StyledTitle = styled(NavLink)`
	font-size: 1.3rem;
	cursor: pointer;
`;

export { StyledHeader, StyledIcon, StyledContaner, StyledTitle };
