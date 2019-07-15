import {utils} from "../index";

/**
 * Конструктор типа фильтра "Выбор валюты"
 */
class CCurrencyCheckerBuilder {
	static TYPE = "currencyChecker";

	constructor(params = {}) {
		const {
			targetFields = [],
			titlesMap = {},
			labelGenerator = {},
			currencies = [{
				title: 'RUB',
				isDefault: true,
			}]
		} = params;

		this.targetFields = targetFields;
		this.titlesMap = titlesMap;
		this.currencies = currencies;
		this.labelGenerator = labelGenerator;
	}

	/**
	 * Обработка и генерация данных
	 * @param data
	 * @returns {{defaultFiltersValues: {}, filtersData: {}}}
	 */
	processData(data = []) {
		const result = {
			filtersData: {},
			defaultFiltersValues: {},
		};

		if (!data || !data.length) {
			return result;
		}

		this.targetFields.forEach((targetField) => {
			const isFieldExists = data.some((item) => typeof item[targetField] !== 'undefined');

			if (isFieldExists) {
				const values = this.currencies
					.reduce((acc, value) => {
						const id = utils.getUniqueId();

						return {
							...acc,
							[id]: {
								label: this._getLabelForItem(targetField, value.title),
								value: value.title,
								name: targetField,
								id,
								isChecked: value.isDefault,
							}
						}
					}, {});

				result.filtersData[targetField] = {
					title: this.titlesMap[targetField] || "",
					type: this.constructor.TYPE,
					code: targetField,
					data: values
				};

				result.defaultFiltersValues[targetField] = {
					code: targetField,
					type: this.constructor.TYPE,
					value: this._getDefaultValue(values) || []
				};
			}
		});

		return result;
	}

	_getDefaultValue(data = {}) {
		return Object.entries(data)
			.filter((item) => item[1].isChecked)
			.map((item) => item[1].value)
	}

	/**
	 * Генерация лейбла
	 * @param type
	 * @param value
	 * @returns {*}
	 * @private
	 */
	_getLabelForItem(type = '', value) {
		if (this.labelGenerator && this.labelGenerator[type]) {
			return this.labelGenerator[type](value);
		} else {
			return value;
		}
	}
}

export default CCurrencyCheckerBuilder;