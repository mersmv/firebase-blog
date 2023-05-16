import { useContext } from 'react';
import { AuthContext, auth } from '../../config/firebase.config';
import {
	StyledContaner,
	StyledHeader,
	StyledIcon,
	StyledLogOut,
	StyledTitle
} from './styles';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<>
			{currentUser && (
				<StyledHeader>
					<StyledContaner>
						<StyledIcon src='public/house-solid.svg' alt='' />
						<StyledTitle to=''>Home</StyledTitle>
					</StyledContaner>
					<li>
						<StyledTitle to='newpost'>New Post</StyledTitle>
					</li>
					<li>
						<StyledTitle to=''>Profile</StyledTitle>
					</li>
					<li>
						<StyledLogOut onClick={() => handleSignOut(navigate)}>
							Log Out
						</StyledLogOut>
					</li>
				</StyledHeader>
			)}
			{!currentUser && (
				<StyledHeader>
					<StyledContaner>
						<StyledIcon src='public/house-solid.svg' alt='' />
						<StyledTitle to=''>Home</StyledTitle>
					</StyledContaner>
					<li>
						<StyledTitle to='login'>Login</StyledTitle>
					</li>
					<li>
						<StyledTitle to='register'>Register</StyledTitle>
					</li>
				</StyledHeader>
			)}
		</>
	);
};

const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default Header;
