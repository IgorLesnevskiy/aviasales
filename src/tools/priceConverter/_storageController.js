/**
 * Контроллер для работы с хранилищем
 */
class CStorageController {
	/**
	 * Получить данные из хранилища по ключу
	 * @param key - ключ
	 * @returns {*} данные
	 * @private
	 */
	getFromStorage(key) {
		return localStorage.getItem(key);
	}

	/**
	 * Записать данные в хранилище по ключу
	 * @param key - ключ
	 * @param data - данные
	 * @private
	 */
	setToStorage(key, data) {
		return localStorage.setItem(key, data);
	}
}

export default CStorageController;
