import axios from "axios";

const API_URL = "https://api.ratesapi.io/api/latest";
const LOCAL_STORAGE_KEY = "currenciesRates";
const CACHE_TIME = 3600 * 1000;

/**
 * Класс для конвертации цен
 * TODO вынести контроллер для работы с кэшем в отдельную сущность
 */
class CPriceConverter {
	constructor(params = {}) {
		const {storageController, unitBuilder} = params;

		this.storageController = storageController ? new storageController() : null;
		this.unitBuilder = unitBuilder ? unitBuilder : null;

		if (!this.storageController) {
			console.warn('[CPriceConverter]: storageController не определен, работа с локальным хранилищем невозможна');
		}

		if (!this.unitBuilder) {
			console.error('[CPriceConverter]: unitBuilder не определен, работа с сервисом невозможна');
		}
	}

	/**
	 * Конвертирует цену из одной валюты в другую
	 * @param from - базовая валютч
	 * @param to - валюта, в которую нужно конвертировать
	 * @param amount - количество для конвертации
	 * @returns {Promise}
	 */
	async convertPrice(from = 'RUB', to = 'USD', amount = 0) {
		if (!this.unitBuilder) {
			return amount;
		}

		const unit = await this.getActualCurrenciesRate(from);

		return (unit)
			? Number(amount) * unit.getRateForCurrency(to)
			: amount;
	}

	/**
	 * Получить актуальные данные по курсам валют для базовой валюты
	 * Данные либо буду получены из кэша, либо загружени из удаленного API и закэшированы
	 * @param needleBase - базовая валюта, для которой нужно получить курсы
	 * @returns {Promise}
	 */
	async getActualCurrenciesRate(needleBase = "RUB") {
		if (!this.unitBuilder) {
			return false;
		}

		if (!needleBase) {
			return Promise.reject('Не передана базовая валюта');
		}

		const data = this._getRatesFromCache(needleBase);

		if (!data) {
			try {
				const result = await this._loadCurrenciesRateByBase(needleBase);
				if (!result) {
					return false;
				}

				const {base = null, rates = null} = result;
				const unit = new this.unitBuilder({
					base,
					rates
				});
				if (!unit) {
					Promise.reject(`Невалидный юнит`);
				}

				this._cacheRates(unit);
				return unit;

			} catch (e) {
				console.error(e);
			}
		} else {
			return Promise.resolve(data);
		}
	}

	/**
	 * Обертка над axios-запросом
	 * @param url - адрес запроса
	 * @param params - параметры для запроса
	 * @returns {*}
	 * @private
	 */
	async _makeGetRequest(url, params) {
		if (!url) {
			return Promise.reject('Не передан url для запроса');
		}

		try {
			const response = await axios.get(url, {
				params: {
					...params
				}
			});

			return response.data;
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 * URL для валютного API
	 * @returns {string}
	 * @private
	 */
	_getUrlForRequest() {
		return API_URL;
	}

	/**
	 * Загрузить данные с курсами валют из API
	 * @param base - базовая валюта, для которой нужны курсы
	 * @returns {Promise}
	 * @private
	 */
	_loadCurrenciesRateByBase(base = "RUB") {
		if (!base) {
			return Promise.reject('Не передана базовая валюта');
		}

		return this._makeGetRequest(this._getUrlForRequest(), {
			base
		})
	}

	/**
	 * Закэшировать данные курсов валют
	 * @param unit
	 * @returns {*}
	 * @private
	 */
	_cacheRates(unit) {
		if (!unit || !this.storageController) {
			return false;
		}

		const currenciesRates = this.storageController.getFromStorage(LOCAL_STORAGE_KEY) || '[]';
		const parsed = JSON.parse(currenciesRates);

		this.storageController.setToStorage(LOCAL_STORAGE_KEY, JSON.stringify({
			...parsed,
			[unit.base]: unit.data,
		}));
	}

	/**
	 * Проверить, не протух ли кэш
	 * @param timestamp
	 * @returns {*|boolean}
	 * @private
	 */
	_isCacheStillAlive(timestamp = 0) {
		return (Number(timestamp) + CACHE_TIME) > Date.now();
	}

	/**
	 * Запросить данные по курсам валют из локального хранилища
	 * @param base - базовая валюта, для которой нужны курсы
	 * @returns {Object | boolean}
	 * @private
	 */
	_getRatesFromCache(base) {
		if (!this.storageController || !base) {
			return false;
		}

		const currenciesRates = this.storageController.getFromStorage(LOCAL_STORAGE_KEY) || '[]';
		const unitData = JSON.parse(currenciesRates);
		if (!unitData || !unitData[base]) {
			return false;
		}

		const unit = new this.unitBuilder(unitData[base]);
		if (!unit || !unit.isValidUnit()) {
			return false;
		}

		return this._isCacheStillAlive(unit.timestamp) ? unit : false;
	}
}

export default CPriceConverter;