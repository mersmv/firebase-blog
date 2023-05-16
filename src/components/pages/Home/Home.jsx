import { getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { blogCollectionreference } from '../../../config/firebase.config';
import Post from '../../Post/Post';
import { StyledContainer } from './styles';

const Home = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		//el onsnapshot mira los cambios de la base de datos
		const suscribeToData = onSnapshot(blogCollectionreference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));

			dataInfo.lenght === 0 ? setPosts(null) : setPosts(dataInfo);
		});
		return () => suscribeToData();
	}, []);
	return (
		<StyledContainer>
			{posts.map(post => (
				<Post key={post.id} {...post}></Post>
			))}
		</StyledContainer>
	);
};
