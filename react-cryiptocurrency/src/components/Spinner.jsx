import React from 'react'
import './Spinner.css';
// import styled from '@emotion/styled';

// const SpinningCoin = styled.div`
// 	align-items: center;
// 	justify-content: center;
// 	height: 175px;
// 	overflow: hidden;
// 	width: 100%;
//  	`

const Spinner = () => {
	return (
		// <SpinningCoin className="spinning-coin">
			
		// </SpinningCoin>
		<div class="sk-cube-grid">
		<div class="sk-cube sk-cube1"></div>
		<div class="sk-cube sk-cube2"></div>
		<div class="sk-cube sk-cube3"></div>
		<div class="sk-cube sk-cube4"></div>
		<div class="sk-cube sk-cube5"></div>
		<div class="sk-cube sk-cube6"></div>
		<div class="sk-cube sk-cube7"></div>
		<div class="sk-cube sk-cube8"></div>
		<div class="sk-cube sk-cube9"></div>
		</div>
	)
}

export default Spinner
