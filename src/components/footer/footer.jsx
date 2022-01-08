import React from 'react';
import styled from 'styled-components';

const FooterrWrapper = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 30px;
	button{
		background: #60b246;
		border: none;
		color: #fff;
		padding: 15px 20px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.add{
			text-transform: uppercase;
			font-weight: bold;
		}
	}
`

const Footer = () => {
	return (
		<FooterrWrapper>
			<button>
				<span className="total">Total: 	&#8377; 286.00</span>
				<span className="add">Add item</span>
			</button>
		</FooterrWrapper>
	);
}
 
export default Footer;