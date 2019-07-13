import CCurrencyCheckerBuilder from "./_currencyCheckerBuilder.js";
import CCheckboxesListBuilder from "./_checkboxesListBuilder.js";

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
					targetFields: targetFields.checkboxesList
				}),
				new CCurrencyCheckerBuilder({
					titlesMap,
					targetFields: targetFields.currencyChecker,
					currencies: availableCurrencies
				}),
			],
		} = params;

		this.strategies = strategies;
	}

	/**
	 * Генерация фильтра
	 * @param data - билеты для обработки
	 * @returns {Array}
	 */
	buildFilter(data = []) {
		if (!data || !data.length) {
			return [];
		}

		const result = [];

		this.strategies.forEach((strategy) => {
			result.push(...strategy.processData(data));
		});

		return result;
	}
}

export default CFilterBuilder;