import React from 'react';
import styled from 'styled-components';
import Modal from './components/modal';

const AppWrapper = styled.div`
	/* top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0; */
	height: 100vh;
	width: 100vw;
	/* z-index: 9998; */
	/* position: fixed; */
	background: #000;
	background-color: rgba(0, 0, 0, 0.3);
`

const App = () => {
	return (
		<AppWrapper>
			<Modal />
		</AppWrapper>
	);
}
 
export default App;