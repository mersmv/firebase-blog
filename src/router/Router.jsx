import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Login from '../components/pages/Login/Login';
import Register from '../components/pages/Register/Register';
import NewPost from '../components/pages/NewPost/NewPost';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
				<Route path='newpost' element={<NewPost></NewPost>}></Route>
			</Route>
		</Routes>
	);
};

export default Router;
