import { addDoc } from 'firebase/firestore';
import { blogCollectionreference } from '../../../config/firebase.config';
import { useState } from 'react';
import { StyledContainerPost, StyledForm, SubmitButtonStyled } from './styles';
import { v4 } from 'uuid';
import { getDownloadURL, uploadBytes } from 'firebase/storage';

const NewPost = () => {
	const [newPostInfo, setNewPostInfo] = useState({
		title: '',
		text: ''
	});
	return (
		<StyledContainerPost>
			<h1>New Post: </h1>
			<StyledForm action='' onSubmit={() => createPost(e, newPostInfo)}>
				<label htmlFor=''>
					title:
					<input
						type='text'
						onChange={e =>
							setNewPostInfo({ ...newPostInfo, title: e.target.value })
						}
					/>
				</label>
				<label htmlFor=''>
					text:
					<input
						type='text'
						onChange={e =>
							setNewPostInfo({ ...newPostInfo, text: e.target.value })
						}
					/>
				</label>
				<label htmlFor=''>
					<input
						type='file'
						onChange={() => handleUploadPic(e.target.files[0])}
					/>
				</label>
				<SubmitButtonStyled type='submit' />
			</StyledForm>
		</StyledContainerPost>
	);
};

const createPost = async (e, newPostInfo) => {
	e.preventDefault();

	try {
		await addDoc(blogCollectionreference, {
			...newPostInfo,
			date: new Date.toLocaleString()
		});
	} catch (err) {
		console.log(err);
	}
	e.target.reset();
};

const handleUploadPic = async file => {
	const { currentUser } = useContext(AuthContext);
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const directory = currentUser.email;
	const storageref = ref(storage, `${directory}/${finalName}`);
	try {
		const upload = await uploadBytes(storageref, file);
		const imageURL = await getDownloadURL(storageref);
		console.log(upload);
		console.log(imageURL);
	} catch (err) {
		console.error('Error al subir el archivo', err);
	}
};
export default NewPost;
