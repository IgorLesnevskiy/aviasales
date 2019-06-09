import moment from 'moment';
import 'moment/locale/ru';

class utils {
	static convertDate(params) {
		const {date, formatString = 'MM/dd/YYYY', originalFormatString = 'L', locale = 'ru'} = params;

		return (date) ? moment(date, originalFormatString, locale)
			.locale(locale)
			.format(formatString) : '';
	}
}

export default utils;

