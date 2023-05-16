import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase.config';
import { useState } from 'react';
import { StyledContainer, StyledForm, SubmitButton } from './styles';

const Register = () => {
	const [registeredUser, setRegisteredUser] = useState({
		email: '',
		password: '',
		passwordCheck: ''
	});
	return (
		<StyledContainer>
			<StyledForm action='' onSubmit={e => handleSubmit(e, registeredUser)}>
				<label>
					Correo electronico:
					<input
						type='text'
						onChange={e =>
							setRegisteredUser({ ...registeredUser, email: e.target.value })
						}
					/>
				</label>
				<label>
					Contraseña:
					<input
						type='text'
						onChange={e =>
							setRegisteredUser({ ...registeredUser, password: e.target.value })
						}
					/>
				</label>
				<label>
					Confirmar contraseña:
					<input
						type='text'
						onChange={e =>
							setRegisteredUser({
								...registeredUser,
								passwordCheck: e.target.value
							})
						}
					/>
				</label>
				<SubmitButton type='submit' />
			</StyledForm>
		</StyledContainer>
	);
};

const handleSubmit = async (e, registeredUser) => {
	e.preventDefault();
	if (registeredUser.password !== registeredUser.passwordCheck)
		return console.log('No coinciden las contraseñas');
	const { email, password } = registeredUser;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.log('error');
	}
};

export default Register;
