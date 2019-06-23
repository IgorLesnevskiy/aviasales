import Joi from "@hapi/joi";

/**
 * Элемент курсов валют для базовой валюты
 */
class CRateUnit {
	constructor(params = {}) {
		const {base, timestamp = Date.now(), rates} = params;
		const unit = this._buildUnit(base, rates, timestamp);

		this._validateSchema = Joi.object({
			base: Joi.string().length(3).required(),
			timestamp: Joi.date().timestamp().required(),
			rates: Joi.object().min(1).required()
		});

		this.unit = this.isValidUnit(unit) ? unit : false;
	}

	/**
	 * Вернуть курс для валюты
	 * @param currency - валюта
	 * @returns {*}
	 */
	getRateForCurrency(currency) {
		if (!this.isValidUnit() || !currency) {
			return false;
		}

		return this.rates[currency] || false;
	}

	/**
	 * Проверка валидности юнита
	 * @returns {boolean}
	 */
	isValidUnit(unit = null) {
		const result = Joi.validate(unit ? unit.data : this.unit.data, this._validateSchema);

		if (result.error) {
			console.error(result.error);
			return false;
		}

		return true;
	}

	/**
	 * Данные юнита в виде объекта
	 * @returns {{rates: (*|null), base: *, timestamp: *}}
	 */
	get data() {
		return {
			base: this.unit.base,
			rates: this.unit.rates,
			timestamp: this.unit.timestamp
		};
	}

	/**
	 * Базовая валюта юнита
	 * @returns {*}
	 */
	get base() {
		return this.unit.base;
	}

	/**
	 * Список курсов валют для базовой валюты
	 * @returns {*|null}
	 */
	get rates() {
		return this.unit.rates;
	}

	/**
	 * Время создания юнита
	 * @returns {*}
	 */
	get timestamp() {
		return this.unit.timestamp;
	}

	/**
	 * Создать новый юнит
	 * @param base - базовая валют
	 * @param rates - список курсов валют
	 * @param timestamp - временная метка
	 * @returns {*}
	 * @private
	 */
	_buildUnit(base, rates, timestamp = Date.now()) {
		if (!base || !Object.keys(rates).length) {
			return false;
		}

		return {
			base,
			timestamp,
			rates,
		}
	}
}

export default CRateUnit;