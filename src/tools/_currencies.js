export default {
	currenciesList: [
		{
			title: 'RUB',
			isDefault: true
		},
		{
			title: 'USD',
			isDefault: false
		},
		{
			title: 'EUR',
			isDefault: false
		}
	],
	get default() {
		return this.currenciesList.find(c => c.isDefault) || null
	}
}
