import React from "react";
import styled from 'styled-components';

import FilterSection from "../FilterSection";

const FilterElement = styled.div`
	background: #fff;
	padding: 1.5rem 0;
`;

const Filter__section = styled.div`
	& + & {
		margin-top: 3rem;
	}
`;

class Filter extends React.Component {
	render() {
		return (
			<FilterElement>
				<Filter__section>
					<FilterSection />
				</Filter__section>
				<Filter__section>
					<FilterSection />
				</Filter__section>
			</FilterElement>
		)
	}
}

export default Filter;