import {utils} from "../index";

class CCurrencyCheckerBuilder {
	static TYPE = "currencyChecker";

	constructor(params = {}) {
		const {
			targetFields = [],
			titlesMap = {},
			currencies = [{
				title: 'RUB',
				isDefault: true,
			}]
		} = params;

		this.targetFields = targetFields;
		this.titlesMap = titlesMap;
		this.currencies = currencies;
	}

	processData(data = []) {
		if (!data || !data.length) {
			return [];
		}

		let result = [];

		this.targetFields.forEach((targetField) => {
			const isFieldExists = data.some((item) => typeof item[targetField] !== 'undefined');

			if (isFieldExists) {
				const values = this.currencies
					// .map((item) => item[targetField])
					// .filter((value, index, self) => typeof value !== 'undefined' && self.indexOf(value) === index)
					.reduce((acc, value) => {
						const id = utils.getUniqueId();

						return {
							...acc,
							[id]: {
								label: value.title,
								value: value.title,
								name: targetField,
								id,
								isChecked: value.isDefault,
							}
						}
					}, {});

				result.push({
					title: this.titlesMap[targetField] || "",
					type: this.constructor.TYPE,
					data: values
				})
			}
		});

		return result;
	}
}

export default CCurrencyCheckerBuilder;