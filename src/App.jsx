import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/auth.provider';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<AuthProvider>
			<GlobalStyles />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
