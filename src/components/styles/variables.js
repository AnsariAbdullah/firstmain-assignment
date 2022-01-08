import styled from "styled-components";

const colors = {
	primary: '#60b246',
}

const paddingFix = '30px';

const Title = styled.p`
	color: #282c3f;
	font-size: 20px;
	font-weight: 600;
	padding: 20px 0 10px 0;
	.op-text{
		font-size: 14px;
		color: #686b78;
		margin-left: 4px;
		font-weight: 300;
	}
`
export {
	colors,
	paddingFix,
	Title
}