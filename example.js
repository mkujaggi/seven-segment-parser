const constants = require('./constants');
const {sevenSegParser} = require('./index');
sevenSegParser(constants.INPUT_FILE, constants.OUTPUT_FILE);
