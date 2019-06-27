import React, {useEffect, useReducer} from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import FilterSectionCheckboxesList from "../FilterSectionCheckboxesList";
import FilterSectionCurrencyChecker from "../FilterSectionCurrencyChecker";

import './styles.scss';

const loader = <SkeletonTheme>
	<div className={"filter-section-wrapper"}>
		<div className={"filter-section-wrapper__title"}>
			<Skeleton/>
		</div>
		<div className={"filter-section-wrapper__body skeleton"}>
			<Skeleton count={4}/>
		</div>
	</div>
</SkeletonTheme>;

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

		const render = state.isLoading
			? loader
			: <div className={"filter-section-wrapper"}>
				<div className={"filter-section-wrapper__title"}>{title}</div>
					<div className={"filter-section-wrapper__body"}>
						{innerItem}
					</div>
				</div>;

		return (
			<React.Fragment>
				{render}
			</React.Fragment>
		)
}

export default FilterSectionWrapper;
