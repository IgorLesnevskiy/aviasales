import moment from 'moment';
import 'moment/locale/ru';

/**
 * Конвертор даты
 * @param {Object} params - объект параметров
 * @param {String} params.date - дата для конвертации
 * @param {String} params.formatString - формат для конвертации
 * @param {String} params.originalFormatString - оригинальный формат, в котором пердставлена дата
 * @param {String} params.locale - локаль
 *
 * @example
 *      convertDate({
 *					date: '12.05.18',
 *					formatString: 'DD MMM YYYY, dd',
 *					locale: 'ru'
 *				}); // 12 мая 2018, сб
 *
 * @returns {string}
 */
function convertDate(params) {
	const {date, formatString = 'MM/dd/YYYY', originalFormatString = 'L', locale = 'ru'} = params;

	return (date) ? moment(date, originalFormatString, locale)
		.locale(locale)
		.format(formatString) : '';
}

/**
 * Возвращает склонение слова относительно числа
 * @param {Number} n - число
 * @param {Array} endings - массив склонений
 *
 * @example
 *      getNounEnding(3, ['арбуз', 'арбуза', 'арбузов']);
 *
 * @returns {String}
 */
function getNounEnding(n, endings = []) {
	const cases = [2, 0, 1, 1, 1, 2];
	const number = Math.abs(n);

	return endings[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
}

/**
 * Конвертация цены для локали
 * @param amount
 * @param locale
 * @param maximumFractionDigits
 *
 * @example
 *    convertToLocalPrice(1200.45); // 12 000,45
 *
 * @returns {any}
 */
function convertToLocalPrice(amount = 0, locale = 'RU', maximumFractionDigits = 0) {
	const n = Number(amount);

	return typeof n === 'number' ? n.toLocaleString(locale, {
		maximumFractionDigits
	}) : 0;
}

/**
 * Генерация уникального ID
 * @param length
 * @returns {string}
 */
function getUniqueId(length = 10) {
	let dt = new Date().getTime();

	return 'x'.repeat(length).replace(/[x]/g, function() {
		const r = (dt + Math.random()*16)%16 | 0;
		dt = Math.floor(dt/16);
		return r.toString(16);
	});
}

export default {
	convertToLocalPrice,
	convertDate,
	getUniqueId,
	getNounEnding
};

