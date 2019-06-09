const localization = {
	ru: {
		fullDateFormat: 'DD MMM YYYY, dd',
	}
};

export default (lang) => {
	return localization[lang] ? localization[lang] : null
}