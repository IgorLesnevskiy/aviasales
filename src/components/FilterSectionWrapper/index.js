import React, {useEffect, useReducer} from "react";
import Skeleton  from "react-loading-skeleton";
import cn from "classnames";

import FilterSectionCheckboxesList from "../FilterSectionCheckboxesList";
import FilterSectionCurrencyChecker from "../FilterSectionCurrencyChecker";

import './styles.scss';

function FilterSectionWrapper(props) {
		const {
			title,
			type,
			data,
			onSectionUpdate = Function.prototype
		} = props;

		const [state, updateState] = useReducer(
			(state, newState) => ({...state, ...newState}),
			{isLoading: true}
		);

		useEffect(() => {
			updateState({
				isLoading: false
			});
		}, []);

		let innerItem = null;
		if (type === 'checkboxesList') {
			innerItem = <FilterSectionCheckboxesList
				data = {data}
				type = {type}
				onSectionUpdate = {onSectionUpdate}
			/>
		} else  if (type === 'currencyChecker') {
			innerItem = <FilterSectionCurrencyChecker
				data = {data}
				type = {type}
				onSectionUpdate = {onSectionUpdate}
			/>
		}

		return (
			<React.Fragment>
				<div className={"filter-section-wrapper"}>
					<div className={"filter-section-wrapper__title"}>{state.isLoading ? <Skeleton/> : title}</div>
					<div className={cn("filter-section-wrapper__body", state.isLoading ? "skeleton" : null)}>
						{state.isLoading ? <Skeleton count={4} /> : innerItem}
					</div>
				</div>
			</React.Fragment>
		)
}

export default FilterSectionWrapper;
