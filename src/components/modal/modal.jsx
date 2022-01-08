import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import { colors, paddingFix, Title } from '../styles/variables';
import { CheckBox, RadioButton } from '../formElements/formElements';
import Header from '../header';

const ModalWrapper = styled.div`
	top: 50%;
	left: 50%;
	z-index: 9999;
	position: fixed;
	background-color: #fff;
	transform: translate(-50%,-50%);
	box-shadow: 0 2px 20px 0 rgba(40, 44, 63, 0.15);
	.int-modal{
    width: 600px;
		display: flex;
    height: 80vh;
		padding: 30px;
		position: relative;
    flex-flow: column;
		.items{
			overflow: scroll;
			height: calc(100% - 107px);
		}
	}
`

const Modal = () => {
	return (
		<ModalWrapper>
			<div className="int-modal">
				<Header />
				<div className="items">
					<Title>
						Choice of Tortillas
					</Title>
					<RadioButton radioName="Spinach"/>
					<RadioButton radioName="Multigrain"/>
					<RadioButton radioName="Spinach"/>

					{/* cheese */}
					<Title>
						Choice of Cheese
					</Title>
					<RadioButton radioName="Wrap Without Cheese"/>
					<RadioButton radioName="Wrap with cheese slice"/>

					{/* vegetables */}
					<Title>
						Choice of Vegetables
						<span className="op-text">(optional)</span>
					</Title>
					<CheckBox checkName="Lettuce"/>
					<CheckBox checkName="Tomato"/>
					<CheckBox checkName="Cucumber"/>
					<CheckBox checkName="Pickle"/>
					<CheckBox checkName="Capsicum"/>
					<CheckBox checkName="Onions"/>
					<CheckBox checkName="Jalapenos"/>
					<CheckBox checkName="Salt and Pepper"/>

					{/* vegetables */}
					<Title>
						Choice of Beverage
						<span className="op-text">(optional)</span>
					</Title>
					<CheckBox checkName="Pepsi 500 Ml"/>
					<CheckBox checkName="Life Juice"/>
					<CheckBox checkName="Pomegranate Juice"/>
					<CheckBox checkName="Valencia Orange juice"/>
					<CheckBox checkName="Mixed Fruits Juice"/>
					<CheckBox checkName="7 Up"/>
					<CheckBox checkName="Mirinda"/>
					<CheckBox checkName="Pepsi"/>
				</div>
				 
				<Footer />
			</div>
		</ModalWrapper>
	);
}
 
export default Modal;