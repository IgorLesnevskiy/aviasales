const path = require("path");
const resources = [
	"_vars.scss",
	"_mixins.scss"
];
module.exports = resources.map(file => path.resolve(__dirname, file));
