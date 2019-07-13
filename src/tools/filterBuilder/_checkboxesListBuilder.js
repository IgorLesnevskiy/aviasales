import {utils} from "../index";

//TODO вынести на уровень зависимости
const labelGeneratorMap = {
	stops: (value) => {
		const stopsEndings = ['пересадка', 'пересадки', 'пересадок'];

		return value === 0
			? "Без пересадок"
			: `${value} ${utils.getNounEnding(value, stopsEndings)}`;
	}
};

class CCheckboxesListBuilder {
	static TYPE = "checkboxesList";

	constructor(params = {}) {
		const {
			targetFields = [],
			titlesMap = {}
		} = params;

		this.targetFields = targetFields;
		this.titlesMap = titlesMap;
	}

	processData(data = []) {
		if (!data || !data.length) {
			return [];
		}

		let result = [];

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

				result.push({
					title: this.titlesMap[targetField] || "",
					type: this.constructor.TYPE,
					data: {
						...this._getCommonItem({
							name: targetField
						}),
						...values,
					}
				})
			}
		});

		return result;
	}

	_getLabelForItem(type = '', value) {
		if (labelGeneratorMap[type]) {
			return labelGeneratorMap[type](value);
		}
	}

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