import React from "react";

import './styles.scss';

class FilterSection extends React.Component {
	render() {
		return (
			<div className={"filter-section"}>
				<div className={"filter-section__title"}>Валюта</div>

				<div className={"filter-section__rows filter-section__rows--radio-row-list"}>
					<div className={"filter-section__row"}>

						<div className={"currency-checker-tabs"}>
							<div className={"currency-checker-tabs__item"}>

								<div className={"currency-checker"}>
									<input type="radio" value="RUB" name="currency" id="currency-1"
									       className={"currency-checker__input"} defaultChecked={"true"}/>
									<label htmlFor="currency-1" className={"currency-checker__label"}>RUB</label>
								</div>

							</div>
							<div className={"currency-checker-tabs__item"}>

								<div className={"currency-checker"}>
									<input type="radio" value="USD" name="currency" id="currency-2"
									       className={"currency-checker__input"} />
									<label htmlFor="currency-2" className={"currency-checker__label"}>USD</label>
								</div>

							</div>
							<div className={"currency-checker-tabs__item"}>

								<div className={"currency-checker"}>
									<input type="radio" value="EUR" name="currency" id="currency-3"
									       className={"currency-checker__input"}/>
									<label htmlFor="currency-3" className={"currency-checker__label"}>EUR</label>
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default FilterSection;

{/*<div className={"filter-section"}>*/}
	{/*<div className={"filter-section__title"}>Количество пересадок</div>*/}
	{/*<div className={"filter-section__rows filter-section__rows--checkboxes-list"}>*/}
		{/*<div className={"filter-section__row"}>*/}

			{/*<div className={"checkbox-line checkbox-line--simple"}>*/}
				{/*<div className={"checkbox-line__checkbox-wrapper"}>*/}

					{/*<label className={"checkbox checkbox-line__checkbox"}>*/}
						{/*<div className={"checkbox__box"}>*/}
							{/*<input type={"checkbox"} id={"checkbox-1"} />*/}

							{/*<FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>*/}
						{/*</div>*/}
						{/*<div className={"checkbox__label"}>*/}
							{/*Все*/}
						{/*</div>*/}
					{/*</label>*/}

				{/*</div>*/}
			{/*</div>*/}
		{/*</div>*/}
		{/*<div className={"filter-section__row"}>*/}
			{/*<div className={"checkbox-line"}>*/}
				{/*<div className={"checkbox-line__checkbox-wrapper"}>*/}

					{/*<label className={"checkbox checkbox-line__checkbox"}>*/}
						{/*<div className={"checkbox__box"}>*/}
							{/*<input type={"checkbox"} id={"checkbox-1"} />*/}

							{/*<FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>*/}
						{/*</div>*/}
						{/*<div className={"checkbox__label"}>*/}
							{/*Без пересадок*/}
						{/*</div>*/}
					{/*</label>*/}

				{/*</div>*/}

				{/*<div className={"checkbox-line__action-wrapper"}>*/}
					{/*<a href={"#"} className={"checkbox-line__action"}>Только</a>*/}
				{/*</div>*/}

			{/*</div>*/}
		{/*</div>*/}
		{/*<div className={"filter-section__row"}>*/}
			{/*<div className={"checkbox-line"}>*/}
				{/*<div className={"checkbox-line__checkbox-wrapper"}>*/}

					{/*<label className={"checkbox checkbox-line__checkbox"}>*/}
						{/*<div className={"checkbox__box"}>*/}
							{/*<input type={"checkbox"} id={"checkbox-1"} />*/}

							{/*<FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>*/}
						{/*</div>*/}
						{/*<div className={"checkbox__label"}>*/}
							{/*1 пересадка*/}
						{/*</div>*/}
					{/*</label>*/}

				{/*</div>*/}

				{/*<div className={"checkbox-line__action-wrapper"}>*/}
					{/*<a href={"#"} className={"checkbox-line__action"}>Только</a>*/}
				{/*</div>*/}

			{/*</div>*/}
		{/*</div>*/}
		{/*<div className={"filter-section__row"}>*/}
			{/*<div className={"checkbox-line"}>*/}
				{/*<div className={"checkbox-line__checkbox-wrapper"}>*/}

					{/*<label className={"checkbox checkbox-line__checkbox"}>*/}
						{/*<div className={"checkbox__box"}>*/}
							{/*<input type={"checkbox"} id={"checkbox-1"} />*/}

							{/*<FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>*/}
						{/*</div>*/}
						{/*<div className={"checkbox__label"}>*/}
							{/*2 пересадки*/}
						{/*</div>*/}
					{/*</label>*/}

				{/*</div>*/}

				{/*<div className={"checkbox-line__action-wrapper"}>*/}
					{/*<a href={"#"} className={"checkbox-line__action"}>Только</a>*/}
				{/*</div>*/}

			{/*</div>*/}
		{/*</div>*/}
		{/*<div className={"filter-section__row"}>*/}
			{/*<div className={"checkbox-line"}>*/}
				{/*<div className={"checkbox-line__checkbox-wrapper"}>*/}

					{/*<label className={"checkbox checkbox-line__checkbox"}>*/}
						{/*<div className={"checkbox__box"}>*/}
							{/*<input type={"checkbox"} id={"checkbox-1"} />*/}

							{/*<FontAwesomeIcon icon={['fas', 'check']} className="checkbox__tick"/>*/}
						{/*</div>*/}
						{/*<div className={"checkbox__label"}>*/}
							{/*3 пересадки*/}
						{/*</div>*/}
					{/*</label>*/}

				{/*</div>*/}

				{/*<div className={"checkbox-line__action-wrapper"}>*/}
					{/*<a href={"#"} className={"checkbox-line__action"}>Только</a>*/}
				{/*</div>*/}

			{/*</div>*/}
		{/*</div>*/}
	{/*</div>*/}
{/*</div>*/}
