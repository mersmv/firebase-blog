import { StyledPostContainer, StyledText, StyledTitle } from './styles';

const Post = ({ title, text }) => {
	return (
		<StyledPostContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{text}</StyledText>
		</StyledPostContainer>
	);
};

export default Post;
