const Values = require('values.js');

const gray = new Values('#171c21');
const orange = new Values('#f56600');

module.exports = {
    gray: {
        100: gray.hexString(),
        80: gray.tint(20).hexString(),
        60: gray.tint(40).hexString(),
        40: gray.tint(60).hexString(),
        20: gray.tint(80).hexString(),
    },
    orange: {
        100: orange.hexString(),
        80: orange.tint(20).hexString(),
        60: orange.tint(40).hexString(),
        40: orange.tint(60).hexString(),
        20: orange.tint(80).hexString(),
    },
    primary: gray.hexString(),
    secondary: orange.hexString(),
    accent: orange.hexString(),
};
