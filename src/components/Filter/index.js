import React from "react";
// import styled from 'styled-components';

import FilterSection from "../FilterSection";

import styles from './styles.module.scss';

// const Filter = styled.div`
// 	background: #fff;
// 	padding: 1.5rem 0;
// `;
//
// const Filter__section = styled.div`
// 	& + & {
// 		margin-top: 3rem;
// 	}
// `;

// import styles from './styles.module.scss';

class Filter extends React.Component {
	render() {
		return (
			<div className={styles.filter}>
				<div className={styles.filter__section}>
					<FilterSection />
				</div>
				<div className={styles.filter__section}>
					<FilterSection />
				</div>
			</div>
		)
	}
}

export default Filter;