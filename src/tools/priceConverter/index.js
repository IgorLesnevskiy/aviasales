import CPriceConverter from "./_priceConverter";
import CStorageController from "./_storageController";
import CRateUnit from "./_rateUnit";

export default function(params = {}) {
	const {
		storageController = CStorageController,
		unitBuilder = CRateUnit
	} = params;

	return new CPriceConverter({
		storageController,
		unitBuilder
	})
};