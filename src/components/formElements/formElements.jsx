import React from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.div`
	.container {
		display: block;
		position: relative;
		padding-left: 25px;
		margin-bottom: 8px;
		cursor: pointer;
		font-size: 17px;
		user-select: none;
	}
	.container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}
	.checkmark {
		position: absolute;
		top: 3px;
		left: 0;
		height: 17px;
		width: 17px;
		background-color: transparent;
		border: 1px solid #000;
		border-radius: 50%;
	}

	/* Create the indicator (the dot/circle - hidden when not checked) */
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	/* Show the indicator (dot/circle) when checked */
	.container input:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the indicator (dot/circle) */
	.container .checkmark:after {
		top: 4px;
		left: 4px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #60b246;
	}
`

const CheckBoxWrapper = styled.div`
	.container {
		display: block;
		position: relative;
		padding-left: 25px;
		margin-bottom: 12px;
		cursor: pointer;
		font-size: 17px;
		user-select: none;
	}

	/* Hide the browser's default checkbox */
	.container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Create a custom checkbox */
	.checkmark {
		position: absolute;
		top: 3px;
		left: 0;
		height: 17px;
		width: 17px;
		border: 1px solid #000;
		background-color: transparent;
	}

	/* When the checkbox is checked, add a blue background */
	.container input:checked ~ .checkmark {
		background-color: transparent;
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	/* Show the checkmark when checked */
	.container input:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the checkmark/indicator */
	.container .checkmark:after {
		/* left: 9px;
		top: 5px;
		width: 5px;
		height: 10px; */
		left: 4px;
		bottom: 4px;
		width: 4px;
		height: 9px;
		border: solid #60b246;
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
	}
`

const RadioButton = ({radioName}) => {
	return (
		<RadioWrapper>
			<label className="container">
				{radioName}
				<input type="radio" name="radio" />
				<span className="checkmark"></span>
			</label>
		</RadioWrapper>
	);
}

const CheckBox = ({checkName}) => {
	return (
		<CheckBoxWrapper>
			<label className="container">
				{checkName}
				<input type="checkbox" />
				<span className="checkmark"></span>
			</label>
		</CheckBoxWrapper>
	);
}
 
export {
	RadioButton,
	CheckBox
};