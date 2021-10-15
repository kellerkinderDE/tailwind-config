const Values = require('values.js');

const gray = new Values('#171c21');
const orange = new Values('#f56600');

module.exports = {
    gray: {
        100: gray.hex,
        80: gray.tint(20).hex,
        60: gray.tint(40).hex,
        40: gray.tint(60).hex,
        20: gray.tint(80).hex,
    },
    orange: {
        100: orange.hex,
        80: orange.tint(20).hex,
        60: orange.tint(40).hex,
        40: orange.tint(60).hex,
        20: orange.tint(80).hex,
    },
    primary: gray.hex,
    secondary: orange.hex,
    accent: orange.hex,
};
