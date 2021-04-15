/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CreateContainer = styled.div`
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	width: 50%;
	height: 1000px;
	border: 3px solid #e9e9e9;
	border-radius: 10px;
	justify-content: center;
	margin: 90px auto;
`;

export const CreateSubTitle = styled.h1`
	font-size: 30px;
	text-align: center;
`;

export const CreateNameDiv = styled.div`
	margin: 0 20%;
	width: 700px;
	& > label {
		font-size: 20px;
	}
	& input {
		margin-left: 10px;
		font-size: 20px;
		width: 374px;
		border: 3px solid #e9e9e9;
	}
	& input:focus {
		outline: none;
	}
`;

export const CreateContent = styled.div`
	width: 70%;
	height: 500px;
	border: 3px solid #e9e9e9;
	overflow: auto;
`;

export const CreateEditorMenu = styled.div`
	border-bottom: 1px solid #e9e9e9;
	height: 50px;
`;

export const CreateTextArea = styled.p`
	background-color: #e9e9e9;
`;

export const CreateImageButton = styled.button`
	width: 71%;
	height: 30px;
	background-color: #525d60;
	margin: 0 auto;
	border: 1px solid #e9e9e9;
	color: #fff;
	&:hover {
		cursor: pointer;
		background-color: #50d56d;
	}
`;

export const CreateLeaderPosition = styled.div`
	display: flex;
	width: 70%;
	margin-top: 10px;
	justify-content: center;
	& > label {
		font-size: 20px;
		display: inline-block;
	}
`;
export const CreateLabel = styled.div`
	display: flex;
	width: 70%;
	justify-content: center;
	margin-top: 10px;
`;

export const PersonNumber = styled.div`
	font-size: 20px;
`;

export const addButton = styled.button.attrs((props) => ({
	type: 'button',
}))`
	margin-left: 10px;
	width: 70px;
	height: 30px;
	background-color: #0f0;
	color: #000;
	outline: none;
	&:hover {
		background-color: #a4a4a4;
		color: #fff;
		cursor: pointer;
	}
`;

export const removeButton = styled.button.attrs((props) => ({
	type: 'button',
}))`
	margin-left: 10px;
	width: 70px;
	height: 30px;
	background-color: #0f0;
	color: #000;
	outline: none;
	&:hover {
		background-color: #a4a4a4;
		color: #fff;
		cursor: pointer;
	}
`;
