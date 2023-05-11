import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Register from '../components/pages/Register/Register';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='register' element={<Register></Register>}></Route>
			</Route>
		</Routes>
	);
};

export default Router;
