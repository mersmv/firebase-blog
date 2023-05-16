import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../config/firebase.config';
import { StyledContainer, StyledForm, SubmitButton } from './styles';

const Login = () => {
	const [error, setError] = useState('');
	const [userLogin, setUserLogin] = useState({
		email: '',
		password: ''
	});
	return (
		<StyledContainer>
			<StyledForm onSubmit={e => handleSubmit(e, userLogin, setError)}>
				<label htmlFor=''>
					Email
					<input
						type='text'
						onChange={e =>
							setUserLogin({ ...userLogin, email: e.target.value })
						}
					/>
				</label>
				<label htmlFor=''>
					Contraseña
					<input
						type='text'
						onChange={e =>
							setUserLogin({ ...userLogin, password: e.target.value })
						}
					/>
				</label>

				<SubmitButton type='submit' />
			</StyledForm>
			<button onClick={() => LoginWithGoogle()}>
				INICIA SESION CON GOOGLE
			</button>
		</StyledContainer>
	);
};

const handleSubmit = async (e, userLogin, setError) => {
	e.preventDefault();
	const { email, password } = userLogin;
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		setError('Falló el mail o la contraseña');
	}
};

const LoginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (err) {
		console.log(err);
	}
};
export default Login;
