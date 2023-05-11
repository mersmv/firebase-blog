import { useContext } from 'react';
import { AuthContext } from '../../config/firebase.config';
import {
	StyledContaner,
	StyledHeader,
	StyledIcon,
	StyledTitle
} from './styles';

const Header = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<>
			{currentUser && (
				<StyledHeader>
					<StyledContaner>
						<StyledIcon src='public/house-solid.svg' alt='' />
						<StyledTitle to=''>Home</StyledTitle>
					</StyledContaner>
					<li>
						<StyledTitle to=''>New Post</StyledTitle>
					</li>
					<li>
						<StyledTitle to=''>Profile</StyledTitle>
					</li>
				</StyledHeader>
			)}

			<StyledHeader>
				<StyledContaner>
					<StyledIcon src='public/house-solid.svg' alt='' />
					<StyledTitle to=''>Home</StyledTitle>
				</StyledContaner>
				<li>
					<StyledTitle to=''>Login</StyledTitle>
				</li>
				<li>
					<StyledTitle to='register'>Register</StyledTitle>
				</li>
			</StyledHeader>
		</>
	);
};

export default Header;
