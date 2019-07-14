import CCurrencyCheckerBuilder from "./_currencyCheckerBuilder.js";
import CCheckboxesListBuilder from "./_checkboxesListBuilder.js";
import {utils} from "../index";

const titlesMap = {
	stops: "Количество пересадок",
	priceCurrency: "Валюта"
};

// имена полей для обработки соответствующей стратегией
const targetFields ={
	checkboxesList: [
		'stops'
	],
	currencyChecker: [
		'priceCurrency'
	],
};

// доступный список валют
const availableCurrencies = [
	{
		title: 'RUB',
		isDefault: false
	},
	{
		title: 'USD',
		isDefault: true
	},
	{
		title: 'EUR',
		isDefault: false
	}
];

// генерация меток для типов полей
const labelsGeneratorMap = {
	stops: (value) => {
		const stopsEndings = ['пересадка', 'пересадки', 'пересадок'];

		return value === 0
			? "Без пересадок"
			: `${value} ${utils.getNounEnding(value, stopsEndings)}`;
	},
	priceCurrency: (value) => value,
};

/**
 * Конструктор фильтра
 *
 * TODO возможность задать порядок вывода секций
 */
class CFilterBuilder {
	constructor(params = {}) {
		const {
			// стратегии обработки полей для генерации секций фильтра
			strategies = [
				new CCheckboxesListBuilder({
					titlesMap,
					targetFields: targetFields.checkboxesList,
					labelGenerator: labelsGeneratorMap,
				}),
				new CCurrencyCheckerBuilder({
					titlesMap,
					targetFields: targetFields.currencyChecker,
					currencies: availableCurrencies,
					labelGenerator: labelsGeneratorMap,
				}),
			],
		} = params;

		this.strategies = strategies;
	}

	/**
	 * Генерация фильтра
	 * @param data - билеты для обработки
	 * @returns {{defaultFiltersValues: Array, filtersData: Array}}
	 */
	buildFilter(data = []) {
		const result = {
			filtersData: [],
			defaultFiltersValues: [],
		};

		if (!data || !data.length) {
			return result;
		}

		this.strategies.forEach((strategy) => {
			const {filtersData, defaultFiltersValues} = strategy.processData(data);

			result.filtersData.push(...filtersData);
			result.defaultFiltersValues.push(...defaultFiltersValues);
		});

		return result;
	}
}

export default CFilterBuilder;