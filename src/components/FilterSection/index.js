import React from "react";
import CurrencyCheckerTabs from '../CurrencyCheckerTabs';
import CheckboxLine from '../CheckboxLine';

import cn from 'classnames';

import styles from './styles.module.scss';

// import styled from "styled-components";
//
// const FilterSectionWrapper = styled.div`
// 	background: #fff;
// 	padding: 1.5rem 0;
// `;
//
// const FilterSectionTitle = styled.div`
// 	margin-bottom: 1.2rem;
// 	text-transform: uppercase;
// 	font-weight: 500;
// 	padding-left: 1.5rem;
// 	padding-right: 1.5rem;
// `;
//
// const FilterSectionRows = styled.div`
// 	background: #fff;
// 	padding: 1.5rem 0;
// `;
//
// const FilterSectionRow = styled.div`
// 	padding-left: 1.5rem;
// 	padding-right: 1.5rem;
// `;

class FilterSection extends React.Component {
	render() {
		return (
			<div className={styles["filter-section"]}>
				<div className={styles["filter-section__title"]}>Валюта</div>

				<div className={cn([styles["filter-section__rows"], styles["filter-section__rows--radio-row-list"]])}>
					<div className={styles["filter-section__row"]}>
						<CurrencyCheckerTabs />
					</div>
				</div>

				{/*<div className={cn([styles["filter-section__rows"], styles["filter-section__rows--checkboxes-list"]])}>*/}
					{/*<div className={styles["filter-section__row"]}>*/}
						{/*<CheckboxLine />*/}
					{/*</div>*/}
					{/*<div className={styles["filter-section__row"]}>*/}
						{/*<CheckboxLine />*/}
					{/*</div>*/}
					{/*<div className={styles["filter-section__row"]}>*/}
						{/*<CheckboxLine />*/}
					{/*</div>*/}
					{/*<div className={styles["filter-section__row"]}>*/}
						{/*<CheckboxLine />*/}
					{/*</div>*/}
				{/*</div>*/}
			</div>
		)
	}
}

export default FilterSection;
