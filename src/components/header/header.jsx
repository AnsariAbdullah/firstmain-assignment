import React from 'react';
import styled from 'styled-components';
import { paddingFix } from '../styles/variables';

const HeaderWrapper = styled.header`
	position: relative;
	padding-bottom: 30px;
	border-bottom: 1px dotted #000;
	.title{
		font-size: 20px;
		font-weight: 500;
	}
	.close{
		position: absolute;
		color: #b0b0b0;
		top: -5px;
		right: 10px;
		cursor: pointer;
	}
` 

const Header = () => {
	return (
		<HeaderWrapper>
			<p className="title">Customize “Veggie Delite Signature Wraps”</p>
			<span className="close">X</span>
		</HeaderWrapper>
	);
}
 
export default Header;