import styled from 'styled-components';

const StyledContainerPost = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const StyledForm = styled.form`
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	gap: 20px;
	padding: 15px;
	border: solid 5px lightgoldenrodyellow;
	border-radius: 10px;
`;

const SubmitButtonStyled = styled.input`
	width: 70px;
	background-color: lightgoldenrodyellow;
	border-radius: 5px;
	border: 1px solid transparent;
`;

export { StyledContainerPost, StyledForm, SubmitButtonStyled };
