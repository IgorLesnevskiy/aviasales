import {utils} from "../index";

/**
 * Конструктор типа фильтра "Список чекбоксов"
 */
class CCheckboxesListBuilder {
	static TYPE = "checkboxesList";

	constructor(params = {}) {
		const {
			targetFields = [],
			titlesMap = {},
			labelGenerator = {}
		} = params;

		this.targetFields = targetFields;
		this.titlesMap = titlesMap;
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
				const values = data
					.map((item) => item[targetField])
					.filter((value, index, self) => typeof value !== 'undefined' && self.indexOf(value) === index)
					.sort()
					.reduce((acc, value) => {
						const id = utils.getUniqueId();

						return {
							...acc,
							[id]: {
								label: this._getLabelForItem(targetField, value),
								name: targetField,
								value,
								id,
								isChecked: false,
							}
						}
					}, {});

				const mergedValues = {
					...this._getCommonItem({
						name: targetField
					}),
					...values,
				};

				result.filtersData[targetField] = {
					title: this.titlesMap[targetField] || "",
					type: this.constructor.TYPE,
					code: targetField,
					data: mergedValues
				};

				result.defaultFiltersValues[targetField] = {
					code: targetField,
					type: this.constructor.TYPE,
					value: this._getDefaultValue(mergedValues) || []
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

	/**
	 * Получить общий чекбокс "Все"
	 * @param params
	 * @private
	 */
	_getCommonItem(params = {}) {
		const result = {};
		const uniqueId = utils.getUniqueId();
		const {
			only = false,
			name = "",
			id = uniqueId,
			value = "all",
			label = "Все",
			isChecked = false
		} = params;

		result[uniqueId] = {
			only,
			name,
			value,
			label,
			id,
			isChecked,
		};

		return result;
	}
}

export default CCheckboxesListBuilder;