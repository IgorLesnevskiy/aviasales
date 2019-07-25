import {availableCurrencies} from "../index";

class CTicketsProcessor {
	static filterTickets(tickets = [], filterParams = {}) {
		if (!tickets.length) {
			return [];
		}

		let filtered = [...tickets];

		for (let paramName in filterParams) {
			if (filterParams.hasOwnProperty(paramName)) {
				const param = filterParams[paramName];
				const {
					code,
					type,
					value,
				} = param;

				switch (type) {
					case "currencyChecker":
						filtered.forEach((ticket) => {
							if (ticket[code]) {
								ticket[code] = value;
							}
						});

						break;
					case "checkboxesList":
						filtered = filtered.filter((ticket) => {
							if (!value || (Array.isArray(value) && !value.length)) {
								return true;
							}

							if (typeof ticket[code] === "undefined") {
								return true;
							}

							return (Array.isArray(value))
								? value.some(i => String(i) === String(ticket[code]))
								: String(value) === String(ticket[code]);
						});

						break;
					default:
						console.error('Unknown filter case');
				}
			}
		}

		return filtered;
	}

	static processTickets(tickets) {
		const currency = (availableCurrencies.default && availableCurrencies.default.title) || 'RUB';

		return tickets.map(ticket => {
			return {
				...ticket,
				priceCurrency: currency,
				basePriceCurrency: currency,
			}
		})
	}
}

export default CTicketsProcessor;