const colors = require('./colors');
const fontSize = require('./font-sizes');

const defaultConfig = {
    legacy: {
        colors: true,
        fontSize: true,
    },
};

module.exports = (_config) => {
    const config = {
        ...defaultConfig,
        ..._config,
    };

    return {
        colors: config.legacy.colors ? colors : {},
        fontSize: config.legacy.fontSize ? fontSize : {},
    };
};
