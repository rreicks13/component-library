const PlacesSelect = require('./places-select');
const utilities = require('./utilities');

module.exports = {
    default: PlacesSelect,
    getFullAddressString: utilities.getFullAddressString,
};
