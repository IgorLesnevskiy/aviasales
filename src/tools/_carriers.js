import tk from '../resources/images/carriers/tk.png';
import su from '../resources/images/carriers/su.png';
import s7 from '../resources/images/carriers/s7.png';


const carriers = {
	TK: {
		fullName: "Turkish Airlines",
		code: "TK",
		logo: tk,
		site: "https://www.turkishairlines.com/"
	},
	SU: {
		fullName: "Aeroflot",
		code: "SU",
		logo: su,
		site: "https://www.aeroflot.ru"
	},
	S7: {
		fullName: "S7 Airlines",
		code: "S7",
		logo: s7,
		site: "https://www.s7.ru/"
	},
};

/**
 * Получить информацию о перевозчике по его коду
 * @param {String} code
 * @returns {Object | null}
 */
function getCarrier(code) {
	return carriers[code] ? carriers[code] : null;
}

export default {
	getCarrier,
}
